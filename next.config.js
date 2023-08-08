/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async function () {
    return {
      // i think we can programatically generate this array
      afterFiles: [
        {
          source: `/about`,
          destination: `/static/about`,
        },
        {
          source: `/lol`,
          destination: `/static/lol`,
        },
      ],
    };
  },
};

module.exports = nextConfig;
