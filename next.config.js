/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "http://cansoftweb.github.io/klf";

const nextConfig = {
  reactStrictMode: true,
  // assetPrefix: '.',
  images: {
		unoptimized: true
	},
  // basePath: "/klf.pages.dev",
}

module.exports = nextConfig
