import Button from "../element/Button";

const Solution = () => {
  return (
    <section className="w-full py-16 px-4">
      <img
        src="/img/svg/solution.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-black">
          Unlimited Solutions
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-8">
          <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-xs bg-gradient-to-r from-blue-100 to-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center justify-between">
            <p className="text-blue-600 font-semibold mb-2">Non Prem</p>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Rp. 0<span className="font-normal">/Revisi</span>
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Nikmati hingga <strong>3 kali revisi</strong> secara gratis untuk
              setiap proyek.
            </p>
            <Button
              title="Coba Sekarang"
              href="#footer"
              // customClass="bg-transparent border-blue-600 text-blue-600"
            />
          </div>

          <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-xs bg-gradient-to-t from-blue-100 to-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center justify-between">
            <p className="text-blue-600 font-semibold mb-2">Premium</p>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Rp. -<span className="font-normal">/Revisi</span>
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Revisi <strong>tanpa batas</strong> dengan dukungan penuh untuk
              proyek Anda.
            </p>
            <Button
              title="Coba Sekarang"
              href="#footer"
              // customClass="bg-transparent border-blue-600 text-blue-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
