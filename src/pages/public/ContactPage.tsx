// function ContactPage() {
//   return (
//     <div className="max-w-3xl mx-auto mt-10 px-4">
//       <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

//       <p className="mb-6">We would love to hear from you! Send us a message below.</p>

//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full p-3 border rounded"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="w-full p-3 border rounded"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="w-full p-3 border rounded h-32"
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-blue-700 text-white px-6 py-3 rounded"
          
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactPage;

import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://your-backend-url.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6">We would love to hear from you! Send us a message below.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded h-32"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-lg">{status}</p>}
    </div>
  );
}

export default ContactPage;
