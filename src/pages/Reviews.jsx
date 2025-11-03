export default function Reviews() {
  return (
    <div className="container-responsive py-10">
      <h1 className="page-title">Review du lịch</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Tổng hợp các bài review hay từ cộng đồng: lịch trình mẫu, chi phí thực tế, lưu ý từng điểm đến,
        tips chụp ảnh đẹp và trải nghiệm “best of Phú Yên”.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">Bài review nổi bật #1 (đang cập nhật)…</div>
        <div className="card">Bài review nổi bật #2 (đang cập nhật)…</div>
        <div className="card">Bài review nổi bật #3 (đang cập nhật)…</div>
      </div>
    </div>
  )
}

