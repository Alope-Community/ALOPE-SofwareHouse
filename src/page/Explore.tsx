import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import Card from "../component/element/Card";
import { useEffect, useState } from "react";

const Explore = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/v1/projects`);
        const data = await response.json();
        setProjects(data.data.data || []);
        console.log("API Response: ", data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);
  return (
    <>
      <Navbar />
      <section className="container mt-17 mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-8 text-black">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center lg:mb-10 mb-4">
          Website
        </h2>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              heading={project.title}
              title={project.title}
              desc={project.about?.description || ""}
              image={`http://127.0.0.1:8000/storage/${project.image}`}
            />
          ))}
        </div>

        {/* Bawah gak ada harusnya */}

        <div className="sm:hidden flex flex-row space-x-4 py-2 overflow-x-auto scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 min-w-[280px] w-72 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white"
            >
              <img
                src={`http://127.0.0.1:8000/storage/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="relative px-4 py-6">
                <h4 className="font-semibold text-xl text-gray-900">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
