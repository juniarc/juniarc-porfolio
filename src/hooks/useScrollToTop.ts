import { useLenis } from "lenis/react";

export function useScrollToTop() {
  const lenis = useLenis();

  if (lenis) {
    lenis?.scrollTo(0, { immediate: true });
  }
}
