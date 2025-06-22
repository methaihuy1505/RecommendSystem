# 📚 Hệ Thống Hỗ Trợ Học Tập và Gợi Ý Giảng Viên

## 🎯 Giới thiệu đề tài

Đề tài này hướng tới việc phát triển một **ứng dụng hỗ trợ sinh viên xây dựng lịch trình học tập hợp lý** và **tìm kiếm giảng viên phù hợp**, từ đó cải thiện hiệu quả học tập và hỗ trợ sinh viên hoàn thành chương trình học đúng tiến độ.

Nghiên cứu này nhằm giải quyết khó khăn trong việc lựa chọn giảng viên phù hợp – một yếu tố ảnh hưởng trực tiếp đến kết quả học tập. Bằng cách hỗ trợ sinh viên ra quyết định đúng đắn, hệ thống góp phần:
- Giảm tỷ lệ nợ môn
- Cải thiện trải nghiệm học tập
- Hạn chế tình trạng bỏ học

---

## 🧩 Kiến trúc hệ thống

### 1. Giao diện người dùng (Frontend)
- Sinh viên có thể:
  - Đăng nhập
  - Xem lộ trình học
  - Lựa chọn giảng viên
  - Gửi phản hồi
- **Công nghệ sử dụng:**
  - Web: HTML, CSS, ReactJS
  - Mobile: React Native

---

### 2. API xử lý trung gian (Backend)
- Xử lý logic nghiệp vụ và gọi mô-đun học máy
- Lưu trữ, truy xuất dữ liệu từ cơ sở dữ liệu
- **Công nghệ sử dụng:** ASP.NET Core API
---

### 3. Engine khuyến nghị (Machine Learning)
Áp dụng 3 phương pháp gợi ý:

- **📌 Content-Based Filtering:**
  - Phân tích hồ sơ học tập của sinh viên
  - Gợi ý môn học tương tự các môn đã học tốt

- **📌 Collaborative Filtering:**
  - So sánh với sinh viên có hành vi học tập tương tự
  - Gợi ý giảng viên/môn học được đánh giá cao

- **📌 Hybrid Filtering:**
  - Kết hợp cả hai phương pháp để tối ưu hoá kết quả

---

### 4. Cơ sở dữ liệu
Lưu trữ thông tin:
- Người dùng
- Bảng điểm
- Phản hồi
- Môn học
- Kết quả khuyến nghị

**Sử dụng:** MySQL

---

### 5. Dữ liệu đầu vào
- Hệ thống quản lý học tập LMS
- Bảng điểm sinh viên
- Kết quả khảo sát Google Form
- Hành vi học tập (lịch sử truy cập, thời gian học)

---

## 🔄 Luồng xử lý dữ liệu

1. Sinh viên đăng nhập và cung cấp thông tin học tập
2. Dữ liệu được lưu vào cơ sở dữ liệu trung tâm
3. Backend gọi module khuyến nghị để xử lý dữ liệu và đưa ra gợi ý
4. Kết quả được hiển thị trên giao diện:
   - Gợi ý giảng viên
   - Gợi ý môn học/tài liệu
5. Phản hồi từ sinh viên được lưu lại để cải tiến mô hình khuyến nghị

---

## 🧠 Thuật toán khuyến nghị

Hệ thống sử dụng các kỹ thuật:
- **Content-Based Filtering (CBF)**
- **Collaborative Filtering (CF)**
- **Hybrid Filtering**

Sự kết hợp này nhằm tăng tính cá nhân hóa và độ chính xác trong gợi ý, giúp sinh viên lựa chọn phương án học tập tối ưu.

---

## 👨‍💻 Công nghệ sử dụng

| Thành phần | Công nghệ |
|------------|-----------|
| Frontend Web | ReactJS |
| Mobile App | React Native |
| Backend API | .NET Core |
| Machine Learning | Python (Logistic Regression, Random Forest, SVM, kNN) |
| Database | MySQL |
| Data Collection | Google Form, LMS, Tracking behavior |

---

## 📬 Liên hệ

> Nếu bạn có bất kỳ góp ý hay câu hỏi nào, hãy mở issue hoặc liên hệ qua email nhóm nghiên cứu.

---

