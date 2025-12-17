import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sàng lọc nguy cơ ADHD cho trẻ 7-12 tuổi | ADHDCheck',
  description: 'Bài test tham khảo giúp ba mẹ đánh giá nguy cơ ADHD và hiểu cách hỗ trợ con. Dành cho trẻ 7-12 tuổi.',
  keywords: 'ADHD, tăng động giảm chú ý, sàng lọc ADHD, trẻ em, test ADHD',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-cream min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
