import { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SubmitForm } from "@/app/submit/SubmitForm";

export const metadata: Metadata = {
  title: "Submit a Skill",
  description:
    "Submit an AI agent skill for future review in the SkillRune registry.",
};

export default function SubmitPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="mb-9">
          <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
            Submit
          </p>
          <h1 className="mt-3 font-serif text-5xl font-medium tracking-normal text-[var(--near-black)] sm:text-6xl">
            Share a reusable agent capability.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--olive)]">
            A good SkillRune submission makes the package inspectable before
            anyone installs it: what it does, what it touches, which agents it
            supports, and where the sharp edges live.
          </p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--ivory)] p-5 sm:p-7">
          <SubmitForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
