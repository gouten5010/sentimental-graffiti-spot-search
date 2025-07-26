/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
        unoptimized: true, // 画像最適化を無効化（Vercel専用機能のため）
    },
};
export default nextConfig;
