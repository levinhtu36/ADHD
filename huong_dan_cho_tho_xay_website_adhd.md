# HƯỚNG DẪN CHO THỢ XÂY (DEV)
## DỰ ÁN: WEBSITE SÀNG LỌC NGUY CƠ ADHD CHO TRẺ 7–12 TUỔI

> **Tài liệu này là NGUỒN CHUẨN DUY NHẤT để triển khai V1.** Dev không tự ý rút gọn/diễn giải lại nội dung.

---

## 1. THÔNG TIN CHUNG
- **Đối tượng sử dụng:** Ba mẹ có con **7–12 tuổi**
- **Ngôn ngữ:** Tiếng Việt
- **Mục tiêu:** Sàng lọc nguy cơ ADHD ở mức tham khảo, cung cấp kiến thức và hướng dẫn hỗ trợ tại nhà
- **Giới hạn bắt buộc:**
  - Không chẩn đoán y khoa
  - Không lưu dữ liệu/hồ sơ trẻ
  - Không yêu cầu đăng nhập
  - Không tư vấn 1-1
  - Không dùng thuật ngữ phức tạp; nếu bắt buộc phải dùng thì luôn có giải thích trong **( )**

---

## 2. CẤU TRÚC WEBSITE (SITEMAP)
- **Trang chủ**
- **Làm bài test ADHD (7–12 tuổi)**
  - Giới thiệu ngắn + đồng ý miễn trừ y khoa
  - Bài test (câu hỏi)
  - Kết quả đánh giá + khuyến nghị (Nguy cơ Thấp / Trung bình / Cao)
- **Kiến thức ADHD**
  - ADHD là gì?
  - **Video YouTube giải thích ADHD** (đặt ngay sau “ADHD là gì?”)
  - Dấu hiệu theo độ tuổi
  - Nguyên nhân & hiểu đúng – hiểu sai
  - Khi nào cần gặp chuyên gia?
  - 05 câu hỏi thường gặp (FAQ) – **dạng xổ xuống**
- **Hỗ trợ & can thiệp tại nhà**
  - Thói quen – môi trường
  - Kỹ năng quản lý hành vi
  - Học tập – phối hợp với giáo viên
  - Tài nguyên tham khảo (sách/kênh/video/website…)

---

## 3. NGUYÊN TẮC BẮT BUỘC (DEV PHẢI TUÂN THỦ)
- ❌ KHÔNG dùng từ: **“chẩn đoán”**, “bệnh”, “kết luận mắc ADHD”
- ❌ KHÔNG lưu dữ liệu cá nhân (tên trẻ, trường lớp, email, số điện thoại) và **không lưu kết quả bài test**
- ❌ KHÔNG yêu cầu đăng nhập
- ✅ LUÔN hiển thị **miễn trừ y khoa**:
  - Ở màn hình bắt đầu bài test
  - Ở trang kết quả
  - (Khuyến nghị) Ở footer toàn site
- ✅ UI/UX **mobile-first**, dễ đọc, chữ rõ

---

## 4. TRANG CHỦ
**Nội dung hiển thị:**
- Tiêu đề: **Sàng lọc nguy cơ ADHD cho trẻ 7–12 tuổi – Dành cho ba mẹ**
- Mô tả ngắn: Bài test tham khảo giúp ba mẹ đánh giá nguy cơ ADHD và hiểu cách hỗ trợ con.
- CTA chính: **Bắt đầu bài test ADHD**
- Lưu ý nhỏ: “Nội dung mang tính tham khảo, không thay thế chẩn đoán y khoa.”

---

## 5. LÀM BÀI TEST ADHD

### 5.1. Màn hình giới thiệu + miễn trừ
Nội dung:
> Bài test này giúp ba mẹ **đánh giá mức độ nguy cơ ADHD** dựa trên hành vi của con trong **6 tháng gần đây**. Kết quả **không phải chẩn đoán y khoa**.

- Checkbox: “Tôi đã hiểu và đồng ý”
- Nút: “Bắt đầu” (chỉ enable khi tick)

