import Head from "next/head";
import instaLogo from "../public/compLogo.png";
import Image from "next/image";
import { useFormik, Field } from "formik";
import * as Yup from "yup";
import Dropzone from "react-dropzone";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      agent_accountname: "",
      agent_email: "",
      comp_name: "",
      business_address: "",
      agent_momonumber: "",
      business_nature: "",
      business_reg_number: "",
      primary_contact_name: "",
      primary_contact_number: "",
      primary_contact_email: "",
      secondary_contact_name: "",
      secondary_contact_number: "",
      secondary_contact_email: "",
      image_upload: [],
      next_of_kin_name: "",
      next_of_kin_email: "",
      next_of_kin_mobile: "",
      tin_number: "",
      gra_number: "",
      terms: ""
    },

    validationSchema: Yup.object({
      full_name: Yup.string()
        .max(20, "Name must at least 20 characters or less")
        .required("Name is required"),

      agent_accountname: Yup.string()
        .max(20, "Account name must at least 20 characters or less")
        .required("Account name is required"),

      agent_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      comp_name: Yup.string()
        .max(30, "Company name must at least 30 characters or less")
        .required("Company name is required"),

      business_address: Yup.string()
        .max(20, "Name must at least 20 characters or less")
        .required("Business address is required"),

      agent_momonumber: Yup.string()
        .max(10, "Number must be 10 characters")
        .required("Phone number is required"),

      business_nature: Yup.string()
        .max(20, "Business nature must be 20 characters or less")
        .required("Business nature is required"),

      business_reg_number: Yup.string()
        .max(20, " Enter correct registration number")
        .required("Registration is required"),

      primary_contact_name: Yup.string()
        .max(30, "Name must at least 30 characters or less")
        .required("Name is required"),

      primary_contact_number: Yup.string()
        .max(10, "Number must be 10 characters")
        .required("Phone number is required"),

      primary_contact_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      secondary_contact_name: Yup.string()
        .max(30, "Name must at least 30 characters or less")
        .required("Name is required"),

      secondary_contact_number: Yup.string()
        .max(10, "Number must be 10 characters")
        .required("Phone number is required"),

      secondary_contact_email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      next_of_kin_name: Yup.string()
        .max(20, "Name must at least 20 characters or less")
        .required("Name is required"),

      next_of_kin_mobile: Yup.string()
        .max(10, "Number must be 10 characters")
        .required("Phone number is required"),

      tin_number: Yup.string()
        .max(11, "Tin number must be 11 characters")
        .required("Tin number is required"),

      gra_number: Yup.string()
        .max(10, "Number must be at 10 characters")
        .required("GRA number is required"),
      terms: Yup.array().required("Terms of service must be checked")
    }),

    onSubmit: (values) => {
      console.log(values);
    }
  });

  console.log(formik.values);

  return (
    <div>
      <Head>
        <title>Prime Invest | Account Opening Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex items-center justify-center  lg:mt-20 lg:mb-20">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg lg:w-1/2 md:w-4/5 font-sans border border-gray-100 "
        >
          <div className="flex-1 text-gray-700 p-20">
            <div className="flex justify-center " id="Logo">
              <Image src={instaLogo} alt="" className="h-[80px] w-[300px]" />
            </div>

            <h2 className="text-2xl flex justify-center p-3 font-medium ">
              Account Opening Form
            </h2>
            <p className="text-lg text-gray-500 flex justify-center">
              Fill the form below to open a business account
            </p>
            <div>
              <h2 className="bg-red-700 text-white px-2 mt-8">
                Personal Information
              </h2>
            </div>

            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:items-center md:justify-center ">
              {/*agent details section */}

              <div className="pb-4" id="full Name">
                <label
                  htmlFor=" full_name"
                  className={`block font-opensans pb-2 ${
                    formik.errors.full_name ? "text-red-500" : ""
                  }`}
                >
                  {formik.touched.full_name && formik.errors.full_name
                    ? formik.errors.full_name
                    : "Full Name"}
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="full_name"
                  placeholder="Enter full name "
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Account Name">
                <label
                  htmlFor=" agent_accountname"
                  className="block font-opensans pb-2"
                >
                  Account Name
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="agent_accountname"
                  placeholder="Enter account name "
                  value={formik.values.agent_accountname}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Company Name">
                <label
                  htmlFor="company name"
                  className="block font-opensans pb-2"
                >
                  Company Name
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="comp_name"
                  placeholder="Enter company name "
                  value={formik.values.comp_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Business Address">
                <label
                  htmlFor=" business address"
                  className="block font-opensans pb-2"
                >
                  Business address
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="business_address"
                  placeholder="Enter business address "
                  value={formik.values.business_address}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id=" Agent Email">
                <label htmlFor="email" className="block font-opensans pb-2">
                  Email address
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="email"
                  name="agent_email"
                  placeholder="Enter email address "
                  value={formik.values.agent_email}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Mobile Money Number">
                <label
                  htmlFor=" momo number"
                  className="block font-opensans pb-2"
                >
                  Mobile Number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="number"
                  name="agent_momonumber"
                  placeholder="Enter mobile money number "
                  value={formik.values.agent_momonumber}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Nature of Business">
                <label
                  htmlFor=" nature of business"
                  className="block font-opensans pb-2"
                >
                  Nature of business
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="business_nature"
                  placeholder="Enter nature of business "
                  value={formik.values.business_nature}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="GRA Number">
                <label
                  htmlFor=" GRA Number"
                  className="block font-opensans pb-2"
                >
                  GRA Number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="gra_number"
                  placeholder="Enter GRA number "
                  value={formik.values.gra_number}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Tin Number">
                <label
                  htmlFor=" tin number"
                  className="block font-opensans pb-2"
                >
                  Tax Identification Number (TIN)
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="tin_number"
                  placeholder="Enter tin number "
                  value={formik.values.tin_number}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="Registration Number">
                <label
                  htmlFor=" business registration number"
                  className="block font-opensans pb-2"
                >
                  Business registration number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="business_reg_number"
                  placeholder="Enter business reg. number "
                  value={formik.values.business_reg_number}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/*Contact section */}
            <div>
              <h2 className="bg-red-700 text-white px-2 mt-8"> Contacts</h2>
            </div>
            <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">
              <div className="pb-4" id="primary contact name">
                <label
                  htmlFor=" primary contact name"
                  className="block font-opensans pb-2"
                >
                  Primary Contact Name
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="primary_contact_name"
                  placeholder="Enter contact name "
                  value={formik.values.primay_contact_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="primary contact phone">
                <label
                  htmlFor=" Designation mobile number"
                  className="block font-opensans pb-2"
                >
                  Designation mobile number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="number"
                  name="primary_contact_number"
                  placeholder="Enter mobile number "
                  value={formik.values.primary_contact_number}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="primary contact email">
                <label htmlFor=" email" className="block font-opensans pb-2">
                  Email Address
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="email"
                  name="primary_contact_email"
                  placeholder="Enter email address "
                  value={formik.values.primary_contact_email}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="secondary contact name">
                <label
                  htmlFor=" agent name"
                  className="block font-opensans pb-2"
                >
                  Secondary Contact Name
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="secondary_contact_name"
                  placeholder="Enter contact name "
                  value={formik.values.secondary_contact_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="secondary contact phone">
                <label
                  htmlFor=" Designation mobile number"
                  className="block font-opensans pb-2"
                >
                  Designation mobile number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="number"
                  name="secondary_contact_number"
                  placeholder="Enter mobile number "
                  value={formik.values.secondary_contact_number}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="secondary contact email">
                <label htmlFor=" email" className="block font-opensans pb-2">
                  Email Address
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="email"
                  name="secondary_contact_email"
                  placeholder="Enter email address "
                  value={formik.values.secondary_contact_email}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="next_of_kin_name">
                <label htmlFor=" email" className="block font-opensans pb-2">
                  Next Of Kin
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="text"
                  name="next_of_kin_name"
                  placeholder="Enter name "
                  value={formik.values.next_of_kin_name}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="next_of_kin_mobile">
                <label htmlFor=" email" className="block font-opensans pb-2">
                  Next Of Kin Mobile Number
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="number"
                  name="next_of_kin_mobile"
                  placeholder="Enter mobile number"
                  value={formik.values.next_of_kin_mobile}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="pb-4" id="next_of_kin_email">
                <label htmlFor=" email" className="block font-opensans pb-2">
                  Next Of Kin Email
                </label>
                <input
                  className="border-2 border-gray-500 rounded-md p-2 w-[250px] h-[40px] focus:border-blue-500 focus:ring-blue-500"
                  type="email"
                  name="next_of_kin_email"
                  placeholder="Enter email address "
                  value={formik.values.next_of_kin_email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            {/*Declaration section */}
            <div>
              <h2 className="bg-red-700 text-white px-2 mt-8 mb-4">
                Declaration (Terms of Service)
              </h2>
            </div>
            <div>
              <div className="pb-4 " id="terms">
                <div className="flex items-start gap-2">
                  <input
                    className="border-2 border-gray-500 rounded-md h-6 w-6 focus:border-red-500 focus:ring-red-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                  />
                  <p>
                    I hereby agree to the terms and conditions herein stated and
                    do hereby certify that the information provided in this form
                    is true and accurate. I agree that InstaBusiness reserves
                    the right to take appropriate measures including legal
                    action if the information provided here is discovered to be
                    false. By signing this form I confirm that I have read,
                    received and agree to be bound by the Agent Service.”
                  </p>
                </div>
              </div>
            </div>

            {/*Buttons section */}
            <div>
              <input
                type="file"
                name="image_upload"
                multiple
                onChange={formik.handleChange}
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
               file:bg-blue-50 file:text-red-700
               hover:file:bg-blue-100 pb-6"
              />

              <button
                type="submit"
                className="bg-red-700 text-sm text-white p-2  rounded-md w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
