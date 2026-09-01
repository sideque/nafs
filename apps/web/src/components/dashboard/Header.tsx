'use client';

import React from 'react';

interface HeaderProps {
  userName: string;
  onOpenMobileMenu: () => void;
}

export function Header({ userName, onOpenMobileMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-4 sm:px-8 bg-[#070b14]/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={onOpenMobileMenu}
          className="p-2 text-slate-400 rounded-lg lg:hidden hover:text-white hover:bg-slate-800"
          aria-label="Open sidebar"
        >
          ☰
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Good morning, {userName} <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Let's make today meaningful.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Badge Button */}
        <button 
          aria-label="Notifications"
          className="relative p-2 text-slate-400 rounded-lg hover:text-white hover:bg-slate-800 transition-all"
        >
          🔔
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500 ring-2 ring-[#070b14]" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-purple-500/30">
              {userName.charAt(0)}
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#070b14]" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-semibold text-white leading-none">{userName}</p>
            <p className="text-xs text-slate-400 mt-1">Free Tier</p>
          </div>
        </div>
      </div>
    </header>
  );
}