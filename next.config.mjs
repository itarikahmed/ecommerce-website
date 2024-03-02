/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_URI: "mongodb://localhost:27017/buyitnow",

    CLOUD_NAME: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",

    STRIPE_PUBLIC_KEY: "",
    STRIPE_PRIVATE_KEY: "",

    STRIPE_WEBHOOK_SECRET: "",

    NEXTAUTH_SECRET: "codingwithabbas",
  },
};

export default nextConfig;
