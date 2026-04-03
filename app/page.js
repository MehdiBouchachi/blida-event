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

const RegistrationSection = dynamic(
  () => import("../widgets/landing/sections/RegistrationSection"),
  { ssr: true },
);

export default function Page() {
  return (
    <main>
      <HeroSection />
      <WhatYouWillLearnSection />

      <ResourceCard />
      <Programsection />
      <WorkshopDeliverablesSection />
      <RegistrationSection />
    </main>
  );
}
