import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env/server.mjs";

const actualHash = decodeURIComponent(env.ACCOUNT_PASSWORD);

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },

  providers: [
    CredentialsProvider({
      name: "Sign in with email",

      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // @ts-ignore
      async authorize(credentials: Record<"email" | "password", string>, req) {
        if (credentials === null) return null;

        if (credentials.email !== env.ACCOUNT_EMAIL)
          throw new Error("Email tidak ditemukan!");

        if (!bcrypt.compareSync(credentials.password, actualHash))
          throw new Error("Password salah!");

        return {
          id: 12,
          email: "admin@admin.com",
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
