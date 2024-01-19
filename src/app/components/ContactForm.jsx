import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjvevpw");

  if (state.succeeded) {
    return <p className="text-green-500 text-center">Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-3">
        <label htmlFor="fullName" className="block text-lg mb-2 text-white">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          className="w-full bg-gray-200 px-3 py-2 rounded-full text-black focus:outline-none"
        />
        <ValidationError
          prefix="Full Name"
          field="fullName"
          errors={state.errors}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block text-lg mb-2 text-white">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full bg-gray-200 px-3 py-2 rounded-full text-black focus:outline-none"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="block text-lg mb-2 text-white">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Your Subject"
          className="w-full bg-gray-200 px-3 py-2 rounded-full text-black focus:outline-none"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="block text-lg mb-2 text-white">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          className="w-full bg-gray-200 px-3 py-2 h-32 rounded-lg text-black focus:outline-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;


