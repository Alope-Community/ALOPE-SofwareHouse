import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

import blogDetails from "../data/blogDetail.json";
import recommendedBlogs from "../data/recommendedBlogs.json";

export default function DetailBlog() {
  const { id } = useParams();
  const blog = blogDetails.find((item) => item.id === parseInt(id || "0"));

  const [isMobile, setIsMobile] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">
          Blog tidak ditemukan
        </p>
      </div>
    );
  }

  const displayedContent =
    isMobile && !showFullContent
      ? blog.content.slice(0, 500) + "..."
      : blog.content;

  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-20">
      <Navbar />

      <div className="max-w-5xl mx-auto mt-25 pb-16">
        {/* Kategori */}
        <div className="inline-block bg-blue-500 text-white font-semibold text-sm px-3 py-0.5 rounded-full mb-5">
          {blog.category}
        </div>

        {/* Judul */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight mb-4">
          {blog.title}
        </h1>

        {/* Penulis & Tanggal */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <img
            src="/img/Alope.png"
            alt="author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-md font-medium">{blog.author}</p>
            <p className="text-sm text-gray-500">{blog.date}</p>
          </div>
        </div>

        {/* Gambar utama */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-10"
        />

        {/* Konten */}
        <div className="prose prose-lg max-w-none text-justify whitespace-pre-line mt-10 mb-4">
          {displayedContent}
        </div>

        {/* lihat selengkapnya */}
        {isMobile && (
          <button
            onClick={() => setShowFullContent(!showFullContent)}
            className="text-blue-400 hover:text-blue-600 font-semibold text-sm mb-10"
          >
            {showFullContent ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
        )}

        {/* Artikel Rekomendasi */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedBlogs.slice(0, visibleCount).map((item, index) => {
              const dummyDate = new Date(2024, 6, 1 + index);
              const formattedDate = dummyDate.toLocaleDateString("id-ID");

              return (
                <Link to={`/detailblog/${item.id}`} key={item.id}>
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full rounded-xl h-50 object-cover"
                    />
                    <div className="p-4">
                      <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-2">
                        {item.tag}
                      </span>
                      <h3 className="text-lg font-bold leading-snug text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[10px] text-gray-400">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {recommendedBlogs.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() =>
                  setVisibleCount(
                    visibleCount === 3 ? recommendedBlogs.length : 3
                  )
                }
                className="mt-5 text-blue-500 border border-blue-500 rounded-full py-1 px-3 hover:text-white hover:bg-blue-500 font-semibold text-md transition-colors duration-300 ease-in-out"
              >
                {visibleCount === 3 ? (
                  <>
                    See More <span>→</span>
                  </>
                ) : (
                  <>See Less</>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
