import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import data from "../data/project.json";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const project = data.find((p) => p.id === Number(id));

  if (!project) return <div>Project not found</div>;

  const { title, mainImage, info, sections } = project;

  return (
    <>
      <Navbar />
      <div className="relative z-0">
        <img
          src="/img/svg/Vector-12.svg"
          className="absolute top-[20px] left-0 w-[350px] sm:w-[500px] lg:w-[700px] xl:w-[800px] max-w-none pointer-events-none z-0"
          alt="Blue Decoration"
          loading="lazy"
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
          <div className="mt-10 py-10 space-y-10">
            <div
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-1 border border-[#5998F4] text-[#5998F4] hover:text-blue-800 text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Go Back</span>
            </div>
            <div className="text-center mt-6">
              <h1 className="inline-block text-xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-[#5998F4] pb-2">
                {title}
              </h1>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-center mt-10">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 lg:gap-x-12">
                {info.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center border-b-2 border-[#5998F4] px-2 w-fit pb-2"
                  >
                    <div>{item.label}</div>
                    <div className="font-semibold mt-2">
                      {item.label === "Website" ? (
                        <a
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {new URL(item.value).host}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 pb-0 rounded-xl mt-10 hidden sm:block">
              <img
                src={mainImage}
                alt="Main Project"
                className="mx-auto w-full max-w-6xl object-cover mb-0"
              />
            </div>

            <p className="border-b-2 border-[#5998F4] w-40 sm:w-60 mx-auto mt-4 mb-6 hidden sm:block"></p>
            {sections.map((section, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10 mt-10"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-4 order-2 lg:order-1 w-full">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 text-justify text-sm sm:text-base">
                        {section.description}
                      </p>
                    </div>
                    <div className="w-full order-1 lg:order-2">
                      <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                        <img
                          src={section.image}
                          alt="Project Detail"
                          className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full">
                      <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                        <img
                          src={section.image}
                          alt="Project Detail"
                          className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 w-full">
                      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 text-justify text-sm sm:text-base">
                        {section.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[100px] overflow-visible">
          <img
            src="/img/svg/Vector-11.svg"
            className="absolute top-[-1000%] right-0 w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] max-w-none pointer-events-none"
            alt="Yellow Decoration"
            loading="lazy"
          />
        </div>
        <div className="relative mt-20">
          <img
            src="/img/svg/Vector-13.svg"
            className="absolute bottom-[-30px] sm:bottom-[-130px] md:bottom-[-140px] lg:bottom-[-150px] left-0 w-[350px] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] max-w-none pointer-events-none"
            alt="Purple Decoration"
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
