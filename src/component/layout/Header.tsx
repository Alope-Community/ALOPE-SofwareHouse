import Button from "../element/Button";

const Header = () => {
  return (
    <header className="relative min-h-[650px] flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between px-4 md:px-10 lg:flex-row xl:px-10 2xl:px-2">
        <div className="order-2 lg:order-1 lg:w-1/2 mb-0 md:mb-0 lg:mb-13">
          <h1 className="mt-5 mb-4 text-center text-3xl font-medium leading-snug md:text-4xl lg:text-left xl:text-6xl">
            <span className="font-extrabold">Alope</span>
            <br className="hidden lg:block" />
            <span className="mt-3 block">
              <span className="font-bold text-[#2276f0]">Software </span>
              <span className="font-bold">House</span>
            </span>
          </h1>

          <p className="mx-auto mb-6 mt-3 w-full text-center text-sm text-gray-800 md:mx-0 sm:w-[100%] lg:w-[90%] md:text-base lg:text-left xl:w-[85%] xl:text-xl">
            Kami membantu bisnis Anda berkembang melalui solusi kreatif dan
            teknologi inovatif. Tenang saja, mari bekerja sama menuju
            kesuksesan.
          </p>

          <div className="mt-2 flex justify-center gap-5 lg:justify-start">
            <Button title="Start Now" href="#service" />
          </div>
        </div>

         <div className="relative order-1 lg:order-2 lg:w-1/2 flex justify-center">
          <img
            src="/img/img-mockup.png"
            alt="Alope Software Mockup"
            
            className="mx-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-full h-auto rounded-xl object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
