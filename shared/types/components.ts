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

export interface SankeyNode {
  column: number;
  row: number;
  startColumn?: boolean;
  label?: string;
  id?: string;
  value?: number;
  color?: string;
}
