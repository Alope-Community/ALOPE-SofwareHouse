import Button from "../element/Button";


const Header = () => {
  return (
    <header
      className="relative w-full px-0 flex items-center"
      id="home"
    >
      <img
        src="/img/svg/ungu.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/biru.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/kuning.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <div className="container mt-24 mb-8 mx-auto w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 lg:px-8">
        <div className="w-full md:w-1/2 text-center sm:text-left sm:mt-24 lg:mt-28 lg:text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-2">
            Solusi Pembuatan
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">
            Software <span className="text-zinc-950">Anda</span>
          </p>
          <p className="text-slate-700 text-sm lg:text-xl mb-6 leading-relaxed">
            Kami membantu bisnis Anda berkembang melalui{" "}
            <br className="hidden md:block" />
            solusi kreatif kami. Tenang saja, mari bekerja sama.
          </p>
          <Button
            title="Explore"
            className="mb-10 justify-center sm:justify-start"
            href="/explore"
          />
        </div>

        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-20 lg:mt-0 md:mb-0 px-0">
          <img
            src="/img/logo.png"
            alt="company profile"
            className="mx-auto w-[300px]  md:mb-24 lg:mb-0 md:w-[330px] lg:w-[400px] xl:w-[450px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
