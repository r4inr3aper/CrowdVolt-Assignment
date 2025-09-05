import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  scrollTo?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, scrollTo }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex items-center gap-2 sm:gap-3
        px-6 sm:px-10 py-3 sm:py-4 rounded-full
        text-white font-grotesk font-medium text-sm md:text-lg
        bg-gradient-to-r from-[#330BFF] to-[#BF7272]
        transition-all duration-300 ease-out group
        hover:scale-105 cursor-pointer hover:shadow-[0_0_25px_rgba(191,114,114,0.5)]"
    >
      <span className="absolute inset-[1px] rounded-full bg-black"></span>

      <span className="relative flex items-center overflow-hidden">
        {text}
        <ArrowUpRight
          className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transform transition-transform duration-300 ease-in-out
            group-hover:translate-x-1 group-hover:-translate-y-1"
          strokeWidth={2.2}
        />
      </span>
    </button>
  );
};

export default Button;
