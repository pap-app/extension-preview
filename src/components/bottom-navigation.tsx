
"use client"

import { BarChart3, Wallet, Sprout, Settings, Home } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation';


interface NavItem {
  path: string
  icon: typeof BarChart3
  label: string
}

const navItems: NavItem[] = [
  { path: '/preview/home', icon: Home, label: 'Home' },
  { path: '/preview/portfolio', icon: Wallet, label: 'Portfolio' },
  { path: '/preview/vaults', icon: Sprout, label: 'Yields' },
  { path: '/preview/settings', icon: Settings, label: 'Settings' },
]

export default function BottomNavigation() {
  //const [location, setLocation] = useLocation();
const pathname = usePathname();
const router = useRouter()
 
// ❌ Don't show if on exact `/preview` page
  if (pathname === '/preview') return null
  return (
    <nav className={` fixed bottom-0 left-0 right-0 z-10  bg-bg-secondary border-t border-gray-100 px-4 py-2 max-w-lg mx-auto`}>
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname.startsWith(item.path);


          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center space-y-1 px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? 'text-brand-green'
                  : 'text-text-tertiary hover:text-text-secondary'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
