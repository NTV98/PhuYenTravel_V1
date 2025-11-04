export default function About() {
  return (
    <div className="container-responsive py-12">
      <h1 className="section-title">Giới thiệu về Phú Yên</h1>
      <p className="mt-4 text-slate-700 dark:text-slate-300 max-w-3xl">
        Phú Yên nằm ở khu vực Duyên hải Nam Trung Bộ, phía Bắc giáp Bình Định, phía Nam giáp Khánh Hòa,
        phía Tây giáp Gia Lai và Đắk Lắk, phía Đông giáp Biển Đông. Vùng đất sở hữu đường bờ biển dài,
        nhiều vịnh, đầm, ghềnh đá và đồng bằng trù phú, khí hậu ôn hòa quanh năm.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img className="rounded-xl shadow-soft object-cover w-full h-72" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1400&auto=format&fit=crop" alt="Phong cảnh Phú Yên" />
        <div className="space-y-3 text-slate-700 dark:text-slate-300">
          <p>
            Văn hóa Phú Yên đa dạng với sự giao thoa của người Kinh, người Chăm và các dân tộc Tây Nguyên
            ở khu vực lân cận. Ẩm thực mang đậm hương vị biển, đặc biệt là các món từ cá ngừ đại dương.
          </p>
          <p>
            Con người Phú Yên hiền hòa, mến khách. Du lịch nơi đây phát triển theo hướng bền vững, giữ gìn thiên nhiên
            và bản sắc văn hóa, hứa hẹn mang đến trải nghiệm khó quên cho du khách.
          </p>
          <p>
          Du lịch Phú Yên là hành trình đưa bạn đến với vùng đất yên bình, nơi sở hữu biển xanh, cát trắng và những ghềnh đá kỳ vĩ. Không chỉ vậy, nơi đây còn níu chân du khách bởi ẩm thực hấp dẫn và con người mộc mạc, thân thiện.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Điểm nhấn thiên nhiên</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-3xl">
          Địa hình đa dạng: ghềnh đá bazan độc nhất như Ghềnh Đá Đĩa, các bãi biển nước trong như Bãi Môn, Bãi Xép,
          cùng vịnh, đầm, đảo nhỏ hoang sơ như Vịnh Xuân Đài, Đầm Ô Loan.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft text-slate-700 dark:text-slate-300">Ghềnh Đá Đĩa – kỳ quan đá bazan xếp lớp</div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft text-slate-700 dark:text-slate-300">Mũi Điện – nơi đón bình minh sớm</div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft text-slate-700 dark:text-slate-300">Vịnh Xuân Đài – làng chài & hải sản tươi</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Thời điểm lý tưởng để ghé thăm</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-6 text-slate-700 dark:text-slate-300">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-300">Mùa khô (1–8)</h3>
            <p className="mt-2 dark:text-slate-300">Nắng đẹp, biển êm – thích hợp tắm biển, lặn san hô, trekking.</p>
            <ul className="mt-2 list-disc list-inside text-sm dark:text-slate-300">
              <li>Chống nắng, bổ sung nước</li>
              <li>Dậy sớm để chụp ảnh bình minh</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Mùa mưa (9–12)</h3>
            <p className="mt-2 dark:text-slate-300">Có mưa rải rác, thỉnh thoảng gió mạnh – ưu tiên tham quan văn hóa, ẩm thực.</p>
            <ul className="mt-2 list-disc list-inside text-sm dark:text-slate-300">
              <li>Theo dõi dự báo thời tiết</li>
              <li>Tránh đi biển khi có cảnh báo áp thấp/gió mạnh</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Văn hóa & Ẩm thực</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Văn hóa</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Di tích Chăm Pa như Tháp Nhạn, lễ hội địa phương mộc mạc, làng nghề truyền thống.</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 dark:text-slate-300">
              <li>Lễ hội đua thuyền, cầu ngư</li>
              <li>Làng nghề làm nước mắm, đan lưới</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Ẩm thực</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Đậm đà vị biển với cá ngừ đại dương, sò huyết Ô Loan, bánh canh hẹ.</p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 dark:text-slate-300">
              <li>Cá ngừ đại dương: sashimi, mắt cá ngừ</li>
              <li>Bánh canh hẹ, bánh hỏi lòng heo</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Di chuyển & Lưu trú</h2>
        <div className="mt-3 grid md:grid-cols-3 gap-6 text-slate-700 dark:text-slate-300">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold dark:text-slate-200">Đến Phú Yên</h3>
            <p className="mt-2 text-sm dark:text-slate-300">Máy bay đến TBB; tàu hỏa ga Tuy Hòa; xe khách từ các tỉnh lân cận.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold dark:text-slate-200">Đi lại</h3>
            <p className="mt-2 text-sm dark:text-slate-300">Thuê xe máy/ô tô, taxi/xe công nghệ; đường ven biển đẹp, nhiều điểm dừng.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold dark:text-slate-200">Lưu trú</h3>
            <p className="mt-2 text-sm dark:text-slate-300">Resort ven biển, khách sạn trung tâm, homestay view đẹp phù hợp nhiều ngân sách.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Gợi ý lịch trình</h2>
        <div className="mt-3 grid md:grid-cols-3 gap-6 text-slate-700 dark:text-slate-300">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">2 ngày 1 đêm: Tuy Hòa – Tháp Nhạn – Bãi Xép – Ghềnh Đá Đĩa</div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">3 ngày 2 đêm: Vịnh Xuân Đài – Đầm Ô Loan – Mũi Điện – Bãi Môn</div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">Gia đình: thêm làng chài, trải nghiệm ghe thúng, chợ hải sản</div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Câu hỏi thường gặp</h2>
        <div className="mt-3 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Đi mùa nào đẹp nhất?</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Mùa khô (1–8) nắng đẹp, biển êm; dậy sớm để săn bình minh ở Mũi Điện.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Ăn gì nhất định phải thử?</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Cá ngừ đại dương, sò huyết Ô Loan, bánh canh hẹ và các món hải sản tươi.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Có phù hợp đi cùng gia đình?</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Rất phù hợp: bãi biển thoải, nhiều hoạt động nhẹ nhàng và trải nghiệm văn hóa.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white dark:bg-slate-800 dark:border-slate-700 shadow-soft">
            <h3 className="font-semibold text-slate-800 dark:text-slate-200">Di chuyển giữa các điểm có xa không?</h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">Các điểm chính cách nhau 10–40 km; thuê xe máy/ô tô là lựa chọn linh hoạt.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


