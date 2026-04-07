import dynamic from "next/dynamic";
import "./_styles/globals.css";
import { Josefin_Sans } from "next/font/google";

const ForceHeroOnReload = dynamic(
  () => import("../widgets/ui/ForceHeroOnReload"),
  { ssr: false },
);
const Header = dynamic(
  () => import("../widgets/landing/components/header/Header"),
  {
    ssr: false,
  },
);
const ScrollToTop = dynamic(
  () => import("../widgets/landing/components/ScrollToTop"),
  {
    ssr: false,
  },
);
const Footer = dynamic(
  () => import("../widgets/landing/components/footer/Footer"),
  {
    ssr: false,
  },
);

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export const metadata = {
  title: {
    template: "%s | Blida 1 University",
    default: "Blida 1 University",
  },
  description: "Blida 1 University official event platform",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <head>
        <meta name="theme-color" content="#185acc" />
      </head>
      <body
        className={[
          josefin.className,
          "antialiased min-h-svh overflow-x-hidden flex flex-col",
          "bg-[var(--primary-0)] text-[var(--primary-700)]",
          "selection:bg-[rgba(24,90,204,0.35)] selection:text-[var(--color-primary-800)]",
        ].join(" ")}
      >
        {" "}
        <div
          id="app"
          className="
            relative isolate
            max-w-[100dvw] overflow-x-clip
            min-h-inherit flex flex-col
          "
        >
          <Header />
          <main className="flex-1">
            <ForceHeroOnReload heroSelector="#hero" />
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
