import Link from 'next/link';
import { Sparkle } from './Stars';

export default function Footer() {
  return (
    <footer className="bg-brutal-black text-cream mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Medical Disclaimer */}
        <div className="bg-brutal-yellow text-brutal-black p-6 border-3 border-cream mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-bold text-lg mb-2">Miễn trừ trách nhiệm y khoa</h3>
              <p className="text-sm leading-relaxed">
                Nội dung trên website này chỉ mang tính chất <strong>tham khảo</strong>,
                không thay thế cho chẩn đoán hoặc tư vấn y khoa chuyên môn.
                Nếu bạn lo lắng về sự phát triển của con, hãy tham khảo ý kiến của
                chuyên gia y tế hoặc tâm lý.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-black mb-4">
              ADHD<span className="text-brutal-red">Check</span>
            </h4>
            <p className="text-cream/80 text-sm">
              Sàng lọc nguy cơ ADHD cho trẻ 7–12 tuổi.
              Dành cho ba mẹ Việt Nam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-4 flex items-center gap-2">
              <Sparkle color="#F39C12" className="w-4 h-4" />
              Liên kết nhanh
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/test" className="hover:text-brutal-yellow transition-colors">
                  → Làm bài test ADHD
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="hover:text-brutal-yellow transition-colors">
                  → Kiến thức về ADHD
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-brutal-yellow transition-colors">
                  → Hỗ trợ tại nhà
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-bold mb-4 flex items-center gap-2">
              <Sparkle color="#2ECC71" className="w-4 h-4" />
              Tài nguyên
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/groups/adhdtichcuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brutal-yellow transition-colors"
                >
                  → ADHD Tích Cực (Facebook)
                </a>
              </li>
              <li>
                <a
                  href="https://adhdtichcuc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brutal-yellow transition-colors"
                >
                  → ADHDTichCuc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>© 2024 ADHDCheck. Website mang tính chất tham khảo, không thay thế chẩn đoán y khoa.</p>
        </div>
      </div>
    </footer>
  );
}
