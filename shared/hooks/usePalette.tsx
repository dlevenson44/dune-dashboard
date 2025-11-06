import { useEffect, useState } from "react";

interface ColorPalette {
  primary: string;
  caution: string;
  danger: string;
  warning: string;
  success: string;
  info: string;
  muted: string;
  darkMuted: string;
  background: string;
  card: string;
  border: string;
}

const initialState = {
  primary: '',
  caution: '',
  danger: '',
  warning: '',
  success: '',
  info: '',
  muted: '',
  darkMuted: '',
  background: '',
  card: '',
  border: '',
}

export const usePalette = () => {
  const [palette, setPalette] = useState<ColorPalette>(initialState)

  useEffect(() => {
    const paletteValues = {
      primary: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-primary'),
      caution: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-secondary'),
      warning: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-warning'),
      danger: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-danger'),
      success: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-success'),
      info: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-info'),
      muted: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-muted'),
      darkMuted: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-darkMuted'),
      background: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-background'),
      card: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-card'),
      border: getComputedStyle(document.documentElement).getPropertyValue('--color-dune-border'),
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPalette(paletteValues)
  }, [])

  return palette
}
