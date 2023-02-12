// eslint-disable-next-line no-unused-vars
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: DefaultSession["user"];
  }
}
