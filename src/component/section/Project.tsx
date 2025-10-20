import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../icons/ArrowRight";

interface ProjectData {
  id: number;
  title: string;
  image: string;
  short_description?: string;
  project_info?: {
    platform: string;
  };
  about?: {
    description: string;
  };
}

const API_BASE_URL = "http://127.0.0.1:8000";
const API_ENDPOINT = `${API_BASE_URL}/api/v1/projects`;

const Project = () => {
  const [products, setProducts] = useState<ProjectData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const fetchedProducts: ProjectData[] = data.data.data || [];
        setProducts(fetchedProducts);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setError("Gagal memuat data. Pastikan server lokal berjalan.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ProjectCard = ({ product }: { product: ProjectData }) => (
    <Link
      to={`/detail/${product.id}`}
      className="block relative group p-1 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden border border-gray-100 h-full"
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 transition-colors duration-500 pointer-events-none z-0"></div>

      <div className=" relative overflow-hidden rounded-xl h-full flex flex-col">
        <div className="aspect-video overflow-hidden rounded-xl border border-gray-100 relative shadow-inner">
          <img
            src={`${API_BASE_URL}/storage/${product.image}`}
            alt={`Gambar proyek ${product.title}`}
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="p-5 md:p-6 flex flex-col flex-grow">
          <span className="max-w-fit inline-block text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-2 font-medium uppercase tracking-wider">
            {product.project_info?.platform || "Digital Solution"}
          </span>

          <h3 className="text-xl font-bold text-gray-900 leading-snug mb-2 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-sm text-gray-500 mb-4 flex-grow line-clamp-3">
            {product.about?.description || "Deskripsi tidak tersedia."}
          </p>

          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm transition-colors duration-300 group-hover:text-blue-800">
              See Details
              <ArrowRight className="size-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
  <section
    className="py-20 md:py-24 bg-gray-50 overflow-hidden"
    id="our-works"
  >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase text-blue-600 tracking-widest relative inline-block before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-blue-300  ">
            Our Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 mt-4">
            Proyek <span className=" text-blue-500">Digital</span> Terbaik.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Kami mengubah ide menjadi solusi digital yang kuat dan elegan. Lihat
            portofolio proyek terkurasi kami.
          </p>
        </header>

        {isLoading && (
          <div className="text-center py-10">
            <p className="text-lg text-blue-500 animate-pulse">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500 inline-block"
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
              Memuat project...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 bg-red-100 border-l-4 border-red-500 text-red-800 p-4 max-w-lg mx-auto rounded-lg shadow-md">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {!isLoading && products.length > 0 && (
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product) => (
              <ProjectCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!isLoading && products.length > 0 && (
          <div className="md:hidden overflow-x-auto pb-6 -mx-6 px-6">
            <div className="flex space-x-6 min-w-max">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[85vw] max-w-sm flex-shrink-0"
                >
                  <ProjectCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {!isLoading && products.length === 0 && !error && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              Saat ini belum ada proyek untuk ditampilkan.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
