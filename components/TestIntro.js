'use client';

import { useState } from 'react';
import { StarRed, StarGreen, Sparkle } from './Stars';

export default function TestIntro({ onStart }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center gap-4 mb-4">
          <StarRed className="w-12 h-12 star-float" />
          <StarGreen className="w-10 h-10 star-float-delay" />
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-brutal-black mb-4">
          Bài test sàng lọc ADHD
        </h1>
        <p className="text-lg text-brutal-black/70">
          Dành cho trẻ 7–12 tuổi
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-cream-dark border-3 border-brutal-black p-6 md:p-8 shadow-brutal mb-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Sparkle color="#F39C12" className="w-5 h-5" />
          Trước khi bắt đầu
        </h2>
        
        <div className="space-y-4 text-brutal-black/80">
          <p className="leading-relaxed">
            Bài test này giúp ba mẹ <strong>đánh giá mức độ nguy cơ ADHD</strong> dựa trên 
            hành vi của con trong <strong>6 tháng gần đây</strong>.
          </p>
          
          <div className="bg-white border-2 border-brutal-black p-4">
            <p className="font-semibold text-brutal-red">
              ⚠️ Kết quả KHÔNG phải chẩn đoán y khoa.
            </p>
          </div>

          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-brutal-green font-bold">✓</span>
              <span>Bài test gồm <strong>24 câu hỏi</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brutal-green font-bold">✓</span>
              <span>Thời gian làm bài: <strong>5-10 phút</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brutal-green font-bold">✓</span>
              <span>Hoàn toàn <strong>miễn phí</strong> và <strong>không lưu dữ liệu</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brutal-green font-bold">✓</span>
              <span>Hãy trả lời dựa trên quan sát thực tế của bạn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimer Agreement */}
      <div className="bg-brutal-yellow/30 border-3 border-brutal-yellow p-6 mb-6">
        <h3 className="font-bold mb-3">Miễn trừ trách nhiệm y khoa</h3>
        <p className="text-sm mb-4 leading-relaxed">
          Kết quả bài test này chỉ mang tính chất <strong>tham khảo</strong>, giúp ba mẹ có 
          thêm thông tin để hiểu về con. Kết quả <strong>không thay thế</strong> cho việc 
          thăm khám và chẩn đoán từ chuyên gia y tế hoặc tâm lý. Nếu bạn có lo lắng về 
          sự phát triển của con, hãy tham khảo ý kiến chuyên gia.
        </p>
        
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-6 h-6 border-3 border-brutal-black transition-colors ${
              agreed ? 'bg-brutal-green' : 'bg-white'
            }`}>
              {agreed && (
                <svg className="w-full h-full text-white p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="font-semibold group-hover:text-brutal-black/80">
            Tôi đã đọc, hiểu và đồng ý với nội dung trên
          </span>
        </label>
      </div>

      {/* Start Button */}
      <button
        onClick={onStart}
        disabled={!agreed}
        className={`w-full py-4 px-8 font-bold text-lg border-3 border-brutal-black transition-all ${
          agreed
            ? 'bg-brutal-orange text-white shadow-brutal btn-brutal hover:bg-brutal-red'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {agreed ? 'Bắt đầu làm bài test' : 'Vui lòng đồng ý để tiếp tục'}
      </button>
    </div>
  );
}
