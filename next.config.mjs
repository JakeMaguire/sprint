import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["theordinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theordinary.com",
        port: "",
        search: "",
        pathname: "",
      },
    ],
  },
};

export default withPayload(nextConfig);
