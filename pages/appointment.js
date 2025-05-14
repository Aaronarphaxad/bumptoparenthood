import React from "react";
import { InlineWidget } from "react-calendly";
import { Mail, Phone } from "lucide-react";

const Appointment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose how you'd like to reach out - I'm here to help
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+17788585741"
              className="group flex items-center justify-center gap-3 p-6 bg-rose-50 rounded-xl hover:bg-rose-100 transition-all duration-300"
            >
              <Phone className="w-6 h-6 text-rose-600" />
              <span className="text-lg font-medium text-gray-800">
                Call Me
              </span>
            </a>

            <a
              href="mailto:raven@bumptoparenthood.com"
              className="group flex items-center justify-center gap-3 p-6 bg-rose-50 rounded-xl hover:bg-rose-100 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-rose-600" />
              <span className="text-lg font-medium text-gray-800">
                Email Me
              </span>
            </a>
          </div>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-rose-100 rounded-full text-rose-600 font-medium">
            OR
          </span>
        </div>

        {/* Calendly Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-gray-600 mb-8">
            Schedule a time that works best for you
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-4 md:p-6">
          <InlineWidget url="https://calendly.com/raven-ojw" />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
