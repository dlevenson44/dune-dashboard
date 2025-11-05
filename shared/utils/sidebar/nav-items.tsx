import type { ComponentType } from 'react';
import { Building, Network, User } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  active?: boolean;
}

export const navItems: NavItem[] = [
  {
    id: 'organization',
    label: 'Organization',
    icon: Building,
    active: true,
  },
  {
    id: 'departments',
    label: 'Departments',
    icon: Network,
    active: false,
  },
  {
    id: 'users',
    label: 'Users',
    icon: User,
    active: false,
  },
];
