export default function About() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Giới thiệu về Phú Yên</h1>
      <p className="mt-4 text-slate-700 max-w-3xl">
        Phú Yên nằm ở khu vực Duyên hải Nam Trung Bộ, phía Bắc giáp Bình Định, phía Nam giáp Khánh Hòa,
        phía Tây giáp Gia Lai và Đắk Lắk, phía Đông giáp Biển Đông. Vùng đất sở hữu đường bờ biển dài,
        nhiều vịnh, đầm, ghềnh đá và đồng bằng trù phú, khí hậu ôn hòa quanh năm.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img className="rounded-xl shadow-soft object-cover w-full h-72" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1400&auto=format&fit=crop" alt="Phong cảnh Phú Yên" />
        <div className="space-y-3 text-slate-700">
          <p>
            Văn hóa Phú Yên đa dạng với sự giao thoa của người Kinh, người Chăm và các dân tộc Tây Nguyên
            ở khu vực lân cận. Ẩm thực mang đậm hương vị biển, đặc biệt là các món từ cá ngừ đại dương.
          </p>
          <p>
            Con người Phú Yên hiền hòa, mến khách. Du lịch nơi đây phát triển theo hướng bền vững, giữ gìn thiên nhiên
            và bản sắc văn hóa, hứa hẹn mang đến trải nghiệm khó quên cho du khách.
          </p>
        </div>
      </div>
    </div>
  )
}


