import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";

// import blogDetails from "../data/blogDetail.json";
// import recommendedBlogs from "../data/recommendedBlogs.json";

export default function DetailBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [recommended, setRecomended] = useState<any[]>([]);
  // const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) return;

        // Fetch detail blog
        const resDetail = await fetch(
          `http://127.0.0.1:8000/api/v1/blogs/${slug}`
        );
        const dataDetail = await resDetail.json();
        console.log("API Response Detail:", dataDetail);
        setBlog(dataDetail.data || null);

        // Fetch semua blog
        const resBlogs = await fetch(`http://127.0.0.1:8000/api/v1/blogs/`);
        const dataBlogs = await resBlogs.json();

        let blogs = dataBlogs.data || [];
        blogs = blogs.filter((b: any) => b.slug !== slug);

        let shuffled = blogs.sort(() => 0.5 - Math.random());
        setRecomended(shuffled.slice(0, 6));
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }
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
          {blog.blog_category?.name}
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
          src={`http://127.0.0.1:8000/storage/${blog.image}`}
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

        {/* Artikel Rekomendasi  */}
        <div className="mt-20">
          <h2 className="text-xl font-bold mb-6">Artikel Rekomendasi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((item) => (
              <Link to={`/detailblog/${item.slug}`} key={item.id}>
                <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.image}`}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-2">
                      {item.blog_category?.name}
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-400">{item.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
