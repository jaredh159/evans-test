/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async function () {
    return {
      // we can programatically generate this array
      beforeFiles: [
        {
          source: `/about`,
          destination: `/static/about`,
        },
        {
          source: `/lol`,
          destination: `/static/lol`,
        },
        {
          source: `/amigo/:path*`,
          destination: `/friend/:path*`,
        },
        {
          source: `/amiga/:path*`,
          destination: `/friend/:path*`,
        },
        {
          source: `/compilaciones`,
          destination: `/friend/compilaciones`,
        },
        {
          source: `/compilations`,
          destination: `/friend/compilations`,
        },
      ],
    };
  },
  redirects: async function () {
    return [
      {
        source: `/static/:path*`,
        destination: `/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
