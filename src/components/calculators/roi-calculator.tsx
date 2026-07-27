"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { formatCurrency, formatNumber } from "@/lib/utils";
import { cn } from "@/lib/utils";

const RECOVERY_RATE = 0.7;

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
}) {
  const id = React.useId();
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="font-mono text-sm font-semibold text-primary">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-[var(--primary)]"
      />
    </div>
  );
}

export function RoiCalculator({ className }: { className?: string }) {
  const [missedPerMonth, setMissedPerMonth] = React.useState(60);
  const [avgValue, setAvgValue] = React.useState(350);
  const [closeRate, setCloseRate] = React.useState(35);

  const recoveredLeads = missedPerMonth * RECOVERY_RATE;
  const monthlyRevenue = recoveredLeads * (closeRate / 100) * avgValue;
  const annualRevenue = monthlyRevenue * 12;

  const chartData = [
    { name: "Before Mirflow", revenue: 0 },
    { name: "With Mirflow", revenue: Math.round(monthlyRevenue) },
  ];

  return (
    <div
      className={cn(
        "grid gap-8 border border-border bg-card p-5 sm:p-8 lg:grid-cols-2 lg:p-10",
        className
      )}
    >
      <div className="flex flex-col gap-8">
        <Slider
          label="Missed calls or inquiries / month"
          value={missedPerMonth}
          onChange={setMissedPerMonth}
          min={10}
          max={300}
          step={5}
          format={(v) => formatNumber(v)}
        />
        <Slider
          label="Average value per booked job"
          value={avgValue}
          onChange={setAvgValue}
          min={50}
          max={5000}
          step={50}
          format={(v) => formatCurrency(v)}
        />
        <Slider
          label="Close rate on answered inquiries"
          value={closeRate}
          onChange={setCloseRate}
          min={5}
          max={80}
          step={1}
          format={(v) => `${v}%`}
        />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Estimate assumes Mirflow recovers {Math.round(RECOVERY_RATE * 100)}% of
          currently missed inquiries at your existing close rate. Actual results
          vary by industry and implementation.
        </p>
      </div>

      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-secondary/40 p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Recovered revenue / month
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-foreground">
              {formatCurrency(Math.round(monthlyRevenue))}
            </p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Recovered revenue / year
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-primary">
              {formatCurrency(Math.round(annualRevenue))}
            </p>
          </div>
        </div>

        <div className="mt-6 h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v) => `$${v / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: "var(--accent)" }}
                contentStyle={{
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 12,
                }}
                formatter={(value) => formatCurrency(Number(value))}
              />
              <Bar dataKey="revenue" fill="var(--primary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
