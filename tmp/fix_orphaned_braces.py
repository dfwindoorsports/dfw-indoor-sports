import os
import re

root = "/Users/codex/Downloads/Code Files/dfw-indoor-sports"
dirs = [os.path.join(root, "components"), os.path.join(root, "app")]

# Pattern variations:
# 1. blank line + } + blank line  
# 2. whitespace + } on a line by itself between motion tag and className/transition
# We need to catch: <motion.xxx\n  \n  }\n  className
patterns = [
    # blank + } + blank
    re.compile(r'\n[ \t]*\n[ \t]*\}[ \t]*\n[ \t]*\n'),
    # \n + whitespace + \n + whitespace + } + \n + whitespace + (className|transition)
    re.compile(r'\n([ \t]*)\n([ \t]*)\}\n([ \t]*)(className|transition)'),
    # motion.XXX + \n + whitespace + } + \n (tight)
    re.compile(r'(<motion\.\w+)\n([ \t]*)\n([ \t]*)\}[ \t]*\n'),
]

replacements = [
    '\n',
    lambda m: f'\n{m.group(3)}{m.group(4)}',
    lambda m: f'{m.group(1)}\n',
]

fixed_count = 0
for d in dirs:
    for dirpath, dirnames, filenames in os.walk(d):
        for fn in filenames:
            if fn.endswith('.tsx'):
                fpath = os.path.join(dirpath, fn)
                with open(fpath, 'r') as f:
                    content = f.read()
                
                new_content = content
                for pat, repl in zip(patterns, replacements):
                    new_content = pat.sub(repl, new_content)
                
                if new_content != content:
                    with open(fpath, 'w') as f:
                        f.write(new_content)
                    fixed_count += 1
                    print(f"Fixed: {os.path.relpath(fpath, root)}")

print(f"\nTotal fixed: {fixed_count} files")
