# Phú Yên Travel (React + Vite + Tailwind)

Một website giới thiệu du lịch Phú Yên được xây dựng bằng React, Vite và TailwindCSS.

## Yêu cầu môi trường
- Node.js >= 18

## Cài đặt & chạy
```bash
npm install
npm run dev
```
Mở trình duyệt tại `http://localhost:5173`.

## Công nghệ
- React 18, React Router DOM
- Vite 5
- TailwindCSS 3
- Framer Motion, React Icons

## Cấu trúc thư mục
```
src/
  components/
    layout/
      Header.jsx
      Footer.jsx
    cards/
      DestinationCard.jsx
      CuisineCard.jsx
    HeroSection.jsx
    ContactForm.jsx
  pages/
    Home.jsx
    About.jsx
    Destinations.jsx
    Cuisine.jsx
    Contact.jsx
    MapPage.jsx
  data/
    data.js
  App.jsx
  main.jsx
  index.css
```

## Ghi chú
- Hình ảnh minh họa dùng từ Unsplash (URL công khai).
- Google Maps được nhúng bằng iframe để chạy ngay không cần API key.
- Có thể mở rộng dữ liệu trong `src/data/data.js`.

# PhuYenTravel_V1
