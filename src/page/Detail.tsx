import Footer from "../component/layout/Footer";
import Navbar from "../component/layout/Navbar";
import SectionGrid from "../component/section/SectionGrid";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const respoonse = await fetch(
          `http://127.0.0.1:8000/api/v1/projects/${id}`
        );
        const data = await respoonse.json();
        console.log("API Response : ", data);
        setProject(data.data || null);
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }
  if (!project) return <div>Project not found</div>;

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
                {project.title}
              </h1>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-center mt-10">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 lg:gap-x-12">
                {Object.entries(project.project_info || {}).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center border-b-2 border-[#5998F4] px-2 w-fit pb-2"
                    >
                      <div className="capitalize">{key}</div>
                      <div className="font-semibold mt-2">
                        {key === "url" ? (
                          <a
                            href={value as string}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {new URL(value as string).host}
                          </a>
                        ) : (
                          (value as string)
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 pb-0 rounded-xl mt-10 hidden sm:block">
              <img
                src={`http://127.0.0.1:8000/storage/${project.image}`}
                alt="Main Project"
                className="mx-auto w-full max-w-6xl object-cover mb-0"
              />
            </div>

            <p className="border-b-2 border-[#5998F4] w-40 sm:w-60 mx-auto mt-4 mb-6 hidden sm:block"></p>
            <SectionGrid
              items={[
                project.about && {
                  title: "About",
                  description: project.about.description,
                  image: `http://127.0.0.1:8000/storage/${project.about.image}`,
                },
                project.feature && {
                  title: "Feature",
                  description: project.feature.description,
                  image: `http://127.0.0.1:8000/storage/${project.feature.image}`,
                },
                project.stack && {
                  title: "Stack",
                  description: project.stack.description,
                  image: `http://127.0.0.1:8000/storage/${project.stack.image}`,
                },
              ].filter(Boolean)}
            />
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
