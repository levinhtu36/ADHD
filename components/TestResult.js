'use client';

import Link from 'next/link';
import { StarRed, StarGreen, StarYellow, Sparkle } from './Stars';

const resultData = {
  low: {
    level: 'THẤP',
    color: 'green',
    bgColor: 'bg-brutal-green/20',
    borderColor: 'border-brutal-green',
    textColor: 'text-brutal-green',
    icon: '🟢',
    message: 'Con bạn hiện có ít dấu hiệu liên quan đến ADHD.',
    explanation: 'Các hành vi thường gặp ở trẻ ADHD chưa xuất hiện nhiều hoặc chưa ảnh hưởng rõ rệt đến việc học tập và sinh hoạt hằng ngày.',
    recommendations: [
      'Tìm hiểu thêm về ADHD để hiểu đúng và yên tâm hơn.',
      'Tiếp tục quan sát sự phát triển của con theo từng giai đoạn.',
      'Duy trì thói quen sinh hoạt, học tập và giao tiếp tích cực.'
    ],
    actions: [
      { label: 'Tìm hiểu ADHD là gì', href: '/knowledge' },
      { label: 'Xem video giải thích ADHD', href: '/knowledge#video' }
    ]
  },
  medium: {
    level: 'TRUNG BÌNH',
    color: 'yellow',
    bgColor: 'bg-brutal-yellow/20',
    borderColor: 'border-brutal-yellow',
    textColor: 'text-brutal-orange',
    icon: '🟡',
    message: 'Con bạn có một số dấu hiệu cần được theo dõi thêm.',
    explanation: 'Một số hành vi liên quan đến khó tập trung hoặc hiếu động xuất hiện với tần suất nhất định và có thể ảnh hưởng nhẹ đến việc học hoặc sinh hoạt.',
    recommendations: [
      'Tìm hiểu kỹ hơn về ADHD.',
      'Áp dụng các cách hỗ trợ và điều chỉnh thói quen tại nhà.',
      'Theo dõi sự thay đổi của hành vi theo thời gian.'
    ],
    actions: [
      { label: 'Dấu hiệu ADHD theo độ tuổi', href: '/knowledge#signs' },
      { label: 'Video chuyên gia', href: '/knowledge#video' },
      { label: 'Hỗ trợ tại nhà', href: '/support' }
    ]
  },
  high: {
    level: 'CAO',
    color: 'red',
    bgColor: 'bg-brutal-red/20',
    borderColor: 'border-brutal-red',
    textColor: 'text-brutal-red',
    icon: '🔴',
    message: 'Con bạn có nhiều dấu hiệu giống ADHD và cần được quan tâm nhiều hơn.',
    explanation: 'Các hành vi liên quan đến khó tập trung, hiếu động hoặc bốc đồng xuất hiện khá thường xuyên và ảnh hưởng rõ hơn đến học tập hoặc cuộc sống hằng ngày.',
    recommendations: [
      'Tìm hiểu đầy đủ thông tin về ADHD.',
      'Áp dụng sớm các biện pháp hỗ trợ tại nhà và phối hợp với giáo viên.',
      'Cân nhắc trao đổi với chuyên gia giáo dục, tâm lý hoặc y tế nếu còn lo lắng.'
    ],
    actions: [
      { label: 'ADHD là gì?', href: '/knowledge' },
      { label: 'Khi nào cần gặp chuyên gia?', href: '/knowledge#expert' },
      { label: 'Hỗ trợ & can thiệp tại nhà', href: '/support' }
    ]
  }
};

export default function TestResult({ result, onRestart }) {
  const data = resultData[result];

  const StarComponent = result === 'low' ? StarGreen : result === 'medium' ? StarYellow : StarRed;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <StarComponent className="w-16 h-16 star-float" />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-brutal-black mb-2">
          Kết quả đánh giá
        </h1>
        <p className="text-brutal-black/60">
          Dựa trên câu trả lời của bạn
        </p>
      </div>

      {/* Result Card */}
      <div className={`${data.bgColor} border-3 ${data.borderColor} p-6 md:p-8 mb-6`}>
        <div className="text-center mb-6">
          <span className="text-5xl mb-2 block">{data.icon}</span>
          <h2 className={`text-2xl md:text-3xl font-black ${data.textColor}`}>
            Nguy cơ {data.level}
          </h2>
        </div>

        <div className="bg-white border-2 border-brutal-black p-4 mb-4">
          <p className="text-lg font-semibold text-center">
            {data.message}
          </p>
        </div>

        <p className="text-brutal-black/80 leading-relaxed">
          {data.explanation}
        </p>
      </div>

      {/* Recommendations */}
      <div className="bg-cream-dark border-3 border-brutal-black p-6 md:p-8 shadow-brutal mb-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Sparkle color="#F39C12" className="w-5 h-5" />
          Khuyến nghị
        </h3>
        <ul className="space-y-3">
          {data.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-brutal-black text-cream text-sm font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <span className="leading-relaxed">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="bg-white border-3 border-brutal-black p-6 mb-6">
        <h3 className="font-bold mb-4">Hành động gợi ý:</h3>
        <div className="flex flex-wrap gap-3">
          {data.actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="btn-brutal bg-brutal-orange text-white font-semibold py-2 px-4 border-2 border-brutal-black shadow-brutal-sm text-sm"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="bg-brutal-yellow border-3 border-brutal-black p-6 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-bold mb-2">Miễn trừ trách nhiệm y khoa</h4>
            <p className="text-sm leading-relaxed">
              Kết quả này chỉ mang tính <strong>tham khảo</strong>, không thay thế chẩn đoán y khoa. 
              Nếu bạn lo lắng về sự phát triển của con, hãy tham khảo ý kiến của chuyên gia y tế 
              hoặc tâm lý để được đánh giá chính xác hơn.
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onRestart}
          className="flex-1 btn-brutal bg-white font-bold py-3 px-6 border-3 border-brutal-black shadow-brutal"
        >
          Làm lại bài test
        </button>
        <Link
          href="/"
          className="flex-1 btn-brutal bg-brutal-black text-cream font-bold py-3 px-6 border-3 border-brutal-black shadow-brutal text-center"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
