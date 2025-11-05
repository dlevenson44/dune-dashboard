'use client'

import { useState, useEffect } from 'react'
import { ChevronsUpDown, Shield } from 'lucide-react';

const SidebarHeader = () => {
    const [primaryColor, setPrimaryColor] = useState('')

    useEffect(() => {
      const computedColor = getComputedStyle(document.documentElement).getPropertyValue('--color-dune-primary');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPrimaryColor(computedColor)
    }, [])

    return (
      <div className="flex items-center gap-2 px-6 py-4 border-gray-200 hover:cursor-pointer">
        <Shield className="w-6 h-6" fill={primaryColor} />
        {/* <Shield className="w-6 h-6" fill="[var(--color-dune-primary)]" /> */}
        <span className="text-lg font-semibold">Dune Security</span>
        <ChevronsUpDown />
      </div>
    )
}

export default SidebarHeader
