
/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    // Add the rule for handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,       // Target .svg files
      use: ['@svgr/webpack'], // Use @svgr/webpack to handle SVGs as React components
    });

    return config; // Return the updated config
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:3001/api/:path*"
  //     }
  //   ]
  // },

  images: {
    domains: ['res.cloudinary.com'], // Add your Cloudinary domain

  },


};

export default nextConfig;
