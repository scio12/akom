import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Bidang email harus di isi!" })
    .email({ message: "Bidang email harus berupa email yang valid!" }),
  password: z
    .string()
    .min(1, { message: "Kata sandi harus di isi!" })
    .min(6, { message: "Kata sandi memiliki panjang setidaknya 6 karakter!" }),
});

export type FormValues = z.infer<typeof schema>;
