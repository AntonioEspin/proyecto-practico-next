/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirect() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: '/adios',
  //       permanent: true
  //     }
  //   ]
  // }
};

module.exports = nextConfig;
