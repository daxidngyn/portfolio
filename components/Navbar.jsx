import { useState, Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Dialog, Transition } from "@headlessui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const { asPath } = useRouter();

  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpened((status) => setMobileMenuOpened(!status));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-zinc-900 shadow-md border-b border-zinc-800 z-10 px-4 md:px-6">
      <nav className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-medium">David Nguyen</a>
        </Link>
        <div className="space-x-8 md:flex hidden">
          <Link href="/">
            <a className={`${asPath === "/" && "text-sky-400"}`}>Home</a>
          </Link>
          <Link href="/projects">
            <a className={`${asPath === "/projects" && "text-sky-400"}`}>
              Projects
            </a>
          </Link>
          <a
            href="https://docs.google.com/document/d/1khZ1gB62KeG_ORlxInwUiHKowzUywXMD4m6mEjHYtMo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="flex items-center gap-x-0.5 outline-none md:hidden"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu />
          <span className="uppercase text-sm text-zinc-400 font-semibold tracking-wide">
            Menu
          </span>
        </button>
      </nav>

      <Transition appear show={mobileMenuOpened} as={Fragment}>
        <Dialog
          static
          as="div"
          className="fixed inset-0 z-40 overflow-hidden"
          onClose={() => null}
        >
          <div className="min-h-screen px-4 md:px-6 xl:px-10 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-zinc-800">
                <div className="flex justify-end items-center h-16 px-4 md:px-6">
                  <button
                    type="button"
                    className="flex items-center gap-x-0.5 outline-none md:hidden"
                    onClick={toggleMobileMenu}
                  >
                    <AiOutlineClose className="text-zinc-400" />
                    <span className="uppercase text-sm text-zinc-400 font-semibold tracking-wide">
                      Close
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-center space-x-8 md:space-x-12 lg:space-x-16 absolute bottom-0 text-white w-full pb-8 md:pb-12">
                  <a
                    href="https://linkedin.com/in/davidngyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-none"
                  >
                    <AiFillLinkedin className="text-3xl lg:text-4xl hover:text-sky-400 transition duration-300 ease-in-out" />
                  </a>
                  <a
                    href="https://github.com/daxidngyn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-none"
                  >
                    <AiFillGithub className="text-3xl lg:text-4xl hover:text-sky-400 transition duration-300 ease-in-out" />
                  </a>
                  <a
                    href="mailto:dnguy203@ucsc.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-none"
                  >
                    <AiFillMail className="text-3xl lg:text-4xl hover:text-sky-400 transition duration-300 ease-in-out" />
                  </a>
                </div>
              </Dialog.Overlay>
            </Transition.Child>

            <span
              className="inline-block align-middle h-screen relative"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-xl overflow-hidden text-center align-middle transition-all transform text-gray-200">
                <div className="flex flex-col flex-1">
                  <div className="mb-4 lg:mb-2 tracking-widest font-light">
                    MENU
                  </div>
                  <div className="flex flex-col space-y-2 md:space-y-4">
                    <a
                      href="/"
                      className="outline-none mx-auto text-4xl md:text-6xl lg:text-7xl tracking-wider cursor-pointer font-bold text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out"
                    >
                      Home
                    </a>
                    <a
                      href="/projects"
                      className="outline-none mx-auto text-4xl md:text-6xl lg:text-7xl tracking-wider cursor-pointer font-bold text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out"
                    >
                      Projects
                    </a>
                    <a
                      href="https://docs.google.com/document/d/1khZ1gB62KeG_ORlxInwUiHKowzUywXMD4m6mEjHYtMo/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="outline-none mx-auto text-4xl md:text-6xl lg:text-7xl tracking-wider cursor-pointer font-bold text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Navbar;