### 5.2. UI câu hỏi
- Hiển thị **tiến độ** (ví dụ 5/24)
- 1 câu / 1 màn (khuyến nghị mobile) hoặc 2–3 câu / màn (nếu tối ưu)
- Nút: “Trước” / “Tiếp”
- Không cho submit nếu còn câu chưa trả lời

### 5.3. Thang trả lời (giữ cố định)
- Không bao giờ
- Thỉnh thoảng
- Thường xuyên
- Rất thường xuyên

### 5.4. Bộ câu hỏi chính thức (24 câu)
**Phần A – Khó tập trung (1–9)**
1. Con dễ mắc lỗi do làm vội hoặc không chú ý khi làm bài tập hay việc được giao.
2. Con gặp khó khăn trong việc tập trung vào bài học hoặc các hoạt động cần chú ý.
3. Khi ba mẹ hoặc người lớn nói chuyện trực tiếp, con có vẻ như không lắng nghe.
4. Con thường không làm theo hướng dẫn hoặc không hoàn thành việc đã bắt đầu.
5. Con gặp khó khăn trong việc sắp xếp công việc, bài tập hoặc thời gian.
6. Con né tránh hoặc không thích những việc cần suy nghĩ lâu (bài tập dài, đọc sách).
7. Con hay làm mất đồ dùng cần thiết cho việc học hoặc sinh hoạt.
8. Con rất dễ bị xao nhãng bởi tiếng ồn hoặc những thứ xung quanh.
9. Con hay quên các việc hằng ngày.

**Phần B – Hiếu động / Bốc đồng (10–18)**
10. Con hay cựa quậy tay chân hoặc không ngồi yên khi cần ngồi yên.
11. Con thường rời khỏi chỗ ngồi trong lớp học hoặc khi đang sinh hoạt.
12. Con chạy nhảy hoặc leo trèo quá mức trong những tình huống không phù hợp.
13. Con gặp khó khăn khi chơi hoặc làm việc một cách yên tĩnh.
14. Con luôn “chân tay không ngừng nghỉ”, như thể lúc nào cũng tràn năng lượng.
15. Con nói rất nhiều, ngay cả trong những tình huống cần yên lặng.
16. Con thường trả lời hoặc nói chen khi người khác chưa nói xong.
17. Con gặp khó khăn trong việc chờ đến lượt mình.
18. Con hay chen ngang hoặc làm gián đoạn khi người khác đang nói chuyện hoặc chơi.

**Phần C – Ảnh hưởng đến cuộc sống (19–24)**
19. Những hành vi trên ảnh hưởng đến việc học tập của con.
20. Những hành vi trên gây khó khăn trong mối quan hệ với bạn bè.
21. Những hành vi trên gây căng thẳng hoặc khó khăn trong gia đình.
22. Các biểu hiện này xảy ra ở nhiều môi trường khác nhau (nhà và trường).
23. Những biểu hiện này đã kéo dài từ 6 tháng trở lên.
24. Ba mẹ cảm thấy lo lắng vì những hành vi này của con.

---

## 6. TRANG KẾT QUẢ (CHỈ HIỂN THỊ 3 MỨC – KHÔNG HIỂN THỊ ĐIỂM)

### 6.1. Nguy cơ THẤP (🟢)
**Thông điệp chính:** Con bạn hiện có ít dấu hiệu liên quan đến ADHD.

**Diễn giải:** Các hành vi thường gặp ở trẻ ADHD chưa xuất hiện nhiều hoặc chưa ảnh hưởng rõ rệt đến việc học tập và sinh hoạt hằng ngày.

**Khuyến nghị:**
- Tìm hiểu thêm về ADHD để hiểu đúng và yên tâm hơn.
- Tiếp tục quan sát sự phát triển của con theo từng giai đoạn.
- Duy trì thói quen sinh hoạt, học tập và giao tiếp tích cực.

**Hành động gợi ý:** Tìm hiểu ADHD là gì · Xem video giải thích ADHD

