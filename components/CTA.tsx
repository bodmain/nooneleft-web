"use client";
export default function CTA() {
  return (
    <section
      className="py-20 text-center text-white relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(45deg, #e85c34, #f8b400)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 12s ease infinite",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Tham gia cùng chúng tôi
      </h2>
      <p className="mb-8 opacity-90 text-lg">
        Bạn sẵn sàng tạo ra thay đổi tích cực?
      </p>

      {/* Nút Join Us */}
      <a
        href="/join"
        className="relative inline-block px-8 py-3 font-semibold text-lg rounded-full transition-all duration-500 
                   bg-white text-gray-900 hover:text-white 
                   before:absolute before:inset-0 before:rounded-full before:p-[2px] 
                   before:bg-gradient-to-r before:from-[#f8b400] before:to-[#e85c34] before:opacity-0 hover:before:opacity-100 
                   hover:bg-gradient-to-r hover:from-[#f8b400] hover:to-[#e85c34] shadow-md hover:shadow-lg"
      >
        <span className="relative z-10">Tham gia ngay</span>
      </a>

      {/* Hiệu ứng chuyển động gradient nền */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
