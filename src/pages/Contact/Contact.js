import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import logo from "../../assets/pic4.jpg";

const Contact = () => {
  const [product, setProduct] = useState({
    name: "Product X",
    price: "$10.00",
  });

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // Define the email parameters

  //   emailjs
  //     .sendForm("service_1ayfgok", "template_c1qw5hr", "SycrR_zkRHfw4upto")
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         toast.success("Email send successfully");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const handleOrder = () => {
    // Define the email parameters
    const templateParams = {
      to_email: "thohidulislam800@gmail.com",
      image_url: "https://example.com/image.png",
      from_name: "Your Company",
      message: `Dear Customer,\n\nThank you for your order of ${product.name} for ${product.price}. Your order has been received and is currently being processed. \n\nBest regards,\nYour Company

      `,
    };

    // Send the email
    emailjs
      .send(
        "service_bcyx95k",
        "template_9dmhaap",
        templateParams,
        "2NJrzAXNIW6J71M1W"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-bold">Contact</h2>
      <hr className="w-28 mt-4" />
      <div className=" mt-8">
        <div className=" border rounded-lg">
          <form>
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
