"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 120,
      delay: 100,
      anchorPlacement: "top-bottom",
    });

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to handle auto-hide after 5 seconds
  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;
    
    // Submit form using fetch API
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Optional: Reset form fields
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div>
      <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3da9ec]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* ================= TITLE ================= */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-12 relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              CONTACT US
              <div className="absolute -bottom-2 left-0 w-full flex">
                <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
                <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
              </div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for any queries or information.
            </p>
          </div>

          {/* ================= FORM CARD ================= */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#3da9ec]/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ff6b6b]/5 to-transparent rounded-tr-full"></div>

            <div className="relative z-10">
              {!submitted ? (
                <form
                  className="space-y-6"
                  action="https://formsubmit.co/info@pnygroup.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_next" value={window.location.href} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3da9ec] transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="relative group px-10 py-4 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] text-white font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#3da9ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              ) : (
                /* ================= SUCCESS SCREEN ================= */
                <div className="flex flex-col items-center justify-center text-center py-24 animate-[successPop_0.7s_ease-out_forwards]">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_20px_60px_rgba(16,185,129,0.5)]">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-green-600 mt-8">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-gray-600 mt-3 max-w-md">
                    Thank you for contacting us. Our team will respond to you shortly.
                  </p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;