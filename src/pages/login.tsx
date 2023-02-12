import Head from "next/head";
import { useEffect, useState } from "react";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "picnic/picnic.min.css";

import styles from "@/styles/Home.module.css";

import { schema, type FormValues } from "@/schemas/login.schema";

export default function Login() {
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

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
      <Head>
        <title>Login</title>
        <meta name="description" content="Laman login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div>
          <h1 className={styles.heading}>Login</h1>
          <form onSubmit={handleSubmit((d) => console.log(d))}>
            <fieldset className={styles.group}>
              <label>Email</label>
              <input
                className={styles.input}
                placeholder="Masukan Email"
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
                {...register("password")}
              />
              {(formState.errors?.password as unknown as boolean) && (
                <small style={{ color: "red" }}>
                  {formState.errors?.password?.message}
                </small>
              )}
            </fieldset>

            <button className={styles.button} type="submit">
              Cetak
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
