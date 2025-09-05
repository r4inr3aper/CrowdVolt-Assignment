import Button from "./ui/Button";
import Navbar from "./Navbar";
import Build from "./Build";

const Home = () => {
  return (
    <div className="relative bg-black">
      {/* Background Gradient SVG - Responsive */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Ultra-Wide Desktop SVG (≥2xl) */}
        <div
          className="hidden 2xl:block absolute"
          style={{ top: "-40rem", right: "-10rem" }}
        >
          <svg
            width="1600"
            height="2000"
            viewBox="0 0 1600 2000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            <g filter="url(#filter0_f_ultra)">
              <path
                d="M2400 900C2100 1050 700 1600 600 1450C650 1250 850 1350 1350 900C1600 650 1300 850 1400 -100C1470 100 2700 750 2400 900Z"
                fill="#8A1DFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_ultra"
                x="-1000"
                y="-1000"
                width="5000"
                height="5000"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="280" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Desktop SVG (lg to xl only) */}
        <div
          className="hidden lg:block 2xl:hidden absolute"
          style={{ top: "-40rem", left: "20rem" }}
        >
          <svg
            width="1345"
            height="1877"
            viewBox="0 0 1345 1877"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
          >
            <g filter="url(#filter0_f_1_594)">
              <path
                d="M2263.53 812.631C2033.23 919.872 557.938 1485.61 499.507 1360.13C533.874 1176.06 719.35 1266.89 1204.36 862.631C1425.04 652.894 1186.36 829.631 1265.51 -48.3691C1323.94 77.1103 2493.83 705.389 2263.53 812.631Z"
                fill="#8A1DFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1_594"
                x="-800"
                y="-800"
                width="4000"
                height="4000"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="249.401" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Tablet SVG */}
        <div
          className="hidden sm:block lg:hidden absolute"
          style={{ top: "-28rem", left: "4rem" }}
        >
          <svg
            width="1100"
            height="1400"
            viewBox="0 0 1100 1400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
          >
            <g filter="url(#filter0_f_tab)">
              <path
                d="M1400 600C1250 700 400 1100 350 1000C375 850 500 900 800 600C950 450 800 600 850 -20C890 80 1550 500 1400 600Z"
                fill="#8A1DFF"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_tab"
                x="-600"
                y="-600"
                width="3000"
                height="2500"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="260" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Mobile SVG */}
        <div
          className="sm:hidden absolute w-full flex justify-center"
          style={{ top: "-20rem" }}
        >
          <svg
            width="1400"
            height="1400"
            viewBox="0 0 1400 1400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <g filter="url(#filter0_f_mob)">
              <circle cx="700" cy="700" r="400" fill="#8A1DFF" />
            </g>
            <defs>
              <filter
                id="filter0_f_mob"
                x="-1200"
                y="-1200"
                width="4000"
                height="4000"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feGaussianBlur stdDeviation="360" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse lg:flex-row items-center overflow-hidden relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 px-6 sm:px-10 lg:px-16 py-12 lg:py-20 text-center lg:text-left">
          <h1
            className="font-grotesk font-bold text-3xl sm:text-5xl md:text-6xl
                        lg:text-[5rem]
                        leading-tight lg:leading-[5.25rem] xl:leading-[5.625rem]
                        text-white tracking-tight"
          >
            No more excuses <br />
            you're coming <br />
            out tonight
          </h1>

          <p
            className="mt-6 lg:mt-8 text-[#B3B3B3] font-grotesk
                        text-base sm:text-lg md:text-lg
                        leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            For the music lovers. Easy, secure, and stress-free ticketing that
            keeps the focus where it belongs: on the music.
          </p>
          <div className="pt-8">
            <Button text="JOIN THE PARTY" scrollTo="events" />
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex lg:w-1/3 justify-end">
          <img
            src="VOLT.gif"
            alt="Volt animation"
            className="max-w-[280px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[480px] h-auto"
          />
        </div>
      </section>

      {/* Build Section */}
      <div id="about" className="relative z-20">
        <Build />
      </div>
    </div>
  );
};

export default Home;
