const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center pb-8 md:pb-6 text-zinc-400 text-xs md:text-sm text-center px-4 md:px-6">
      <span>
        Designed and Developed by&nbsp;
        <span className="text-sky-400">David Nguyen</span>.
      </span>
      <span>
        Built with <span className="text-sky-400">Next.js</span>&nbsp;&&nbsp;
        <span className="text-sky-400">TailwindCSS</span>. Check out the
        code&nbsp;
        <a
          href="https://github.com/daxidngyn/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 cursor-pointer"
        >
          here
        </a>
        !
      </span>
    </footer>
  );
};

export default Footer;
