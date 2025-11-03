export default function Hotels() {
  return (
    <div className="container-responsive py-10">
      <h1 className="page-title">Khách sạn</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">
        Danh sách khách sạn, resort, homestay theo khu vực và nhu cầu. Đi kèm gợi ý đặt phòng theo mùa,
        bí quyết săn giá tốt, và tiện nghi phù hợp gia đình/cặp đôi.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">Đang cập nhật gợi ý lưu trú…</div>
        <div className="card">Đang cập nhật gợi ý lưu trú…</div>
        <div className="card">Đang cập nhật gợi ý lưu trú…</div>
      </div>
    </div>
  )
}

