import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i3.ytimg.com',
                port: '',
                pathname: '**',
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
