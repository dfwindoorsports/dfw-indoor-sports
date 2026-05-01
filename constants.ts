import { Trophy, Users, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  {
    label: 'Sports',
    href: '/sports',
    children: [
      { label: 'All Sports', href: '/sports' },
      { label: 'Cricket Lanes', href: '/cricket-lanes' },
      { label: 'Badminton Courts', href: '/badminton-courts' },
      { label: 'Soccer Fields', href: '/soccer-fields' },
      { label: 'Dodgeball Courts', href: '/dodgeball-courts' },
    ]
  },
  {
    label: 'Book & Play',
    href: '/rentals',
    children: [
      { label: 'Rentals', href: '/rentals' },
      { label: 'Memberships', href: '/memberships' },
      { label: 'Special Events', href: '/events' },
    ]
  },
  {
    label: 'Academy',
    href: '/academy',
    children: [
      { label: 'Programs', href: '/academy' },
      { label: 'Our Coaches', href: '/academy/coaches' },
    ]
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Partners', href: '/partners' },
      { label: 'Areas We Serve', href: '/areas-we-serve' },
    ]
  },
];

export const MARQUEE_ITEMS = [
  'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER', 'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER'
];

export const CONTACT_INFO = {
  phone: '(817) 938-0808',
  email: 'info@dfwindoorsports.com',
  address: 'DFW Indoor Sports, 16230 Three Wide Dr Suite 200, Fort Worth, TX 76177'
};