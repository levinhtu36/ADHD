import Link from 'next/link';
import { DecorativeStars, StarRed, StarGreen, Sparkle } from '@/components/Stars';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Stars */}
      <DecorativeStars />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center relative">
        {/* Small decorative stars around title */}
        <div className="absolute top-8 left-1/4 hidden md:block">
          <Sparkle color="#E74C3C" />
        </div>
        <div className="absolute top-12 right-1/4 hidden md:block">
          <Sparkle color="#2ECC71" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brutal-black leading-tight mb-6">
          Sàng lọc nguy cơ{' '}
          <span className="text-brutal-red">ADHD</span>
          <br />
          cho trẻ 7–12 tuổi
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-brutal-black/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Bài test tham khảo giúp ba mẹ đánh giá nguy cơ ADHD và hiểu cách hỗ trợ con.
          Hoàn toàn <strong>miễn phí</strong>, <strong>không cần đăng ký</strong>.
        </p>

        {/* CTA Box */}
        <div className="bg-cream-dark border-3 border-brutal-black p-8 md:p-10 max-w-xl mx-auto shadow-brutal-lg">
          <div className="flex justify-center gap-4 mb-6">
            <StarRed className="w-10 h-10" />
            <StarGreen className="w-10 h-10" />
          </div>

          <Link
            href="/test"
            className="btn-brutal inline-block w-full bg-brutal-orange text-white font-bold text-lg md:text-xl py-4 px-8 border-3 border-brutal-black shadow-brutal"
          >
            Bắt đầu bài test ADHD
          </Link>

          <p className="mt-4 text-sm text-brutal-black/70">
            ⏱️ Khoảng 5-10 phút • 24 câu hỏi
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-brutal-yellow/30 border-2 border-brutal-yellow max-w-xl mx-auto">
          <p className="text-sm text-brutal-black">
            ⚠️ Nội dung mang tính tham khảo, <strong>không thay thế chẩn đoán y khoa</strong>.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          Website này giúp gì cho bạn?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white border-3 border-brutal-black p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <div className="w-16 h-16 bg-brutal-red/20 border-3 border-brutal-black flex items-center justify-center mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Bài test sàng lọc</h3>
            <p className="text-brutal-black/70">
              24 câu hỏi giúp đánh giá nguy cơ ADHD dựa trên hành vi của con trong 6 tháng gần đây.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border-3 border-brutal-black p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <div className="w-16 h-16 bg-brutal-green/20 border-3 border-brutal-black flex items-center justify-center mb-4">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Kiến thức ADHD</h3>
            <p className="text-brutal-black/70">
              Hiểu đúng về ADHD, dấu hiệu theo độ tuổi, nguyên nhân và khi nào cần gặp chuyên gia.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border-3 border-brutal-black p-6 shadow-brutal hover:shadow-brutal-lg transition-shadow">
            <div className="w-16 h-16 bg-brutal-yellow/20 border-3 border-brutal-black flex items-center justify-center mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Hỗ trợ tại nhà</h3>
            <p className="text-brutal-black/70">
              Các phương pháp hỗ trợ con tại nhà, phối hợp với giáo viên và tài nguyên tham khảo.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-brutal-black text-cream p-8 md:p-12 relative">
          <div className="absolute -top-4 -right-4 hidden md:block">
            <StarGreen className="w-12 h-12" />
          </div>

          <h2 className="text-2xl md:text-3xl font-black mb-6">
            ADHD là gì?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            ADHD <span className="text-brutal-yellow">(Attention Deficit Hyperactivity Disorder)</span> là
            Rối loạn Tăng động Giảm chú ý – một dạng phát triển khác biệt của não bộ.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-brutal-green text-xl">✓</span>
              <span>Không phải do trẻ hư hay lỗi của cha mẹ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brutal-green text-xl">✓</span>
              <span>Trẻ ADHD có thể phát triển tốt nếu được hỗ trợ đúng cách</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brutal-green text-xl">✓</span>
              <span>Nhiều trẻ ADHD có tư duy sáng tạo và năng lượng dồi dào</span>
            </li>
          </ul>

          <Link
            href="/knowledge"
            className="btn-brutal inline-block bg-brutal-yellow text-brutal-black font-bold py-3 px-6 border-3 border-cream shadow-brutal-sm"
          >
            Tìm hiểu thêm →
          </Link>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Bạn đã sẵn sàng?
        </h2>
        <p className="text-lg text-brutal-black/80 mb-8">
          Chỉ mất khoảng 5-10 phút để hoàn thành bài test.
        </p>
        <Link
          href="/test"
          className="btn-brutal inline-block bg-brutal-red text-white font-bold text-xl py-4 px-10 border-3 border-brutal-black shadow-brutal-lg"
        >
          Bắt đầu ngay
        </Link>
      </section>
    </div>
  );
}
