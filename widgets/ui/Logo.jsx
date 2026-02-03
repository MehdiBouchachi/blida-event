import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 min-w-0">
      <Image
        src={logo}
        width={80}
        height={80}
        sizes="(min-width: 1024px) 56px, (min-width: 768px) 54px, 52px"
        className="
          rounded-full
          flex-shrink-0
          w-[52px] h-[52px]
          sm:w-[54px] sm:h-[54px]
          lg:w-14 lg:h-14
        "
        alt="University of Blida 1 logo"
        priority
      />

      {/* TEXT BLOCK */}
      <div className="leading-tight min-w-0">
        {/* UNIVERSITY NAME */}
        <div
          className="
            font-semibold
            tracking-tight
            text-[var(--text-primary)]
            whitespace-nowrap
            text-[1.05rem]
            sm:text-[1.1rem]
            lg:text-lg
          "
        >
          University of Blida 1
        </div>

        {/* TAGLINE */}
        <div
          className="
           text-[1.05rem]
            sm:text-[1.1rem]
            lg:text-lg
            font-semibold
            text-[var(--text-secondary)]
            whitespace-nowrap
          "
        >
          Leading 4.0 Transformation
        </div>
      </div>
    </div>
  );
}
