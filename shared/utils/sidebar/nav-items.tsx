import { Building, Network, User } from 'lucide-react';

import type { NavItem } from '~/shared/types/components';

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
