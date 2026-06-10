"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send, XCircle } from "lucide-react";
import { categories } from "@/lib/skills";

const initialValues = {
  name: "",
  shortDescription: "",
  category: categories[0],
  tags: "",
  agents: "",
  githubUrl: "",
  docsUrl: "",
  license: "MIT",
  author: "",
  contact: "",
  safetyNotes: "",
};

type FormValues = typeof initialValues;

const requiredFields: { key: keyof FormValues; label: string }[] = [
  { key: "name", label: "Skill name" },
  { key: "shortDescription", label: "Short description" },
  { key: "tags", label: "Tags" },
  { key: "agents", label: "Supported agents/models" },
  { key: "githubUrl", label: "GitHub URL" },
  { key: "license", label: "License" },
  { key: "author", label: "Author name" },
  { key: "contact", label: "Author contact" },
  { key: "safetyNotes", label: "Safety notes" },
];

export function SubmitForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const missing = useMemo(
    () => requiredFields.filter((field) => values[field.key].trim().length === 0),
    [values],
  );

  function update(key: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (missing.length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
  }

  return (
    <form onSubmit={submit} className="grid gap-6">
      {submitted && (
        <div className="rounded-xl border border-[#c8d8c2] bg-[#f0f4ea] p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#446b36]" />
            <div>
              <h2 className="font-serif text-xl font-medium text-[var(--near-black)]">
                Submission queued for review
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                The MVP does not send this to a backend yet. This confirms the
                client-side review flow and success state are working.
              </p>
            </div>
          </div>
        </div>
      )}

      {touched && missing.length > 0 && (
        <div className="rounded-xl border border-[#dec5b8] bg-[#fbf1eb] p-5">
          <div className="flex items-start gap-3">
            <XCircle className="mt-0.5 h-5 w-5 text-[#8a3b24]" />
            <div>
              <h2 className="font-serif text-xl font-medium text-[var(--near-black)]">
                Finish the required fields
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                Missing: {missing.map((field) => field.label).join(", ")}.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Skill name" required>
          <input
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Repo Cartographer"
            className="field-control"
          />
        </Field>

        <Field label="Category" required>
          <select
            value={values.category}
            onChange={(event) => update("category", event.target.value)}
            className="field-control"
          >
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </Field>

        <Field label="Short description" required className="md:col-span-2">
          <textarea
            value={values.shortDescription}
            onChange={(event) => update("shortDescription", event.target.value)}
            placeholder="Helps an agent map and explain a codebase before editing."
            className="field-control min-h-28"
          />
        </Field>

        <Field label="Tags" required>
          <input
            value={values.tags}
            onChange={(event) => update("tags", event.target.value)}
            placeholder="coding, architecture, review"
            className="field-control"
          />
        </Field>

        <Field label="Supported agents/models" required>
          <input
            value={values.agents}
            onChange={(event) => update("agents", event.target.value)}
            placeholder="Codex, Claude Desktop, CLI agents"
            className="field-control"
          />
        </Field>

        <Field label="GitHub URL" required>
          <input
            type="url"
            value={values.githubUrl}
            onChange={(event) => update("githubUrl", event.target.value)}
            placeholder="https://github.com/example/skill"
            className="field-control"
          />
        </Field>

        <Field label="Documentation URL">
          <input
            type="url"
            value={values.docsUrl}
            onChange={(event) => update("docsUrl", event.target.value)}
            placeholder="https://docs.example.com/skill"
            className="field-control"
          />
        </Field>

        <Field label="License" required>
          <input
            value={values.license}
            onChange={(event) => update("license", event.target.value)}
            placeholder="MIT"
            className="field-control"
          />
        </Field>

        <Field label="Author name" required>
          <input
            value={values.author}
            onChange={(event) => update("author", event.target.value)}
            placeholder="Mira K."
            className="field-control"
          />
        </Field>

        <Field label="Author contact" required>
          <input
            value={values.contact}
            onChange={(event) => update("contact", event.target.value)}
            placeholder="mira@example.com"
            className="field-control"
          />
        </Field>

        <Field label="Safety notes" required className="md:col-span-2">
          <textarea
            value={values.safetyNotes}
            onChange={(event) => update("safetyNotes", event.target.value)}
            placeholder="Describe network access, file writes, secret handling, destructive commands, and review requirements."
            className="field-control min-h-32"
          />
        </Field>
      </div>

      <div className="flex flex-col gap-3 border-t border-[var(--border-soft)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-6 text-[var(--olive)]">
          Real submissions will be reviewed before listing. For this MVP, the form
          validates locally and shows the future review state.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 font-serif text-sm font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
        >
          <Send className="h-4 w-4" />
          Submit for review
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`grid gap-2 ${className}`}>
      <span className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--stone)]">
        {label}
        {required ? <span className="text-[var(--brand)]"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
