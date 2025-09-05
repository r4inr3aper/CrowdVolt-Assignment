const Build = () => {
  return (
    <div className="text-white flex flex-col">
      {/* Desktop Layout */}
      <div className="flex flex-col justify-center items-start sm:px-16 px-12 py-24 max-w-6xl">
        {/* Heading */}
        <div className="mb-10 w-full">
          <h1 className="sm:text-[3rem] text-[2rem] items-center tracking-[-0.125rem] sm:leading-[3.44rem] flex-col sm:flex-row flex">
            <span className="font-grotesk">Built on What&nbsp;</span>
            <span className="font-instrument italic">We Believe</span>
          </h1>
        </div>

        {/* Main Description */}
        <p
          className="font-grotesk font-medium text-[1rem] sm:text-[1.25rem] leading-[1.6875rem] tracking-[-0.0225rem] 
    text-[#B3B3B3] mb-10 max-w-4xl text-center sm:text-left"
        >
          At CrowdVolt, integrity is at the heart of what we do. By connecting
          real people on both sides of every exchange, we keep the process
          transparent, simple, and built for the community we love. We put trust
          and ease first, making sure every transaction feels safe, fair, and
          seamless.
        </p>

        {/* Contact Text */}
        <p
          className="font-grotesk font-medium text-[1rem] sm:text-[1.25rem] leading-[1.6875rem] 
    tracking-[-0.0225rem] text-gray-300 mb-10 max-w-4xl text-center sm:text-left">
          {" "}
          Contact us literally any time, we love our users. Seriously - even
          just to say hi.
        </p>

        {/* Social Icons */}
        <div id="contact" className="flex space-x-6 sm:justify-start justify-center w-full">
          <a
            href="#"
            className="text-purple-400 hover:scale-110 transition-colors"
          >
            <img src="/src/assets/instagram.svg" />
          </a>
          <a
            href="#"
            className="text-purple-400 hover:scale-110 transition-colors"
          >
            <img src="/src/assets/linkedin.svg" />
          </a>
          <a
            href="#"
            className="text-purple-400 hover:scale-110 transition-colors"
          >
            <img src="/src/assets/tiktok.svg" />
          </a>
          <a
            href="#"
            className="text-purple-400 hover:scale-110 transition-colors"
          >
            <img src="/src/assets/soundcloud.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Build;
