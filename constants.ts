import { Trophy, Users, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Our Sports', href: '/sports' },
  {
    label: 'Coaching',
    href: '/academy',
    children: [
      { label: 'Academy', href: '/academy' },
      { label: 'Coaches', href: '/academy/coaches' }
    ]
  },
  { label: 'Memberships', href: '/memberships' },
  {
    label: 'Rentals',
    href: '/rentals',
    children: [
      { label: 'Overview', href: '/rentals' },
      { label: 'Cricket Lanes', href: '/cricket-lanes' },
      { label: 'Badminton Courts', href: '/badminton-courts' },
      { label: 'Soccer Fields', href: '/soccer-fields' },
      { label: 'Dodgeball Courts', href: '/dodgeball-courts' }
    ]
  },
  {
    label: 'Areas We Serve',
    href: '/areas-we-serve',
    children: [
      { label: 'All Locations', href: '/areas-we-serve' },
      { label: 'Dallas', href: '/areas-we-serve/dallas' },
      { label: 'Arlington', href: '/areas-we-serve/arlington' },
      { label: 'Plano', href: '/areas-we-serve/plano' },
      { label: 'Irving', href: '/areas-we-serve/irving' },
      { label: 'Frisco', href: '/areas-we-serve/frisco' }
    ]
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Special Events', href: '/events' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
];

export const MARQUEE_ITEMS = [
  'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER', 'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER'
];

export const CONTACT_INFO = {
  phone: '(817) 938-0808',
  email: 'info@dfwindoorsports.com',
  address: 'DFW Indoor Sports, 16230 Three Wide Dr, Fort Worth, TX 76177'
};