/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@repo/db"],
    // Prisma + pg should stay server-side; bundling them with Turbopack often crashes dev.
    serverExternalPackages: ["@prisma/client", "prisma", "pg", "@prisma/adapter-pg"],
};

export default nextConfig;
