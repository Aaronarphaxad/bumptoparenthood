import React from "react";
import {  InlineWidget } from "react-calendly";

const Appointment = () => {
  return (
    <div className="p-5 pt-40">
     
      <div className="bg-rose-100 py-8 rounded w-50">
        <div className="max-w-xl mx-auto text-center dark:text-gray-700">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-4">You can reach me by phone or email:</p>
          <ul className="list-none">
            <li className="mb-4">
              <a
                href="tel:+17788585741"
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-rose-300 transition-colors duration-300"
              >
                Call Me
              </a>
            </li>
            <li className="mb-4">
              <a
                href="mailto:raven@bumptoparenthood.com"
                className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-rose-300 transition-colors duration-300"
              >
                Email Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-2xl font-bold py-5">Or</p>
      <h2 className="text-3xl font-bold text-center my-5">Book an appointment</h2>
      <InlineWidget url="https://calendly.com/raven-ojw" />
    </div>
  );
};

export default Appointment;
