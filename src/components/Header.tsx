'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="flex px-2 py-4 bg-cyan-600 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-7x1">
        <div>
          Breadcrumbify
        </div>

        <nav>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/dashboard"> Dashboard </Link>
            </li>
            <li>
              <Link href="/users"> Usuários </Link>
            </li>
            <li>
              <Link href="/reports"> Relatórios </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}