---

### 6.2. Nguy cơ TRUNG BÌNH (🟡)
**Thông điệp chính:** Con bạn có một số dấu hiệu cần được theo dõi thêm.

**Diễn giải:** Một số hành vi liên quan đến khó tập trung hoặc hiếu động xuất hiện với tần suất nhất định và có thể ảnh hưởng nhẹ đến việc học hoặc sinh hoạt.

**Khuyến nghị:**
- Tìm hiểu kỹ hơn về ADHD.
- Áp dụng các cách hỗ trợ và điều chỉnh thói quen tại nhà.
- Theo dõi sự thay đổi của hành vi theo thời gian.

**Hành động gợi ý:** Dấu hiệu ADHD theo độ tuổi · Video chuyên gia · Hỗ trợ tại nhà

---

### 6.3. Nguy cơ CAO (🔴)
**Thông điệp chính:** Con bạn có nhiều dấu hiệu giống ADHD và cần được quan tâm nhiều hơn.

**Diễn giải:** Các hành vi liên quan đến khó tập trung, hiếu động hoặc bốc đồng xuất hiện khá thường xuyên và ảnh hưởng rõ hơn đến học tập hoặc cuộc sống hằng ngày.

**Khuyến nghị:**
- Tìm hiểu đầy đủ thông tin về ADHD.
- Áp dụng sớm các biện pháp hỗ trợ tại nhà và phối hợp với giáo viên.
- Cân nhắc trao đổi với chuyên gia giáo dục, tâm lý hoặc y tế nếu còn lo lắng.

**Hành động gợi ý:** ADHD là gì? · Khi nào cần gặp chuyên gia? · Hỗ trợ & can thiệp tại nhà

---

**Miễn trừ chung (bắt buộc hiển thị):** Kết quả chỉ mang tính tham khảo, không thay thế chẩn đoán y khoa.

---

## 7. KIẾN THỨC ADHD

### 7.1. ADHD là gì? (nội dung hiển thị)
ADHD là viết tắt của *Attention Deficit Hyperactivity Disorder*, thường gọi là **Rối loạn Tăng động Giảm chú ý**.

ADHD là một **dạng phát triển khác biệt của não bộ**, trong đó trẻ có thể gặp khó khăn với:
- Tập trung chú ý
- Kiểm soát hành vi bốc đồng
- Hoặc quá hiếu động so với các bạn cùng tuổi

Điều quan trọng cần hiểu: ADHD **không phải do trẻ hư**, **không phải lỗi của cha mẹ**, và **không phải khuyết điểm**. Trẻ ADHD hoàn toàn có thể phát triển tốt nếu được hiểu đúng và hỗ trợ phù hợp.

### 7.2. Video giải thích ADHD (đặt NGAY SAU 7.1)
- Nhúng video YouTube (iframe):
  - https://www.youtube.com/watch?v=_jcUnne8sf4&pp=ygUMYWRoZCBsw6AgZ8Os

### 7.3. Dấu hiệu ADHD theo độ tuổi (hiển thị dạng bullet)
- Khó tập trung
- Hiếu động
- Bốc đồng
- Ảnh hưởng học tập & quan hệ

### 7.4. Nguyên nhân & hiểu đúng – hiểu sai
- ADHD liên quan đến **cách não bộ vận hành**
- Không phải do nuôi dạy sai
- Không phải do “lười” hay “hư”

### 7.5. Khi nào cần gặp chuyên gia?
- Hành vi kéo dài
- Ảnh hưởng rõ đến học tập / quan hệ
- Ba mẹ cảm thấy lo lắng kéo dài

---

## 8. FAQ (05 CÂU) – THIẾT KẾ DẠNG XỔ XUỐNG

### 8.1. Yêu cầu UI (accordion)
- Mặc định: **tất cả đóng**
- Người dùng bấm vào câu hỏi để **mở** câu trả lời
- Bấm lần nữa để **thu gọn**
- Khuyến nghị: chỉ mở **1 câu tại 1 thời điểm** để tiết kiệm không gian

