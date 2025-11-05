'use client'

import { ChevronsUpDown, Shield } from 'lucide-react';

import { usePalette } from '~/shared/hooks/usePalette';

const SidebarHeader = () => {
    const { primary } = usePalette()

    return (
      <div className="flex items-center gap-2 px-6 py-4 border-gray-200 hover:cursor-pointer">
        <Shield className="w-6 h-6" fill={primary} />
        <span className="text-lg font-semibold">Dune Security</span>
        <ChevronsUpDown />
      </div>
    )
}

export default SidebarHeader
