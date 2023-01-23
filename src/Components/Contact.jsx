import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 pt-10 hidden  lg:block xl:block 2xl:block">
        <div className="flex justify-center font-semibold text-4xl text-[#575757] font-mundail-regular">
          Contact Us
        </div>
        <div className="flex justify-center text-base pt-2 text-[#1FC1D0] font-normal font-mundail-demibold">
          Get in touch with us by email
        </div>
      </div>

      <div className="grid grid-cols-1 pt-10  lg:hidden xl:hidden 2xl:hidden">
        <div className="pl-2 flex justify-start md:text-4xl md:justify-center font-semibold text-4xl text-[#575757] font-mundail-regular">
          Contact Us
        </div>
        <div className="pl-2 flex justify-start md:text-2xl md:justify-center text-base pt-2 text-[#1FC1D0] font-normal font-mundail-demibold">
          Get in touch with us by email
        </div>
      </div>

      <div className="grid grid-cols-1 md:text-center md:block pt-5 lg:hidden xl:hidden 2xl:hidden">
        <div className="pl-2 flex justify-start md:text-3xl md:block font-semibold text-xl text-[#575757] font-mundail-regular">
          Useful Links
        </div>
        <div className="pl-2 flex justify-start md:text-lg md:block text-xs pt-2 underline gap-2  font-normal font-mundail-demibold">
          <div>Visit our clinics</div>
          <div>Book an appointment</div>
          <div> Read our reviews</div>
        </div>
      </div>

      <div className="grid grid-cols-1 pt-5 md:pt-1 md:flex md:justify-center  lg:hidden xl:hidden 2xl:hidden">
        <div className="pl-2 py-5">
          <div className=" pt-3">
            <label
              htmlFor="name"
              className="block text-base font-medium text-[#07074D]"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg border md:w-100 w-80 border-[#e0e0e0] bg-[#f0f0f0] py-2  text-base font-medium text-[#6B7280] outline-none "
            />
          </div>

          <div className="pt-3">
            <label
              htmlFor="enquire"
              className=" block text-base font-medium text-[#07074D]"
            >
              I&apos;m enquiring about
            </label>

            <select
              id="enquire"
              className="lg:w-48 rounded-lg border border-[#e0e0e0] bg-[#f0f0f0] w-80 py-3 text-base font-medium text-[#6B7280] outline-none "
            >
              <option selected>Service Feedback</option>
            </select>
          </div>

          <div className="pt-3">
            <label
              htmlFor="email"
              className=" block text-base font-medium text-[#07074D]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className=" rounded-lg border border-[#e0e0e0] bg-[#f0f0f0] w-80 py-2  text-base font-medium text-[#6B7280] outline-none "
            />
          </div>

          <div className="pt-3">
            <label
              htmlFor="telephone"
              className=" block text-base font-medium text-[#07074D]"
            >
              Telephone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="telephone"
              className="lg:w-100 rounded-lg border border-[#e0e0e0] bg-[#f0f0f0] w-80 py-2  text-base font-medium text-[#6B7280] outline-none "
            />
          </div>

          <div className="pt-3">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Comments <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              className="lg:w-100 resize-none block rounded-md border border-[#e0e0e0] bg-[#f0f0f0] w-80 py-2 text-base font-medium text-[#6B7280] outline-none "
            ></textarea>
          </div>
          <div className="flex justify-center pt-8">
            <button className="hover:shadow-form py-2 px-16 rounded-md bg-[#575757] w-50 lg:px-24 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mx-40 w-100 hidden  lg:flex 2xl:flex  xl:flex flex-1 flex-wrap items-start justify-end  py-10">
        <div className="flex-auto w-5 xl:ml-40 pt-5">
          <h1 className="mb-2 font-semibold text-2xl text-[#575757] font-mundail-demibold">
            Useful Links
          </h1>
          <ul className="pt-5 text-xl text-[#575757] font-normal underline font-mundail-regular">
            <li className="mb-2">Visit our clinics</li>
            <li className="mb-2">Book an appointment</li>
            <li className="mb-2">Read our reviews</li>
            <li className="mb-2">Jobs</li>
          </ul>
        </div>
        <div
          className="flex-auto  w-80 justify-start pr-20 xl:mr-40 "
          style={{ borderLeft: "2px solid #87e5ec" }}
        >
          <div className="grid pl-20 xl:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
            {" "}
            <div>
              <div className="col-1">
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-[#07074D]"
                >
                  <span className="font-mundail-regular text-[#575757]">
                    {" "}
                    Full Name
                  </span>{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="lg:w-44 xl:w-36 2xl:w-48 rounded-xl border  border-[#e0e0e0] bg-[#f0f0f0] py-2  text-base font-medium text-[#6B7280] outline-none "
                />
              </div>

              <div className="pt-5 font-mundail-regular">
                <label
                  htmlFor="enquire"
                  className=" block text-base font-medium  text-[#575757]"
                >
                  I&apos;m enquiring about
                </label>

                <select
                  id="enquire"
                  className="lg:w-44 xl:w-36 2xl:w-48 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] py-2 text-base font-medium text-[#6B7280] outline-none "
                >
                  <option value="Service Feedback">Service Feedback</option>
                </select>
              </div>

              <div className="col-1 pt-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#575757] font-mundail-regular"
                >
                  Comments <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  id="message"
                  className="w-100 resize-none block rounded-md border border-[#e0e0e0] bg-[#f0f0f0] py-3 px-28 text-base font-medium text-[#6B7280] outline-none "
                ></textarea>
              </div>
              <div className="pt-5">
                <button className="hover:shadow-htmlForm py-3 rounded-md bg-[#575757] py-3 px-20 text-base font-semibold text-white outline-none font-mundail-regular">
                  submit
                </button>
              </div>
            </div>
            <div>
              <div className="">
                <label
                  htmlFor="email"
                  className=" block text-base font-medium text-[#07074D]"
                >
                  <span className="font-mundail-regular text-[#575757]">
                    Email Address{" "}
                  </span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] py-2  text-base font-medium text-[#6B7280] outline-none "
                />
              </div>
              <div className="pt-5">
                <label
                  htmlFor="telephone"
                  className=" block text-base font-medium text-[#07074D]"
                >
                  <span className="font-mundail-regular text-[#575757]">
                    Telephone Number
                  </span>{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="telephone"
                  className="w-100 rounded-xl border border-[#e0e0e0] bg-[#f0f0f0] py-2  text-base font-medium text-[#6B7280] outline-none "
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
