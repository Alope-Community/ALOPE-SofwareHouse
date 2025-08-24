import PricingCard from "../element/PricingCard";

const PricingSection = () => {
  return (
    <section className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Informasi Pelayanan Kami</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
          <PricingCard
            title="Silver"
            price="27K"
            unit="/project"
            discountText="Save 45% /paket"
            users="Untuk 1 Aplikasi Skripsi"
            description="Kami hanya bantu menyelesaikan coding skripsi tanpa pendampingan hingga lulus sidang."
          />

          <PricingCard
            title="Platinum"
            price="Rp.0"
            unit="/project"
            discountText="Save 25% /paket"
            users="Untuk 1 Mahasiswa"
            description="Kami bantu pengerjaan coding skripsi sekaligus membimbing hingga lulus sidang."
          />

          <PricingCard
            title="Enterprise / Kustom"
            description="Cocok untuk project nyata, pesanan client, atau kebutuhan aplikasi kustom dengan kompleksitas tinggi."
            users="Untuk Tim atau Permintaan Project Khusus"
            footerText="Diskusikan Sekarang"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
