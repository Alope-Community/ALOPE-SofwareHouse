const logos = [
  "/img/logo-nuteam.png",
  "/img/logo-safrenz.png",
  "/img/logo-pbk.png",
  "/img/logo-nuteam.png",
  "/img/logo-safrenz.png",
  "/img/logo-pbk.png",
  "/img/logo-nuteam.png",
  "/img/logo-safrenz.png",
  "/img/logo-pbk.png",
];

const OurClient = () => {
  return (
    <section
      className="relative flex justify-center items-center min-h-[450px] bg-[#C8DDFB]"
      style={{
        backgroundImage: 'url("/img/svg/Vector-kuning.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="px-3 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-600 font-medium text-2xl lg:text-3xl">
            Our Client
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-1">
            Trusted by Various Clients and Organizations
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mx-auto mt-2">
            Kami telah berkesempatan bekerja dengan berbagai klien dan
            organisasi.
          </p>

          <div className="overflow-hidden mt-10 relative w-full">
            <div className="flex w-max animate-scroll gap-12">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClient;
