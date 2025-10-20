import DiscordIcon from "../icons/DiscordIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";

const NavLinks = [
  { title: "Tentang Kami", href: "/about" },
  { title: "Layanan & Fitur", href: "/services" },
  { title: "Portofolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
];

const Footer = () => {
  return (
    <>
      <footer
        className="flex flex-wrap gap-10 px-3 py-8 text-center 
                   sm:px-5 
                   md:px-8 
                   lg:flex-nowrap lg:gap-5 lg:text-left 
                   xl:px-5 
                   2xl:px-2"
        id="footer"
      >
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full">
            <div
              className="flex flex-col items-center 
                            sm:flex-row sm:gap-3 
                            lg:flex-row lg:items-center"
            >
              <img
                src="/img/Alope.png"
                alt="Alope Logo"
                className="h-16 sm:h-20 mb-3 sm:mb-0 lg:mr-3"
              />
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                Alope Software House
              </h2>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center mt-5 sm:mt-6">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 gap-y-3 text-dark-grey-900">
                {NavLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-sm sm:text-base font-semibold leading-7 text-gray-700 
                               hover:text-blue-600 transition duration-200 
                               after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                               after:bg-blue-600 after:transition-all after:duration-300 
                               hover:after:w-full"
                  >
                    {link.title}
                  </a>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-6 sm:gap-8 mt-5">
                <DiscordIcon link="https://discord.gg/WV7wAdcp" />
                <InstagramIcon link="https://www.instagram.com/alope.world/" />
                <GithubIcon link="https://github.com/orgs/Alope-Community/dashboard" />
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center mt-4">
              <p className="text-sm sm:text-base font-normal leading-7 text-center text-grey-700">
                &copy; 2025 Alope Software House. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