### 8.2. Nội dung FAQ (KHÔNG RÚT GỌN)

**1️⃣ Con tôi có thể chơi Lego hoặc chơi game hàng giờ, vậy sao lại nói con có ADHD?**

**Trả lời ngắn gọn:**  
ADHD không có nghĩa là trẻ không thể tập trung, mà là **khó tập trung theo yêu cầu**.

Ở trẻ ADHD, thường có sự khác biệt giữa:
- **Siêu tập trung:** Khi con rất hứng thú (chơi Lego, game, vẽ…), con có thể tập trung rất lâu.
- **Tập trung có chủ đích:** Khi con cần tập trung vào những việc ít thú vị hơn (nghe giảng, làm bài tập), con lại gặp nhiều khó khăn.

Não bộ ADHD hoạt động mạnh khi có hứng thú, sự mới lạ hoặc động lực rõ ràng, nhưng rất khó duy trì chú ý với những việc lặp lại, nhàm chán.  
Vì vậy, việc con có thể “siêu tập trung” **không loại trừ khả năng có ADHD**.

---

**2️⃣ ADHD có phải do con nghịch quá hay cha mẹ nuôi dạy chưa nghiêm?**

**Không. ADHD không phải lỗi của cha mẹ.**

ADHD liên quan đến sự khác biệt trong cách não bộ phát triển và vận hành, đặc biệt ở các vùng não giúp:
- Kiểm soát hành vi
- Lập kế hoạch
- Điều chỉnh cảm xúc
- Duy trì sự chú ý

Vì vậy, trẻ ADHD có thể:
- Khó kiềm chế hành động hoặc lời nói
- Hay quên, khó tổ chức
- Dễ cáu kỉnh hoặc bộc phát cảm xúc

Những điều này không phải vì trẻ cố tình, mà vì não bộ của trẻ cần **nhiều thời gian và sự hỗ trợ hơn** để phát triển các kỹ năng này.

---

**3️⃣ ADHD khác gì với lo âu, trầm cảm hay rối loạn học tập?**

ADHD đôi khi dễ bị nhầm lẫn với các vấn đề khác vì có một số biểu hiện giống nhau.

Ví dụ:
- Trẻ lo âu có thể mất tập trung vì quá lo lắng
- Trẻ trầm cảm có thể thờ ơ, thiếu động lực
- Trẻ có rối loạn học tập có thể gặp khó khăn trong việc đọc, viết hoặc toán

👉 **Điểm khác biệt là nguyên nhân gốc rễ.**  
ADHD là vấn đề về **khả năng điều hành của não bộ**, còn các vấn đề khác có nguyên nhân khác nhau.

Chính vì vậy, việc tự kết luận là không đủ, và nếu cần đánh giá chính xác, trẻ cần được chuyên gia thăm khám.

---

**4️⃣ ADHD có bắt buộc phải dùng thuốc không?**

**Không bắt buộc. Thuốc không phải lúc nào cũng là lựa chọn đầu tiên.**

Nhiều hướng dẫn quốc tế khuyến nghị cách tiếp cận **kết hợp nhiều phương pháp**, bao gồm:
- Hướng dẫn cha mẹ cách hỗ trợ con tại nhà
- Điều chỉnh môi trường học tập
- Rèn kỹ năng quản lý hành vi và cảm xúc
- Đảm bảo giấc ngủ, dinh dưỡng và vận động

Việc dùng thuốc chỉ nên được cân nhắc khi:
- Các biểu hiện ảnh hưởng nghiêm trọng đến cuộc sống của trẻ
- Và phải có chỉ định, theo dõi của bác sĩ chuyên khoa

---

**5️⃣ Trẻ có ADHD có thể học tốt và sống hạnh phúc không?**

**Câu trả lời là: HOÀN TOÀN CÓ THỂ.**

Nhiều trẻ ADHD có:
- Tư duy sáng tạo
- Năng lượng dồi dào
- Khả năng tập trung rất sâu khi làm điều mình yêu thích
- Cách nhìn vấn đề độc đáo

