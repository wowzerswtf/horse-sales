import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Your Horse — Free Horse Matching Quiz",
  description:
    "Answer 4 quick questions and we'll match you with cutting, reining, cow horse, team penning & sorting horses that fit your discipline, budget, and experience level. Free market report included.",
};

// Tunnel layout — no header/footer distractions (conversion bible: tunnel checkout)
export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
