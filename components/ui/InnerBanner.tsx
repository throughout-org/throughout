import type { ReactNode } from "react";
import BannerBadge from "@/components/ui/BannerBadge";
import AntigravityParticles from "@/components/ui/AntigravityParticles";

interface InnerBannerProps {
  badgeText: string;
  title: ReactNode;
  description: ReactNode;
  cta?: ReactNode | null;
  isBackgroundColored?: boolean;
  fullScreen?: boolean;
}

function Content({ badgeText, title, description, cta }: Pick<InnerBannerProps, "badgeText" | "title" | "description" | "cta">) {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-6"><BannerBadge text={badgeText} /></div>
      <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="block leading-tight text-slate-950">{title}</span>
      </h1>
      <div className="mx-auto max-w-3xl text-base leading-7 text-slate-600 sm:text-lg lg:text-xl">{description}</div>
      {cta && <div className="mt-8">{cta}</div>}
    </div>
  );
}

export default function InnerBanner({
  badgeText,
  title,
  description,
  cta = null,
  isBackgroundColored = true,
  fullScreen = false,
}: InnerBannerProps) {
  if (fullScreen) {
    return (
      <div className="relative flex min-h-screen items-stretch isolate">
        <AntigravityParticles />
        <div className="relative z-10 flex w-full items-center justify-center pt-20 sm:pt-24 lg:pt-28">
          <section className="w-full py-16 sm:py-20">
            <Content badgeText={badgeText} title={title} description={description} cta={cta} />
          </section>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {isBackgroundColored && <AntigravityParticles />}
      <Content badgeText={badgeText} title={title} description={description} cta={cta} />
    </section>
  );
}
