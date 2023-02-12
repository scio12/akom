// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: z.string().min(5),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesnt include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string() : z.string().url()
  ),
  ACCOUNT_EMAIL: z.string(),
  ACCOUNT_PASSWORD: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
  NEXT_PUBLIC_NAMA_KETUM: z.string(),
  NEXT_PUBLIC_NIS_KETUM: z.string(),

  NEXT_PUBLIC_NAMA_SEKRE: z.string(),
  NEXT_PUBLIC_NIS_SEKRE: z.string(),

  NEXT_PUBLIC_NAMA_WAKASEK: z.string(),
  NEXT_PUBLIC_PRONOUN_WAKASEK: z.string(),
  NEXT_PUBLIC_NIP_WAKASEK: z.string(),

  NEXT_PUBLIC_NAMA_PEMBINA: z.string(),
  NEXT_PUBLIC_NIP_PEMBINA: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
  NEXT_PUBLIC_NAMA_KETUM: process.env.NEXT_PUBLIC_NAMA_KETUM,
  NEXT_PUBLIC_NIS_KETUM: process.env.NEXT_PUBLIC_NIS_KETUM,

  NEXT_PUBLIC_NAMA_SEKRE: process.env.NEXT_PUBLIC_NAMA_SEKRE,
  NEXT_PUBLIC_NIS_SEKRE: process.env.NEXT_PUBLIC_NIS_SEKRE,

  NEXT_PUBLIC_NAMA_WAKASEK: process.env.NEXT_PUBLIC_NAMA_WAKASEK,
  NEXT_PUBLIC_PRONOUN_WAKASEK: process.env.NEXT_PUBLIC_PRONOUN_WAKASEK,
  NEXT_PUBLIC_NIP_WAKASEK: process.env.NEXT_PUBLIC_NIP_WAKASEK,

  NEXT_PUBLIC_NAMA_PEMBINA: process.env.NEXT_PUBLIC_NAMA_PEMBINA,
  NEXT_PUBLIC_NIP_PEMBINA: process.env.NEXT_PUBLIC_NIP_PEMBINA,
};
