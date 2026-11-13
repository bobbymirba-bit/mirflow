"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { rememberUtms } from "@/lib/utm";

/** Stores campaign parameters before a later page drops them from the address. */
export function UtmCapture() {
  const search = useSearchParams();

  useEffect(() => {
    rememberUtms(search);
  }, [search]);

  return null;
}
