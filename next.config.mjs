/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/yayu",
        destination: "/blog/yayu_redirects",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/blog/yayu",
          destination: "/blog/yayu_beforeFiles",
        },
      ],
      afterFiles: [
        {
          source: "/blog/yayu",
          destination: "/blog/yayu_afterFiles",
        },
      ],
      fallback: [
        {
          source: "/blog/yayu",
          destination: "/blog/yayu_fallback",
        },
      ],
    };
  },
};

export default nextConfig;
