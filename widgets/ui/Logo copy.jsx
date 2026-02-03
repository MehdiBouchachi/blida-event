import Image from "next/image";
import logo from "../../public/logo.png";

export default function Logo() {
  return (
    <div className="group flex items-center gap-4 cursor-pointer select-none">
      {/* LOGO CONTAINER */}
      <div
        className="
          relative
          w-[64px] h-[64px]
          rounded-full
          bg-white
          ring-2 ring-blue-700/20
          shadow-md
          transition-all duration-300
          group-hover:ring-blue-600/50
          group-hover:shadow-lg
        "
      >
        <Image
          src={logo}
          alt="University of Blida 1"
          fill
          className="object-contain p-2"
          priority
        />
      </div>

      {/* TEXT */}
      <div className="leading-[1.15]">
        {/* UNIVERSITY NAME */}
        <div
          className="
            text-[1.15rem]
            font-bold
            tracking-tight
            text-slate-900
            transition-colors
          "
        >
          University of Blida 1
        </div>

        {/* TAGLINE – MORE VISIBLE */}
        <div
          className="
            mt-[2px]
            text-[0.95rem]
            font-semibold
            text-slate-700
            tracking-normal
          "
        >
          Leading 4.0 Transformation
        </div>
      </div>
    </div>
  );
}
