import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

        // implement login
      },
    }),
  ],
};

export default NextAuth(authOptions);
