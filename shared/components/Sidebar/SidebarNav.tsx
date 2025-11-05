'use client'

import { useState } from "react";
import { ChevronDown, ChevronRight } from 'lucide-react';

import { navItems } from "~/shared/utils/sidebar/nav-items";

const SidebarNav = () => {
  const [expandNav, setExpandNav] = useState(true)
  const iconStyle = 'h-[14px]'

  const handleNavExpandToggle = () => {
    setExpandNav(!expandNav)
  }

  return (
    <nav className="p-4">
      <div className="space-y-1">
        <div className="flex items-center">
          <span className="text-xs font-light text-gray-500 uppercase tracking-wider px-3 py-2">
            Risk Insights
          </span>
          {expandNav ?
            <ChevronDown onClick={handleNavExpandToggle} className={iconStyle} /> :
            <ChevronRight onClick={handleNavExpandToggle} className={iconStyle} />
          }
        </div>
        {expandNav &&
          navItems.map((item) => {
            const Icon = item.icon
            return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors rounded-r-lg ${
                item.active
                  ? 'bg-gray-100 text-gray-900 font-medium border-l-2 border-[var(--color-dune-primary)]'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={item.active ? 'text-[var(--color-dune-primary)]' : 'text-gray-500'} />
              {item.label}
            </button>
          )
          })
        }
      </div>
    </nav>
  )
}

export default SidebarNav
