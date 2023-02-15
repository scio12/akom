import Head from "next/head";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { getSession, signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "picnic/picnic.min.css";

import styles from "@/styles/Home.module.css";

import { schema, type FormValues } from "@/schemas/login.schema";

export default function Login() {
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await toast.promise(
      signIn("credentials", {
        redirect: false,
        ...data,
      }).then((result) => {
        if (result?.ok) return Promise.resolve(result);

        return Promise.reject(result);
      }),
      {
        pending: "Mencoba login...",

        success: {
          render() {
            return "Berhasil login 👌";
          },
        },

        error: {
          render({ data }) {
            reset(
              {},
              {
                keepValues: true,
                keepIsSubmitted: false,
              }
            );

            return (data as unknown as { error: string }).error !==
              "CredentialsSignin"
              ? (data as unknown as { error: string }).error
              : "Gagal login karena alasan yang tidak diketahui!";
          },
        },
      }
    );

    if (!router.query?.callbackUrl) return router.replace("/");

    const url = new URL(router.query?.callbackUrl as string);
    router.replace(url.pathname as string);
  };

  useEffect(() => {
    router.prefetch("/");

    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Laman login" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.container}>
          <div>
            <h1>Loading...</h1>
          </div>
        </main>
      </>
    );

  return (
    <>
      <ToastContainer />
      <Head>
        <title>Login</title>
        <meta name="description" content="Laman login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div>
          <h1 className={styles.heading}>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className={styles.group}>
              <label>Email</label>
              <input
                className={styles.input}
                placeholder="Masukan Email"
                disabled={formState.isSubmitting}
                {...register("email")}
              />
              {(formState.errors?.email as unknown as boolean) && (
                <small style={{ color: "red" }}>
                  {formState.errors?.email?.message}
                </small>
              )}
            </fieldset>

            <fieldset className={styles.group}>
              <label>Password</label>
              <input
                className={styles.input}
                placeholder="Masukan Password"
                type="password"
                disabled={formState.isSubmitting}
                {...register("password")}
              />
              {(formState.errors?.password as unknown as boolean) && (
                <small style={{ color: "red" }}>
                  {formState.errors?.password?.message}
                </small>
              )}
            </fieldset>

            <button
              disabled={formState.isSubmitting}
              className={styles.button}
              type="submit"
            >
              Cetak
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
