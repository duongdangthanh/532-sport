import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Mini Game Ráp Kèo Đồng Đội | 532 Sports',
  description: 'Mini Game Pickleball thường kỳ tại 532 Sports. Khám phá thể thức Ráp Kèo Đồng Đội Season 1: tối đa 4 đội, 3 nội dung thi đấu, lệ phí 100.000đ/người và giải thưởng hấp dẫn.',
  icons: { icon: '/assets/logo-532.png' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
