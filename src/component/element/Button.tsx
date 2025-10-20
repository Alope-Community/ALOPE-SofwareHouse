import ArrowRight from "../icons/ArrowRight";

type ButtonProps = {
  title?: string;
  href?: string;
  className?: string;
};

const Button = ({ title, href = "/", className = "" }: ButtonProps) => {
  const isHashLink = href?.startsWith("#");

  const handleScrollToHash = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href?.substring(1);
    const targetElement = document.getElementById(targetId || "");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {isHashLink ? (
        <a
          href={href}
          onClick={handleScrollToHash}
          className="group flex items-center gap-2 text-sm sm:text-base px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          {title}
          <ArrowRight />
        </a>
      ) : (
        <a
          href={href}
          className="group flex items-center gap-2 text-sm sm:text-base px-4 py-1.5 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          {title}
          <ArrowRight />
        </a>
      )}
    </div>
  );
};

export default Button;
