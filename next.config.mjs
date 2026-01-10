/** @type {import('next').NextConfig} */
const nextConfig = {
  // outputFileTracingRoot removed - let Next.js auto-detect project root
  reactStrictMode: true,
  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // Wikipedia for coach credential logos
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // ============================================
      // WORDPRESS → NEXT.JS SEO REDIRECTS
      // All 301 Permanent Redirects for SEO preservation
      // ============================================

      // About & Info Pages
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },

      // Legal Pages (Critical for user trust)
      { source: '/release-and-waiver-of-liability', destination: '/waiver', permanent: true },
      { source: '/release-and-waiver-of-liability/', destination: '/waiver', permanent: true },
      { source: '/refunds-cancellations', destination: '/refund-policy', permanent: true },
      { source: '/refunds-cancellations/', destination: '/refund-policy', permanent: true },

      // Programs & Memberships
      { source: '/our-membership-program', destination: '/memberships', permanent: true },
      { source: '/our-membership-program/', destination: '/memberships', permanent: true },
      { source: '/sponsors', destination: '/partners', permanent: true },
      { source: '/sponsors/', destination: '/partners', permanent: true },
      { source: '/our-sports', destination: '/sports', permanent: true },
      { source: '/our-sports/', destination: '/sports', permanent: true },

      // Academy & Coaching
      { source: '/coaches', destination: '/academy/coaches', permanent: true },
      { source: '/coaches/', destination: '/academy/coaches', permanent: true },
      { source: '/registration', destination: '/academy', permanent: true },
      { source: '/registration/', destination: '/academy', permanent: true },

      // Events
      { source: '/special-events', destination: '/events', permanent: true },
      { source: '/special-events/', destination: '/events', permanent: true },
      { source: '/hitman', destination: '/events', permanent: true },
      { source: '/hitman/', destination: '/events', permanent: true },

      // Sport-Specific Rentals (Old Nested Structure → Flat)
      { source: '/rentals/cricket-lane-rental', destination: '/cricket-lanes', permanent: true },
      { source: '/rentals/cricket-lane-rental/', destination: '/cricket-lanes', permanent: true },
      { source: '/rentals/badminton-court-rentals', destination: '/badminton-courts', permanent: true },
      { source: '/rentals/badminton-court-rentals/', destination: '/badminton-courts', permanent: true },
      { source: '/rentals/soccer-field-rentals', destination: '/soccer-fields', permanent: true },
      { source: '/rentals/soccer-field-rentals/', destination: '/soccer-fields', permanent: true },
      { source: '/rentals/dodgeball-court-rentals', destination: '/dodgeball-courts', permanent: true },
      { source: '/rentals/dodgeball-court-rentals/', destination: '/dodgeball-courts', permanent: true },
      { source: '/rentals/baseball-lane-rental', destination: '/rentals', permanent: true },
      { source: '/rentals/baseball-lane-rental/', destination: '/rentals', permanent: true },

      // Old Sport Pages (Simple names → Descriptive)
      { source: '/badminton', destination: '/badminton-courts', permanent: true },
      { source: '/badminton/', destination: '/badminton-courts', permanent: true },
      { source: '/dodgeball', destination: '/dodgeball-courts', permanent: true },
      { source: '/dodgeball/', destination: '/dodgeball-courts', permanent: true },
      { source: '/cricket', destination: '/cricket-lanes', permanent: true },
      { source: '/cricket/', destination: '/cricket-lanes', permanent: true },
      { source: '/soccer', destination: '/soccer-fields', permanent: true },
      { source: '/soccer/', destination: '/soccer-fields', permanent: true },
      { source: '/indoor-cricket-facility', destination: '/cricket-lanes', permanent: true },
      { source: '/indoor-cricket-facility/', destination: '/cricket-lanes', permanent: true },
      { source: '/indoor-soccer', destination: '/soccer-fields', permanent: true },
      { source: '/indoor-soccer/', destination: '/soccer-fields', permanent: true },
    ]
  },
}

export default nextConfig