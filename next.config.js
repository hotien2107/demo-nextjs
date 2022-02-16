/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["st.depositphotos.com"],
    loader: "imgix",
    path: "https://example.com/myaccount/",
  },
};

module.exports = nextConfig;
