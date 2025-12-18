'use client';

import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'Con tôi có thể chơi Lego hoặc chơi game hàng giờ, vậy sao lại nói con có ADHD?',
    answer: `**Trả lời ngắn gọn:**
ADHD không có nghĩa là trẻ không thể tập trung, mà là **khó tập trung theo yêu cầu**.

Ở trẻ ADHD, thường có sự khác biệt giữa:
- **Siêu tập trung:** Khi con rất hứng thú (chơi Lego, game, vẽ…), con có thể tập trung rất lâu.
- **Tập trung có chủ đích:** Khi con cần tập trung vào những việc ít thú vị hơn (nghe giảng, làm bài tập), con lại gặp nhiều khó khăn.

Não bộ ADHD hoạt động mạnh khi có hứng thú, sự mới lạ hoặc động lực rõ ràng, nhưng rất khó duy trì chú ý với những việc lặp lại, nhàm chán.

Vì vậy, việc con có thể "siêu tập trung" **không loại trừ khả năng có ADHD**.`
  },
  {
    id: 2,
    question: 'ADHD có phải do con nghịch quá hay cha mẹ nuôi dạy chưa nghiêm?',
    answer: `**Không. ADHD không phải lỗi của cha mẹ.**

ADHD liên quan đến sự khác biệt trong cách não bộ phát triển và vận hành, đặc biệt ở các vùng não giúp:
- Kiểm soát hành vi
- Lập kế hoạch
- Điều chỉnh cảm xúc
- Duy trì sự chú ý

Vì vậy, trẻ ADHD có thể:
- Khó kiềm chế hành động hoặc lời nói
- Hay quên, khó tổ chức
- Dễ cáu kỉnh hoặc bộc phát cảm xúc

Những điều này không phải vì trẻ cố tình, mà vì não bộ của trẻ cần **nhiều thời gian và sự hỗ trợ hơn** để phát triển các kỹ năng này.`
  },
  {
    id: 3,
    question: 'ADHD khác gì với lo âu, trầm cảm hay rối loạn học tập?',
    answer: `ADHD đôi khi dễ bị nhầm lẫn với các vấn đề khác vì có một số biểu hiện giống nhau.

Ví dụ:
- Trẻ lo âu có thể mất tập trung vì quá lo lắng
- Trẻ trầm cảm có thể thờ ơ, thiếu động lực
- Trẻ có rối loạn học tập có thể gặp khó khăn trong việc đọc, viết hoặc toán

👉 **Điểm khác biệt là nguyên nhân gốc rễ.**
ADHD là vấn đề về **khả năng điều hành của não bộ**, còn các vấn đề khác có nguyên nhân khác nhau.

Chính vì vậy, việc tự kết luận là không đủ, và nếu cần đánh giá chính xác, trẻ cần được chuyên gia thăm khám.`
  },
  {
    id: 4,
    question: 'ADHD có bắt buộc phải dùng thuốc không?',
    answer: `**Không bắt buộc. Thuốc không phải lúc nào cũng là lựa chọn đầu tiên.**

Nhiều hướng dẫn quốc tế khuyến nghị cách tiếp cận **kết hợp nhiều phương pháp**, bao gồm:
- Hướng dẫn cha mẹ cách hỗ trợ con tại nhà
- Điều chỉnh môi trường học tập
- Rèn kỹ năng quản lý hành vi và cảm xúc
- Đảm bảo giấc ngủ, dinh dưỡng và vận động

Việc dùng thuốc chỉ nên được cân nhắc khi:
- Các biểu hiện ảnh hưởng nghiêm trọng đến cuộc sống của trẻ
- Và phải có chỉ định, theo dõi của bác sĩ chuyên khoa`
  },
  {
    id: 5,
    question: 'Trẻ có ADHD có thể học tốt và sống hạnh phúc không?',
    answer: `**Câu trả lời là: HOÀN TOÀN CÓ THỂ.**

Nhiều trẻ ADHD có:
- Tư duy sáng tạo
- Năng lượng dồi dào
- Khả năng tập trung rất sâu khi làm điều mình yêu thích
- Cách nhìn vấn đề độc đáo

Khi trẻ được:
- Hiểu đúng
- Hỗ trợ phù hợp
- Đồng hành kiên nhẫn

👉 Trẻ ADHD có thể phát triển tốt, học tập hiệu quả và sống hạnh phúc theo cách riêng của mình.`
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Simple markdown-like formatting
  const formatText = (text) => {
    return text
      .split('\n')
      .map((line, i) => {
        // Bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Bullet points
        if (line.startsWith('- ')) {
          return `<li class="ml-4">${line.substring(2)}</li>`;
        }

        // Emoji bullet
        if (line.startsWith('👉')) {
          return `<p class="mt-2 font-semibold">${line}</p>`;
        }

        return line ? `<p class="mb-2">${line}</p>` : '<br/>';
      })
      .join('');
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq) => (
        <div
          key={faq.id}
          className="border-3 border-brutal-black bg-white shadow-brutal-sm"
        >
          {/* Question Header */}
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full p-4 md:p-6 text-left flex items-start gap-4 hover:bg-cream-dark transition-colors"
          >
            <span className="flex-shrink-0 w-8 h-8 bg-brutal-orange text-white font-bold flex items-center justify-center text-sm">
              {faq.id}
            </span>
            <span className="flex-grow font-semibold text-lg leading-snug pr-4">
              {faq.question}
            </span>
            <span className={`flex-shrink-0 w-8 h-8 border-2 border-brutal-black flex items-center justify-center transition-transform ${
              openId === faq.id ? 'rotate-180 bg-brutal-black text-white' : 'bg-white'
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {/* Answer Content */}
          <div className={`accordion-content ${openId === faq.id ? 'open' : ''}`}>
            <div className="px-4 md:px-6 pb-6 pt-2 border-t-2 border-brutal-black/20">
              <div
                className="prose prose-sm max-w-none text-brutal-black/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: formatText(faq.answer) }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* FAQ Disclaimer */}
      <div className="mt-6 p-4 bg-brutal-yellow/30 border-2 border-brutal-yellow">
        <p className="text-sm text-brutal-black">
          <strong>Lưu ý:</strong> Nội dung FAQ chỉ mang tính tham khảo, không thay thế cho
          chẩn đoán hoặc tư vấn y khoa chuyên môn.
        </p>
      </div>
    </div>
  );
}
