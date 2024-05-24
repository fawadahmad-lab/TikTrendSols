import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MailIcon, UserIcon, ChatIcon  } from "@heroicons/react/outline";


export const Contact = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z50nl6e", "template_5p92cno", form.current, {
        publicKey: "yIFsypJHaUhYhjZqa",
      })
      .then(
        () => {
          setShowConfirmation(true);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="relative">
      <img
        src="contact.jpg"
        alt="imagebgcontact"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex items-top justify-center min-h-[700px] bg-transparent sm:items-center sm:pt-0 relative z-10">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 bg-transparent sm:rounded-lg md:col-span-1">
                <h1 className="text-4xl text-blue-600  tracking-tight">
                  Get in Touch:
                </h1>
                <p className="text-1xl text-black">
                Drop us a line or give us a ring. We love to hear from you and are happy to answer any questions
                </p>
               
                

              </div>

              <div className="p-6 mr-2 bg-transparent sm:rounded-lg md:col-span-1">
                <form
                  className="p-6 flex flex-col justify-center"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col">
                    <label htmlFor="name" className="hidden">
                      Full Name
                    </label>
                    <div className="flex items-center border-b-2 border-black">
                      <UserIcon className="h-6 w-6 mr-2 text-black" />
                      <input
                        type="text"
                        name="from_name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full py-3 px-3 border-none bg-transparent text-black font-semibold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="email" className="hidden">
                      Email
                    </label>
                    <div className="flex items-center border-b-2 border-black">
                      <MailIcon className="h-6 w-6 mr-2 text-black" />
                      <input
                        type="email"
                        name="to_name"
                        id="email"
                        placeholder="Email"
                        className="w-full py-3 px-3 border-none bg-transparent text-black font-semibold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mt-2">
                    <label htmlFor="msg" className="hidden">
                      Message
                    </label>
                    <div className="flex items-center border-b-2 border-black">
                      <ChatIcon className="h-6 w-6 mr-2 text-black" />
                      <textarea
                        name="message"
                        id="msg"
                        placeholder="Message"
                        className="w-full py-3 px-3 border-none bg-transparent text-black font-semibold focus:outline-none"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Send"
                    className="w-32 bg-blue-700 hover:bg-blue-dark text-white font-bold py-3 px-6 h-30 rounded-3xl  mt-3 hover:bg-blue-600 transition ease-in-out duration-300"
                  >
                    Send
                  </button>
                </form>
                {showConfirmation && (
                  <div
                    className="mt-4 bg-white-100 border border-black-400 text-black-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">
                      Thanks for messaging us!
                    </strong>
                    <span className="block sm:inline">
                      {" "}
                      We will get back to you soon.
                    </span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      <svg
                        className="fill-current h-6 w-6 text-black-500"
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={() => setShowConfirmation(false)}
                      >
                        <title>Close</title>
                        <path
                          fillRule="evenodd"
                          d="M14.293 5.293a1 1 0 0 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 1 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 1.414-1.414L10 8.586l4.293-4.293z"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
