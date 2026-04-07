import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../widgets/landing/sections/HeroSection"),
  { ssr: true },
);
const ResourceCard = dynamic(
  () => import("../widgets/landing/sections/ResourceCard"),
  { ssr: true },
);
/* const MovingNoteSection = dynamic(
  () => import("../widgets/landing/sections/MovingNoteSection"),
  {
    ssr: true,
  },
); */
const WhatYouWillLearnSection = dynamic(
  () => import("../widgets/landing/sections/WhatYouWillLearnSection"),
  {
    ssr: true,
  },
);
const Programsection = dynamic(
  () => import("../widgets/landing/sections/Programsection"),
  {
    ssr: true,
  },
);
const WorkshopDeliverablesSection = dynamic(
  () => import("../widgets/landing/sections/WorkshopDeliverablesSection"),
  {
    ssr: true,
  },
);
const CountdownSection = dynamic(
  () => import("../widgets/landing/sections/CountdownSection"),
  { ssr: true },
);
const RegistrationSection = dynamic(
  () => import("../widgets/landing/sections/RegistrationSection"),
  { ssr: true },
);
export const metadata = {
  title: "Pedagogical AI & Online Course Certification Day",

  description:
    "Academic workshop organized by Blida 1 University focusing on pedagogical AI, Moodle course design, and national certification standards. Designed for faculty members, doctoral students, and educators.",

  keywords: [
    "Blida 1 University",
    "Pedagogical AI",
    "Online course certification",
    "Moodle training",
    "Distance learning Algeria",
    "University 4.0",
    "E-learning certification",
    "AI in education",
  ],

  openGraph: {
    title:
      "Pedagogical AI & Online Course Certification Day | Blida 1 University",
    description:
      "Explore AI-powered pedagogy, Moodle course design, and certification frameworks in this academic workshop at Blida 1 University.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pedagogical AI & Online Course Certification Day",
    description:
      "Academic workshop on AI in pedagogy and online course certification.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function Page() {
  return (
    <main>
      <HeroSection />
      <CountdownSection />
      <WhatYouWillLearnSection />

      <ResourceCard />
      <Programsection />
      <WorkshopDeliverablesSection />
      <RegistrationSection />
    </main>
  );
}
