import React from "react";
import { useRouter } from "next/router";
import { Button } from "@material-tailwind/react";
import { useFormik } from "formik";

const loan = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      loan_amount: ""
    },

    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values });
    }
  });

  return (
    <div className="flex items-center justify-center">
      <main className="h-screen flex items-center justify-center w-1/2">
        <div className="flex flex-1 flex-col justify-center m-40 px-6 py-12 lg:px-8 bg-white border border-gray-400 rounded-md shadow-lg">
          <div id="loan-amount" className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Enter Loan Amount
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form
              onSubmit={formik.handleSubmit}
              className=" space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <p className="mb-2 font-medium">
                  You are eligible for GHC 5,000
                </p>
                <div id="loan-amount" class="relative">
                  <input
                    type="number"
                    name="loan_amount"
                    maxLength="5"
                    autoComplete="number"
                    id="floating_merchant_number"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={formik.values.loan_amount}
                    onChange={formik.handleChange}
                    required
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Enter Amount (GHS)
                  </label>
                </div>
              </div>

              <div id="sign_in">
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Submit{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default loan;
