import { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2
      className="relative inline-block text-4xl md:text-5xl font-semibold mb-8
      after:content-[''] after:block after:h-1 after:w-20
      after:bg-(--emerald-dark) after:rounded-full after:mt-4"
    >
      {children}
    </h2>
  );
}
