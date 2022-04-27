import { useState } from "react";
import Head from "next/head";

import { BsArrowRightShort } from "react-icons/bs";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [err, setErr] = useState("err");

  const handleSendMail = (e) => {
    e.preventDefault();

    setErr("");

    if (name.length == 0) {
      setErr("You must provide a name!");
      return;
    }
    if (email.length == 0 || !email.includes("@")) {
      setErr("You must provide a valid email!");
      return;
    }
    if (subject.length == 0) {
      setErr("You must provide a subject!");
      return;
    }
    if (message.length == 0) {
      setErr("You must provide a message!");
      return;
    }

    try {
      const mail = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          mail,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (res) => {
            setStatusSuccess(true);
            clearInputs();
          },
          (err) => {
            console.error(err);
          }
        );
    } catch (err) {
      console.error(err);
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const [statusSuccess, setStatusSuccess] = useState(false);

  return (
    <div>
      <Head></Head>
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold pb-6">Contact Me</h1>
        <span>
          Fill out the form below and I&apos;ll try my best to get back to you
          as soon as possible!
        </span>

        <form onSubmit={handleSendMail} className="mt-8 space-y-6">
          <div className="flex items-center gap-x-4">
            <label for="name" className="flex flex-col w-full">
              <span className="text-sm text-zinc-400 font-medium tracking-wide mb-0.5">
                Name
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                type="text"
                id="name"
                className="outline-none bg-zinc-800 focus:ring-2 ring-sky-400 rounded p-2 text-sm"
              />
            </label>

            <label for="name" className="flex flex-col w-full">
              <span className="text-sm text-zinc-400 font-medium tracking-wide mb-0.5">
                Email
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
                id="name"
                className="outline-none bg-zinc-800 focus:ring-2 ring-sky-400 rounded p-2 text-sm"
              />
            </label>
          </div>

          <label for="name" className="flex flex-col">
            <span className="text-sm text-zinc-400 font-medium tracking-wide mb-0.5">
              Subject
            </span>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              type="text"
              id="name"
              className="outline-none bg-zinc-800 focus:ring-2 ring-sky-400 rounded p-2 text-sm"
            />
          </label>

          <label for="name" className="flex flex-col">
            <span className="text-sm text-zinc-400 font-medium tracking-wide mb-0.5">
              Message
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Message"
              id="name"
              rows={5}
              className="outline-none bg-zinc-800 focus:ring-2 ring-sky-400 rounded p-2 text-sm resize-none"
            />
          </label>

          <div className="pt-4">
            <button
              type="submit"
              className="outline-none flex items-center bg-zinc-800 px-6 py-2 rounded-lg group"
            >
              Send Message
              <BsArrowRightShort className="w-5 h-5 group-hover:translate-x-1 transition duration-300 ease-in-out" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
