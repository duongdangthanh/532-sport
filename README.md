# Mini Game 532 Sports

Website HTML/CSS thuần. Không cần Node.js, npm, build, biến môi trường, backend hoặc tài khoản Sites. Menu, câu hỏi thường gặp và tải QR hoạt động bằng HTML gốc, không cần JavaScript.

## Đưa lên Git và kết nối Netlify

1. Đưa nội dung thư mục `website` này lên repository Git của bạn, gồm `netlify.toml`, `README.md`, `.gitignore` và thư mục `public`.
2. Trong Netlify, chọn **Add new project → Import an existing project**, kết nối nhà cung cấp Git và chọn repository.
3. Netlify đọc sẵn `netlify.toml`: **Build command để trống**, **Publish directory: public**, **Base directory để trống**. Không chọn framework hoặc thêm plugin.
4. Chọn **Deploy**. Những lần push tiếp theo lên nhánh triển khai sẽ tự cập nhật website.

Nếu đưa cả thư mục `532-sports` lên Git, dùng `netlify.toml` ở thư mục gốc đã được cung cấp: publish directory là `website/public`. Thư mục `website` hiện có lịch sử Git riêng; không thêm nó dưới dạng submodule nếu bạn muốn dùng cách này.

Nếu dùng lại một project Netlify từng chạy framework, xóa build command, base directory và plugin framework cũ trong phần cấu hình build; cấu hình trên dành cho site tĩnh.

## Chỉnh sửa

- `public/index.html`: nội dung, thể thức, giải thưởng, các liên kết và mã QR.
- `public/styles.css`: màu sắc, bố cục và giao diện điện thoại.
- `public/assets/`: logo, ảnh sân và mã QR Zalo.

Đường dẫn tài nguyên là tương đối, có thể mở trực tiếp `public/index.html` để xem. Có thể kéo thả riêng thư mục `public` vào Netlify Drop để triển khai thủ công.

Không đưa `node_modules`, `dist`, `.wrangler`, `.vinext` hoặc các tệp cache cũ lên Git. Chúng không được sử dụng và đã được bỏ qua bởi `.gitignore`.

Tài liệu Netlify: https://docs.netlify.com/build/configure-builds/file-based-configuration/
