'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbProps {
  separator: string
  containerClasses?: string
  listClasses?: string
  activeClasses?: string
}

const routeNames: Record<string, string> = {
  'dashboard': 'dashboard',
  'users': 'usuários',
  'reports': 'relatórios',
  'create-user': 'Criar Usuário',
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
          const displayName = capitalize(routeNames[path]) || capitalize(path)


          return (
            <div key={index}>
              <li className={itemClasses}>
                <Link href={href} > {displayName}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </div>
          )
        })}
      </ul>
    </nav>
  )
}