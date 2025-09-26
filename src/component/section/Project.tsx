import { useState, useEffect } from "react";
import Card from "../element/Card";
import Button from "../element/Button";

const Project = () => {
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
    <section
      className="relative py-10 px-3 sm:px-6 md:px-6 lg:px-8 xl:px-8 text-black overflow-hidden"
      id="ourWorks"
    >
      <img
        src="/img/svg/biru.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/ungu.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <img
        src="/img/svg/kuning.svg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        loading="lazy"
      />
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center mb-4 sm:mb-10">
          <h2 className="text-3xl xl:text-4xl font-bold md:mb-0 mb-5">
            <span className="text-blue-500">Our</span> Works
          </h2>

          <Button title="See Detail" href="/blogs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id || index}
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
                   {project.about?.description || ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