Khi trẻ được:
- Hiểu đúng
- Hỗ trợ phù hợp
- Đồng hành kiên nhẫn

👉 Trẻ ADHD có thể phát triển tốt, học tập hiệu quả và sống hạnh phúc theo cách riêng của mình.

---

**Lưu ý chung:** Nội dung FAQ chỉ mang tính tham khảo, không thay thế cho chẩn đoán hoặc tư vấn y khoa chuyên môn.

---

## 9. HỖ TRỢ & CAN THIỆP TẠI NHÀ (CẤU TRÚC TRANG)
- **Thói quen – môi trường** (các gạch đầu dòng ngắn, dễ đọc)
- **Kỹ năng quản lý hành vi**
- **Học tập – phối hợp với giáo viên**
- **Tài nguyên tham khảo** (liên kết đến mục 10)

> Lưu ý: Nội dung chi tiết của phần 9 có thể triển khai dạng danh sách/checklist. Không thêm nội dung chẩn đoán.

---

## 10. TÀI NGUYÊN THAM KHẢO (KÈM ĐẦY ĐỦ LINK)

### 10.1. Video YouTube
- https://www.youtube.com/watch?v=_jcUnne8sf4&pp=ygUMYWRoZCBsw6AgZ8Os

### 10.2. Kênh YouTube & TikTok chuyên gia
- Tú Anh – Happy Parenting: https://www.youtube.com/@TuAnhNguyen
- Dr Tracey Marks: https://www.youtube.com/@DrTraceyMarks
- Dr Amen: https://www.youtube.com/@AmenClinic
- Dr PSY Vietnam: https://www.youtube.com/@drpsyvietnam
- TikTok BS Nguyễn Trung Nghĩa (Vinmec): https://www.tiktok.com/@bs.nguyentrungnghia?lang=en

### 10.3. Nhóm cộng đồng ADHD
- ADHD tích cực Parenting: https://www.facebook.com/groups/1311002959884418
- ADHD tích cực: https://www.facebook.com/groups/adhdtichcuc/

### 10.4. Sách / Tài liệu
- Tài liệu về ADHD (IACAPAP 2020 – PDF): https://www.iacapap.org/_Resources/Persistent/c2568d324b4e4ab601f87bb35d4404bb21b893d4/D.1-ADHD-2020-vi-Final.pdf
- Sách: "Hiểu về ADHD" (New York Times Best Seller) *(link affiliate sẽ do chủ dự án cung cấp/điền sau nếu có)*
- Sách: "Nuôi dạy trẻ mắc chứng rối loạn giảm chú ý ADHD" *(link affiliate sẽ do chủ dự án cung cấp/điền sau nếu có)*

### 10.5. Địa chỉ thăm khám & hỗ trợ chuyên môn
- Viện tâm lý Việt Pháp: https://tamlyvietphap.vn/
- Công ty nghiên cứu & tham vấn tâm lý Family: https://tamlyfamily.com/
- TS. BS Trần Thị Hồng Thu (Facebook): https://www.facebook.com/profile.php?id=61573043311263
- Psychologist Trần Nhật Minh: https://adhdtichcuc.com/

---

## PHỤ LỤC: CHECKLIST BÀN GIAO DEV (TÓM TẮT)
- [ ] Đúng sitemap & điều hướng
- [ ] Mobile-first / responsive
- [ ] Bài test 24 câu đúng nội dung & thứ tự
- [ ] Không lưu dữ liệu / không login
- [ ] Kết quả: chỉ 3 mức, không hiển thị điểm
- [ ] Miễn trừ y khoa hiển thị ở: bắt đầu bài test, kết quả, footer
- [ ] FAQ dạng accordion (bấm mở/đóng)
- [ ] Video đặt ngay sau “ADHD là gì?”
- [ ] Tài nguyên tham khảo có đầy đủ link như mục 10

**Kết thúc tài liệu.**

