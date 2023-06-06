import { useRouter } from "next/router";
import Image from "next/image";
import failedImage from "../public/failedImage.png";
import { Button } from "@material-tailwind/react";

export default function Success() {
  const router = useRouter();

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg lg:w-1/2 md:w-4/5 font-sans text-gray-700 shadow-lg border-gray-100 p-12 justify-center ">
        <div className="flex justify-center " id="Logo">
          <Image
            src={failedImage}
            alt=""
            className="mb-6 h-[150px] w-[150px]"
          />
        </div>
        <h1 className="text-2xl pb-4 font-sans flex justify-center ">
          Your loan request has failed.
        </h1>
        <h2 className="text-xl pb-4 text-gray-500 font-sans flex justify-center">
          Please check the information you provided and try again{" "}
          {router.query.merchant_number}
        </h2>

        <div className="flex justify-center mt-8">
          <Button
            type="submit"
            onClick={() => router.push({ pathname: "../" })}
            className="bg-blue-700 text-sm text-white p-2  rounded-md w-1/2"
          >
            Ok
          </Button>
        </div>
      </div>
    </main>
  );
}
