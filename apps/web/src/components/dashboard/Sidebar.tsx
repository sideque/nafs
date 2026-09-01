'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: '⌂' },
      { label: 'Analytics', href: '/analytics', icon: '◈' },
    ],
  },
  {
    title: 'Growth',
    items: [
      { label: 'Goals', href: '/goals', icon: '◎' },
      { label: 'Habits', href: '/habits', icon: '✓' },
      { label: 'Fitness', href: '/fitness', icon: '♢' },
      { label: 'Career', href: '/career', icon: '↗' },
      { label: 'Coding', href: '/coding', icon: '</>' },
    ],
  },
  {
    title: 'Mind & Soul',
    items: [
      { label: 'Islamic', href: '/islamic', icon: '☪' },
      { label: 'Reading', href: '/reading', icon: '▤' },
      { label: 'Wellness', href: '/wellness', icon: '♡' },
    ],
  },
  {
    title: 'System',
    items: [
      { label: 'Settings', href: '/settings', icon: '⚙' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/10 bg-[#070b14] lg:block">
      <div className="sticky top-0 flex h-screen flex-col px-5 py-6">
        
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-lg font-bold text-white">
            N
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Nafs
            </h1>
            <p className="text-xs text-slate-500">
              Personal Growth
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6 overflow-y-auto">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const active =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                        active
                          ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm ${
                          active
                            ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        {item.icon}
                      </span>

                      <span>{item.label}</span>

                      {active && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-purple-400" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-xs font-medium text-white">
              Keep going 🚀
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
              Small improvements every day create big changes.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}