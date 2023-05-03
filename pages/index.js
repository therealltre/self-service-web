import Head from "next/head";
import instaLogo from "../public/compLogo.png";
import Image from "next/image";
import { useFormik, Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";
import axios from "axios";

export default function Home() {
  const router = useRouter();

  {
    /*} const formik = useFormik({
    initialValues: {
      merchant_number: "",
      password: ""
    },

    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/loan", query: values });
    }
  }); */
  }

  return (
    <div className="flex ml-5 md:mr-5 items-center justify-center">
      <Head>
        <title>InstaBusiness | Loan Request</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-center min-w-max lg:w-[800px]">
        <div className="flex min-h-full flex-1 flex-col justify-center m-40 px-6 py-12 lg:px-8 bg-white border border-gray-400 rounded-md shadow-lg">
          <div id="signin" className="">
            <div className="flex justify-center " id="Logo">
              <Image src={instaLogo} alt="" className="h-[50px] w-[150px]" />
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                axios.post("/api/axiosInstance", values).then((response) => {
                  console.log(response.data);
                  console.log(values);
                  router.push({ pathname: "/loan", query: values });
                });
              }}
            >
              {({ values, handleChange }) => (
                <Form className=" space-y-6" action="#" method="POST">
                  <div id="merchant-number" class="relative">
                    <Field
                      type="number"
                      name="merchant_number"
                      autoComplete="number"
                      id="floating_merchant_number"
                      value={values.merchant_number}
                      onChange={handleChange}
                      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-900 dark:text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Merchant Number
                    </label>
                  </div>

                  <div id="password">
                    <div id="password_" class="relative mb-2">
                      <Field
                        type="password"
                        name="password"
                        autoComplete="password"
                        id="floating_password"
                        value={values.password}
                        onChange={handleChange}
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                      >
                        Insta Pin
                      </label>
                    </div>
                    <div
                      id="forgot_pass"
                      className="flex items-end justify-end"
                    >
                      <div className="text-sm " id="forgot_pass">
                        <a
                          href="#"
                          className="font-semibold text-blue-600 hover:text-blue-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="sign_in">
                    <Button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
}
