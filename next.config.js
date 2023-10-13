/** @type {import('next').NextConfig} */

const nextConfig = {
  generateBuildId: async() => 'constant-build-id',
  reactStrictMode: true,
	images: {
		unoptimized: true
	},
}

module.exports = nextConfig
