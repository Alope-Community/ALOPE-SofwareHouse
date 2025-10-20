import { Code2, Smartphone, Palette } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-10 h-10 text-blue-500" />,
    title: "Custom Web Development",
    desc: "Kami membangun website yang scalable, cepat, dan sesuai kebutuhan bisnis Anda.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-500" />,
    title: "Mobile App Development",
    desc: "Aplikasi mobile dengan performa tinggi untuk Android & iOS.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Palette className="w-10 h-10 text-blue-500" />,
    title: "UI/UX Design",
    desc: "Desain antarmuka modern dan pengalaman pengguna yang intuitif.",
    gradient: "from-purple-500 to-pink-500",
  },
];

const OurService = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white" id="service">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase text-blue-600 tracking-widest relative inline-block before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-blue-300  ">
            Our Sevices
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 mt-4">
            Bangun <span className="text-blue-500">Inovasi</span> Bersama Kami.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Kami menyediakan layanan digital lengkap untuk membantu bisnis Anda
            tumbuh dan berkembang di era modern.
          </p>
        </header>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-lg p-8 transition transform hover:-translate-y-2 hover:shadow-2xl text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-blue-50 mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
