export const questions = [
  // Phần A – Khó tập trung (1–9)
  {
    id: 1,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con dễ mắc lỗi do làm vội hoặc không chú ý khi làm bài tập hay việc được giao.'
  },
  {
    id: 2,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con gặp khó khăn trong việc tập trung vào bài học hoặc các hoạt động cần chú ý.'
  },
  {
    id: 3,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Khi ba mẹ hoặc người lớn nói chuyện trực tiếp, con có vẻ như không lắng nghe.'
  },
  {
    id: 4,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con thường không làm theo hướng dẫn hoặc không hoàn thành việc đã bắt đầu.'
  },
  {
    id: 5,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con gặp khó khăn trong việc sắp xếp công việc, bài tập hoặc thời gian.'
  },
  {
    id: 6,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con né tránh hoặc không thích những việc cần suy nghĩ lâu (bài tập dài, đọc sách).'
  },
  {
    id: 7,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con hay làm mất đồ dùng cần thiết cho việc học hoặc sinh hoạt.'
  },
  {
    id: 8,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con rất dễ bị xao nhãng bởi tiếng ồn hoặc những thứ xung quanh.'
  },
  {
    id: 9,
    section: 'A',
    sectionName: 'Khó tập trung',
    text: 'Con hay quên các việc hằng ngày.'
  },

  // Phần B – Hiếu động / Bốc đồng (10–18)
  {
    id: 10,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con hay cựa quậy tay chân hoặc không ngồi yên khi cần ngồi yên.'
  },
  {
    id: 11,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con thường rời khỏi chỗ ngồi trong lớp học hoặc khi đang sinh hoạt.'
  },
  {
    id: 12,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con chạy nhảy hoặc leo trèo quá mức trong những tình huống không phù hợp.'
  },
  {
    id: 13,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con gặp khó khăn khi chơi hoặc làm việc một cách yên tĩnh.'
  },
  {
    id: 14,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con luôn "chân tay không ngừng nghỉ", như thể lúc nào cũng tràn năng lượng.'
  },
  {
    id: 15,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con nói rất nhiều, ngay cả trong những tình huống cần yên lặng.'
  },
  {
    id: 16,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con thường trả lời hoặc nói chen khi người khác chưa nói xong.'
  },
  {
    id: 17,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con gặp khó khăn trong việc chờ đến lượt mình.'
  },
  {
    id: 18,
    section: 'B',
    sectionName: 'Hiếu động / Bốc đồng',
    text: 'Con hay chen ngang hoặc làm gián đoạn khi người khác đang nói chuyện hoặc chơi.'
  },

  // Phần C – Ảnh hưởng đến cuộc sống (19–24)
  {
    id: 19,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Những hành vi trên ảnh hưởng đến việc học tập của con.'
  },
  {
    id: 20,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Những hành vi trên gây khó khăn trong mối quan hệ với bạn bè.'
  },
  {
    id: 21,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Những hành vi trên gây căng thẳng hoặc khó khăn trong gia đình.'
  },
  {
    id: 22,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Các biểu hiện này xảy ra ở nhiều môi trường khác nhau (nhà và trường).'
  },
  {
    id: 23,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Những biểu hiện này đã kéo dài từ 6 tháng trở lên.'
  },
  {
    id: 24,
    section: 'C',
    sectionName: 'Ảnh hưởng đến cuộc sống',
    text: 'Ba mẹ cảm thấy lo lắng vì những hành vi này của con.'
  }
];

export const answerOptions = [
  { value: 0, label: 'Không bao giờ' },
  { value: 1, label: 'Thỉnh thoảng' },
  { value: 2, label: 'Thường xuyên' },
  { value: 3, label: 'Rất thường xuyên' }
];

// Tính toán kết quả - KHÔNG hiển thị điểm cho người dùng
export function calculateResult(answers) {
  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const maxScore = 24 * 3; // 72 điểm tối đa
  const percentage = (totalScore / maxScore) * 100;

  // Phân loại theo 3 mức
  if (percentage < 33) {
    return 'low';
  } else if (percentage < 66) {
    return 'medium';
  } else {
    return 'high';
  }
}
