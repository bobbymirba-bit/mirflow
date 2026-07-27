"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type QuizOption = {
  label: string;
  points: number;
};

type QuizQuestion = {
  question: string;
  options: QuizOption[];
};

const questions: QuizQuestion[] = [
  {
    question: "How many inbound calls, forms, or messages does your business get per week?",
    options: [
      { label: "Fewer than 20", points: 1 },
      { label: "20–75", points: 2 },
      { label: "75–200", points: 3 },
      { label: "More than 200", points: 4 },
    ],
  },
  {
    question: "How much of your team's time goes to repetitive tasks (scheduling, follow-ups, data entry)?",
    options: [
      { label: "Barely any", points: 1 },
      { label: "A few hours a week", points: 2 },
      { label: "Several hours a day", points: 3 },
      { label: "It's most of the job", points: 4 },
    ],
  },
  {
    question: "Do calls or messages go unanswered outside business hours?",
    options: [
      { label: "Rarely happens", points: 1 },
      { label: "Occasionally", points: 2 },
      { label: "Most nights and weekends", points: 3 },
      { label: "Constantly — we have no after-hours coverage", points: 4 },
    ],
  },
  {
    question: "How many separate tools or systems does your team juggle that don't talk to each other?",
    options: [
      { label: "One or two", points: 1 },
      { label: "Three or four", points: 2 },
      { label: "Five or more", points: 3 },
      { label: "We've lost count", points: 4 },
    ],
  },
  {
    question: "How soon do you want to see measurable results?",
    options: [
      { label: "Just exploring for now", points: 1 },
      { label: "Within the next quarter", points: 2 },
      { label: "Within the next month", points: 3 },
      { label: "As soon as possible", points: 4 },
    ],
  },
];

const maxScore = questions.length * 4;

function getResult(score: number) {
  const percent = Math.round((score / maxScore) * 100);
  if (percent >= 75) {
    return {
      tier: "High-impact fit",
      description:
        "Your business has significant volume, real manual overhead, and clear revenue at risk. This is exactly the profile where Mirflow produces the fastest, most visible ROI.",
      percent,
    };
  }
  if (percent >= 50) {
    return {
      tier: "Strong fit",
      description:
        "You have enough volume and manual workload that automation would meaningfully reduce cost and recover missed revenue. Most businesses at this stage see payback within the first few months.",
      percent,
    };
  }
  return {
    tier: "Early stage",
    description:
      "Automation could still help, particularly around after-hours coverage or one specific bottleneck, but the impact will be more targeted than transformational at your current volume.",
    percent,
  };
}

export function ReadinessQuiz({ className }: { className?: string }) {
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );

  const isComplete = answers.every((answer) => answer !== null);
  const score = answers.reduce((sum: number, answer) => sum + (answer ?? 0), 0);
  const result = isComplete ? getResult(score) : null;

  function selectAnswer(questionIndex: number, points: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = points;
      return next;
    });
  }

  function reset() {
    setAnswers(Array(questions.length).fill(null));
  }

  if (result) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-border bg-card p-8 text-center lg:p-12",
          className
        )}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {result.tier}
        </span>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          {result.description}
        </p>

        <div
          className="mx-auto mt-8 h-2 max-w-md overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-label="Readiness score"
          aria-valuenow={result.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-[var(--chart-2,var(--primary))] transition-all duration-700"
            style={{ width: `${result.percent}%` }}
          />
        </div>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Readiness score: {result.percent}/100
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gradient" size="lg">
            <Link href="/book-a-call">
              Book a call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="lg" onClick={reset}>
            <RotateCcw className="h-4 w-4" />
            Retake quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card p-8 lg:p-10",
        className
      )}
    >
      <div className="flex flex-col gap-10">
        {questions.map((q, questionIndex) => (
          <div key={q.question}>
            <p className="text-sm font-medium text-foreground">
              <span className="mr-2 font-mono text-primary">
                {String(questionIndex + 1).padStart(2, "0")}
              </span>
              {q.question}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {q.options.map((option) => {
                const isSelected = answers[questionIndex] === option.points;
                return (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => selectAnswer(questionIndex, option.points)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-muted-foreground" aria-live="polite">
        {answers.filter((a) => a !== null).length} of {questions.length} answered
      </p>
    </div>
  );
}
