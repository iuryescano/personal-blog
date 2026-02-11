import { Geist, Geist_Mono} from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geistsans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geistmono",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
    </div>
  );
}
