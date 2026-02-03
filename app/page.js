import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../widgets/landing/sections/HeroSection"),
  { ssr: true },
);
const StrategicSection = dynamic(
  () => import("../widgets/landing/sections/StrategicSection"),
  { ssr: true },
);

const UniversityTransitionSection = dynamic(
  () => import("../widgets/landing/sections/UniversityTransitionSection"),
  {
    ssr: true,
  },
);
const FeaturedPresentations = dynamic(
  () => import("../widgets/landing/sections/FeaturedPresentations"),
  {
    ssr: true,
  },
);
const EventGoalsSection = dynamic(
  () => import("../widgets/landing/sections/EventGoalsSection"),
  {
    ssr: true,
  },
);
const ScheduleSection = dynamic(
  () => import("../widgets/landing/sections/ScheduleSection"),
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
      <UniversityTransitionSection />

      <StrategicSection />
      <FeaturedPresentations />
      <EventGoalsSection />
      <ScheduleSection />
      <RegistrationSection />
    </main>
  );
}

//FeaturedPresentations
