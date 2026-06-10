"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Send, Trash2, XCircle } from "lucide-react";
import { validateSubmittedSkill } from "@/lib/skill-package";
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
type SubmissionStatus = "pending" | "approved" | "rejected";
type StoredSubmission = FormValues & {
  id: string;
  submittedAt: string;
  status: SubmissionStatus;
};

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
  const [submissions, setSubmissions] = useState<StoredSubmission[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const stored = window.localStorage.getItem("skillrune.submissions");
      return stored ? (JSON.parse(stored) as StoredSubmission[]) : [];
    } catch {
      return [];
    }
  });

  const missing = useMemo(
    () => requiredFields.filter((field) => values[field.key].trim().length === 0),
    [values],
  );
  const validation = validateSubmittedSkill(values);

  function saveSubmissions(next: StoredSubmission[]) {
    setSubmissions(next);
    window.localStorage.setItem("skillrune.submissions", JSON.stringify(next));
  }

  function update(key: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (!validation.ok) {
      setSubmitted(false);
      return;
    }
    const submission: StoredSubmission = {
      ...values,
      id: `${Date.now()}-${values.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      submittedAt: new Date().toISOString(),
      status: "pending",
    };
    saveSubmissions([submission, ...submissions]);
    setSubmitted(true);
    setValues(initialValues);
    setTouched(false);
  }

  function setStatus(id: string, status: SubmissionStatus) {
    saveSubmissions(
      submissions.map((submission) =>
        submission.id === id ? { ...submission, status } : submission,
      ),
    );
  }

  function removeSubmission(id: string) {
    saveSubmissions(submissions.filter((submission) => submission.id !== id));
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
                Saved to this browser&apos;s local review queue. Backend storage can
                replace this boundary later without changing the review states.
              </p>
            </div>
          </div>
        </div>
      )}

      {touched && !validation.ok && (
        <div className="rounded-xl border border-[#dec5b8] bg-[#fbf1eb] p-5">
          <div className="flex items-start gap-3">
            <XCircle className="mt-0.5 h-5 w-5 text-[#8a3b24]" />
            <div>
              <h2 className="font-serif text-xl font-medium text-[var(--near-black)]">
                Finish the required fields
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                {missing.length > 0
                  ? `Missing: ${missing.map((field) => field.label).join(", ")}.`
                  : "GitHub URL must look like https://github.com/owner/repo."}
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
          Submissions save locally in this browser with review states. Real DB
          persistence can replace local storage at launch.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 font-serif text-sm font-medium text-[var(--ivory)] transition hover:bg-[var(--brand-light)]"
        >
          <Send className="h-4 w-4" />
          Submit for review
        </button>
      </div>

      <div className="border-t border-[var(--border-soft)] pt-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-ui text-xs uppercase tracking-[0.08em] text-[var(--brand)]">
              Local review queue
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--near-black)]">
              Submitted → pending → approved/rejected
            </h2>
          </div>
          <p className="font-ui text-sm text-[var(--stone)]">
            {submissions.length} local submissions
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="mt-5 rounded-lg border border-dashed border-[var(--line)] bg-[var(--parchment)] p-6 text-sm leading-6 text-[var(--olive)]">
            No local submissions yet. Submit a skill above to see review state.
          </div>
        ) : (
          <div className="mt-5 grid gap-3">
            {submissions.map((submission) => (
              <article
                key={submission.id}
                className="rounded-lg border border-[var(--border)] bg-[var(--parchment)] p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-xl font-medium text-[var(--near-black)]">
                        {submission.name}
                      </h3>
                      <span
                        className={`rounded-full px-2.5 py-1 font-ui text-xs ${
                          submission.status === "approved"
                            ? "bg-[#f0f4ea] text-[#446b36]"
                            : submission.status === "rejected"
                              ? "bg-[#fbf1eb] text-[#8a3b24]"
                              : "bg-[var(--brand-tint)] text-[var(--brand)]"
                        }`}
                      >
                        {submission.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--olive)]">
                      {submission.shortDescription}
                    </p>
                    <p className="mt-2 font-ui text-xs text-[var(--stone)]">
                      {submission.category} · {submission.license} ·{" "}
                      {new Date(submission.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setStatus(submission.id, "approved")}
                      className="rounded-full border border-[#c8d8c2] px-3 py-1.5 font-ui text-xs text-[#446b36]"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus(submission.id, "rejected")}
                      className="rounded-full border border-[#dec5b8] px-3 py-1.5 font-ui text-xs text-[#8a3b24]"
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      onClick={() => removeSubmission(submission.id)}
                      className="inline-flex items-center gap-1 rounded-full border border-[var(--border-soft)] px-3 py-1.5 font-ui text-xs text-[var(--stone)]"
                    >
                      <Trash2 className="h-3 w-3" />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
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
