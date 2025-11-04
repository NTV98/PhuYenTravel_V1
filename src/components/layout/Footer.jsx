import { Link } from 'react-router-dom'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-800 border-t dark:border-slate-700 mt-[100px]">
      <div className="container-responsive py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold text-ocean-700 dark:text-ocean-400">Nhớ Phú Yên</h4>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Khám phá vẻ đẹp xứ hoa vàng cỏ xanh.</p>
          <div className="flex gap-3 mt-4 text-ocean-600 dark:text-ocean-400">
            <a href="#" aria-label="Facebook"><FaFacebook className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube"><FaYoutube className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-ocean-700 dark:text-ocean-400">Liên kết nhanh</h4>
          <ul className="mt-2 space-y-2 text-slate-700 dark:text-slate-300">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/destinations">Điểm đến</Link></li>
            <li><Link to="/cuisine">Ẩm thực</Link></li>
            <li><Link to="/activities">Hoạt động</Link></li>
            <li><Link to="/transport">Phương tiện</Link></li>
            <li><Link to="/hotels">Khách sạn</Link></li>
            <li><Link to="/tips">Kinh nghiệm</Link></li>
            <li><Link to="/reviews">Review</Link></li>
            <li><Link to="/weather">Thời tiết</Link></li>
            <li><Link to="/map">Bản đồ</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-ocean-700 dark:text-ocean-400">Liên hệ</h4>
          <ul className="mt-2 space-y-2 text-slate-700 dark:text-slate-300">
            <li>Email: contact@phuyentravel.vn</li>
            <li>Điện thoại: 0123 456 789</li>
            <li>Địa chỉ: Tuy Hòa, Phú Yên</li>
          </ul>
        </div>
      </div>
      <div className="border-t dark:border-slate-700 py-4 text-center text-slate-500 dark:text-slate-400 text-sm">© {new Date().getFullYear()} Nhớ Phú Yên. All rights reserved.</div>
    </footer>
  )
}


