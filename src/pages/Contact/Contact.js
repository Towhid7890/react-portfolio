import React, { useRef } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ayfgok",
        "template_c1qw5hr",
        form.current,
        "SycrR_zkRHfw4upto"
      )
      .then(
        (result) => {
          toast.success("Email send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold">Contact</h2>
      <hr className="w-28 mt-4" />
      <div className=" mt-8">
        <div className=" border rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="card  w-full shadow-2xl">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="input bg-white text-black input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="input bg-white text-black input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    type="text"
                    required
                    placeholder="Write Your Message"
                    className="textarea bg-white text-black input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
