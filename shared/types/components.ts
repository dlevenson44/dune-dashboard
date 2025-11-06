import type { ComponentType } from "react";

export interface NavItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
}

export interface Filter {
  id: string;
  label: string;
}

export interface Tab {
  id: string;
  label: string;
}
