import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="container-responsive py-12 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="section-title">Liên hệ</h1>
        <p className="mt-2 text-slate-600">Gửi câu hỏi hoặc yêu cầu hỗ trợ, chúng tôi sẽ phản hồi sớm.</p>
        <div className="mt-6"><ContactForm /></div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-ocean-700">Bản đồ</h2>
        <div className="mt-3 rounded-xl overflow-hidden shadow-soft">
          <iframe
            title="Google Map Phú Yên"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1005963.405535826!2d108.52!3d13.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170f6b5a1d3a9cf%3A0x1c6f0d5ec7b9b9f!2zUGjDuiBZw6puLCBWaWV0bmFt!5e0!3m2!1svi!2s!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 text-slate-700 space-y-2">
          <p><strong>Địa chỉ:</strong> Tuy Hòa, Phú Yên</p>
          <p><strong>Email:</strong> contact@phuyentravel.vn</p>
          <p><strong>Điện thoại:</strong> 0123 456 789</p>
        </div>
      </div>
    </div>
  )
}


