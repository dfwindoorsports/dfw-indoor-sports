import os
import re

root = "/Users/codex/Downloads/Code Files/dfw-indoor-sports"
dirs = [os.path.join(root, "components"), os.path.join(root, "app")]

# Replacement patterns: convert light backgrounds and text to dark theme
replacements = [
    # Section backgrounds
    (r'bg-white dark:bg-\[#020408\]', 'bg-[#0A111F]'),
    (r'bg-white dark:bg-\[#050911\]', 'bg-[#050911]'),
    (r'bg-white dark:bg-gray-900', 'bg-[#0A111F]'),
    (r'bg-gray-50 dark:bg-\[#050911\]', 'bg-[#050911]'),
    (r'bg-gray-50 dark:bg-gray-900', 'bg-[#0A111F]'),
    (r'bg-gray-50 dark:bg-\[#020408\]', 'bg-[#050911]'),
    (r'bg-gray-50 dark:bg-black', 'bg-[#050911]'),
    
    # Standalone section backgrounds (without dark: variant)
    (r'"bg-gray-50"', '"bg-[#050911]"'),
    (r'"bg-gray-50 ', '"bg-[#050911] '),
    (r' bg-gray-50"', ' bg-[#050911]"'),
    (r' bg-gray-50 ', ' bg-[#050911] '),
    
    # Card backgrounds
    (r'bg-white dark:bg-white/5', 'bg-white/5'),
    (r'bg-white dark:bg-\[#0A111F\]', 'bg-[#0A111F]'),
    (r'bg-white border', 'bg-white/5 border'),
    
    # Borders
    (r'border-gray-200 dark:border-white/10', 'border-white/10'),
    (r'border-gray-100 dark:border-white/10', 'border-white/10'),
    (r'border-gray-200 dark:border-gray-700', 'border-white/10'),
    (r'border-gray-100 dark:border-gray-800', 'border-white/10'),
    (r'border-b border-gray-100 dark:border-white/5', 'border-b border-white/5'),
    (r'border-b border-gray-200', 'border-b border-white/10'),
    
    # Text colors
    (r'text-dfw-navy dark:text-white', 'text-white'),
    (r'text-gray-900 dark:text-white', 'text-white'),
    (r'text-gray-800 dark:text-gray-200', 'text-gray-200'),
    (r'text-gray-700 dark:text-gray-300', 'text-gray-300'),
    (r'text-gray-600 dark:text-gray-400', 'text-gray-400'),
    (r'text-gray-600 dark:text-gray-300', 'text-gray-300'),
    (r'text-gray-500 dark:text-gray-400', 'text-gray-400'),
    
    # Icon/element backgrounds
    (r'bg-blue-50 dark:bg-blue-900/20', 'bg-blue-900/20'),
    (r'bg-red-50 dark:bg-red-900/20', 'bg-red-900/20'),
    (r'bg-green-50 dark:bg-green-900/20', 'bg-green-900/20'),
    (r'bg-amber-50 dark:bg-amber-900/20', 'bg-amber-900/20'),
    (r'bg-purple-50 dark:bg-purple-900/20', 'bg-purple-900/20'),
    (r'bg-orange-50 dark:bg-orange-900/20', 'bg-orange-900/20'),
    (r'bg-yellow-50 dark:bg-yellow-900/20', 'bg-yellow-900/20'),
    (r'bg-gray-50 dark:bg-gray-800', 'bg-gray-800'),
    (r'bg-gray-100 dark:bg-gray-800', 'bg-gray-800'),
    
    # Icon text colors
    (r'text-blue-600 dark:text-blue-400', 'text-blue-400'),
    (r'text-green-600 dark:text-green-400', 'text-green-400'),
    (r'text-red-600 dark:text-red-400', 'text-red-400'),
    (r'text-amber-600 dark:text-amber-400', 'text-amber-400'),
    (r'text-purple-600 dark:text-purple-400', 'text-purple-400'),
    (r'text-orange-600 dark:text-orange-400', 'text-orange-400'),
    
    # Shadow adjustments
    (r'shadow-sm dark:shadow-none', 'shadow-none'),
    
    # Other dark: removals
    (r'dark:bg-\[#020408\]', ''),
    (r'dark:bg-\[#050911\]', ''),
    (r'dark:bg-black', ''),
    (r'dark:bg-gray-900', ''),
    (r'dark:text-white', ''),
    (r'dark:text-gray-\d+', ''),
    (r'dark:border-white/\d+', ''),
    (r'dark:border-gray-\d+', ''),
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
                for pattern, replacement in replacements:
                    new_content = re.sub(pattern, replacement, new_content)
                
                # Clean up double spaces from removed dark: classes
                new_content = re.sub(r'  +', ' ', new_content)
                # Clean up trailing spaces before closing quotes
                new_content = re.sub(r' "', '"', new_content)
                # But fix the broken className=" pattern
                new_content = new_content.replace('className="', 'className="')
                
                if new_content != content:
                    with open(fpath, 'w') as f:
                        f.write(new_content)
                    fixed_count += 1

print(f"Total: {fixed_count} files converted to dark theme")
