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
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="mt-4 text-lg font-semibold text-gray-600">
            Loading Detail...
          </p>
        </div>
        <Footer />
      </>
    );
  }
  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Navbar />
      <div className="relative z-0">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden">
          <div className="mt-15 py-10 space-y-10">
            <div
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-1 border border-[#5998F4] text-[#5998F4] hover:text-blue-800 text-xs sm:text-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-5  sm:w-5"
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
              <h1 className="inline-block text-xl sm:text-3xl lg:text-4xl font-bold border-b-2 border-blue-500 pb-2">
                {project.title}
              </h1>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-center mt-10">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 lg:gap-x-12">
                {Object.entries(project.project_info || {}).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center border-b-2 border-blue-500 px-2 w-fit pb-2"
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

            <div className="mx-auto max-w-[100%] sm:max-w-5xl md:max-w-6xl px-3 sm:px-6 lg:px-8 mt-10 md:mt-16">
              <img
                src={`http://127.0.0.1:8000/storage/${project.image}`}
                alt={project.title}
                className="
                  w-full 
                  h-[35vh] sm:h-[40vh] md:h-[55vh] lg:h-[70vh]
                  object-cover 
                  rounded-xl 
                  shadow-lg md:shadow-xl hover:shadow-2xl 
                  transition-all duration-500 ease-in-out 
                  transform hover:scale-[1.01]
                "
                loading="lazy"
              />
            </div>

            <p className="border-b-3 border-blue-500 w-40 sm:w-60 mx-auto mt-4 mb-6 hidden sm:block"></p>
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
      </div>

      <Footer />
    </>
  );
};

export default Detail;
