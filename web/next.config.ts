import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Preferisci bundle moderni (meno legacy JS in Lighthouse)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  experimental: {
    optimizePackageImports: ['leaflet', 'react-leaflet'],
  },
}

export default nextConfig
