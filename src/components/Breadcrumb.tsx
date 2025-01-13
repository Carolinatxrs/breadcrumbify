'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type BreadcrumbProps = {
  separator: string
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
}

export default function Breadcrumb({ separator, containerClasses, listClasses, activeClasses }: BreadcrumbProps) {
  const pathname = usePathname() || ''

  const pathNames = pathname.split('/').filter((path) => path)

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <nav aria-label="Breadcrumb">
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link href="/">Home</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const isActive = pathname === href
          const itemClasses = isActive ? `${listClasses} ${activeClasses}` : listClasses

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{capitalize(path)}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}