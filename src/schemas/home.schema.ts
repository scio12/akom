import { z } from "zod";

export const schema = z.object({
  tanggalPembuatan: z.string().min(1),
  jadwalReguler: z.string().min(1),
  waktuReguler: z.string().min(1),
});

export type FormValues = z.infer<typeof schema>;
