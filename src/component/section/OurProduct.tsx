import React, { useState, useEffect } from "react";
import Button from "../element/Button";

const API_BASE_URL = "http://127.0.0.1:8000";
const API_ENDPOINT = `${API_BASE_URL}/api/v1/projects`;

interface ProductData {
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

const OurProduct = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
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
        const fetchedProducts: ProductData[] = data.data.data || [];
        setProducts(fetchedProducts);
      } catch (err: any) {
        console.error("Error fetching projects:", err);
        setError("Gagal memuat data proyek.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const ProductItem: React.FC<{ product: ProductData; index: number }> = ({
    product,
    index,
  }) => {
    const isReversed = index % 2 !== 0;

    const mockupOrder = isReversed ? "md:order-last" : "md:order-first";
    const textOrder = isReversed ? "md:order-first" : "md:order-last";

    return (
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 py-16 md:py-24 border-b border-gray-200 last:border-b-0">
        <div className={`md:w-1/2 w-full ${mockupOrder}`}>
          <img
            src={`${API_BASE_URL}/storage/${product.image}`}
            alt={`Mockup ${product.title}`}
            className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] border border-gray-100"
          />
        </div>

        <div className={`md:w-1/2 w-full ${textOrder} self-center`}>
          <span
            className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider mb-4 
              text-blue-600 border-b-2 border-blue-300 transition-colors duration-300"
          >
            {product.project_info?.platform || "Web Application"}
          </span>

          <h3 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-snug">
            {product.title}
          </h3>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
            {product.about?.description}
          </p>

          <Button title="See Detail" href={`/detail/${product.id}`} />
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-20 overflow-hidden bg-white"
      id="our-product"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase text-blue-600 tracking-widest relative inline-block before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-blue-300  ">
            Our Product
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-900 mt-4">
            Proyek <span className="text-blue-500">Pilihan</span> Kami.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Jelajahi portofolio lengkap solusi digital kami, dirancang untuk
            performa dan estetika.
          </p>
        </header>

        {/* Konten Utama */}
        <div className="space-y-0">
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

        
          {products.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
