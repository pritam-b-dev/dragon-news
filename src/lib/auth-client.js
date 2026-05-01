import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  // এটি লোকালহোস্টে থাকলে localhost এবং ভারসেলে থাকলে অটোমেটিক আপনার ডোমেন ধরে নেবে
  baseURL:
    typeof window !== "undefined"
      ? window.location.origin
      : "http://localhost:3000",
});

// আলাদা করে signIn, signUp বা useSession এক্সপোর্ট করার দরকার নেই।
// আপনি সরাসরি authClient.signIn, authClient.signUp এবং authClient.useSession ব্যবহার করতে পারবেন।
