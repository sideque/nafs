'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  Code2,
  Dumbbell,
  Flame,
  Goal,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Menu,
  MoonStar,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  X,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const navGroups: Array<{ label: string; items: Array<{ label: string; href: string; icon: LucideIcon }> }> = [
  { label: 'Overview', items: [{ label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }] },
  { label: 'Productivity', items: [
    { label: 'Habits', href: '/habits', icon: CheckCircle2 },
    { label: 'Goals', href: '/goals', icon: Goal },
    { label: 'Reading', href: '/reading', icon: BookOpen },
    { label: 'Coding', href: '/coding', icon: Code2 },
  ] },
  { label: 'Health', items: [
    { label: 'Fitness', href: '/fitness', icon: Dumbbell },
    { label: 'Health', href: '/health', icon: HeartPulse },
    { label: 'Wellness', href: '/wellness', icon: Sparkles },
  ] },
  { label: 'Personal', items: [
    { label: 'Career', href: '/career', icon: BriefcaseBusiness },
    { label: 'Analytics', href: '/analytics', icon: BarChart3 },
    { label: 'Islamic', href: '/islamic', icon: MoonStar },
  ] },
  { label: 'System', items: [{ label: 'Settings', href: '/settings', icon: Settings }] },
];

const habits = [
  { name: 'Morning workout', category: 'Fitness', streak: '12 day streak', done: true, icon: Dumbbell },
  { name: 'Quran reading', category: 'Islamic', streak: '8 day streak', done: true, icon: MoonStar },
  { name: 'Coding practice', category: 'Coding', streak: '8 day streak', done: true, icon: Code2 },
  { name: 'Drink enough water', category: 'Health', streak: '5 day streak', done: true, icon: Activity },
  { name: 'Read book', category: 'Reading', streak: '4 day streak', done: false, icon: BookOpen },
  { name: 'Job applications', category: 'Career', streak: '2 day streak', done: false, icon: BriefcaseBusiness },
];

const goals = [
  { title: 'Become a MERN Stack Developer', progress: 68, deadline: 'December 2026', status: 'On track' },
  { title: 'Build Nafs', progress: 54, deadline: 'October 2026', status: 'In progress' },
  { title: 'Improve Coding', progress: 76, deadline: 'November 2026', status: 'On track' },
  { title: 'Get a Job', progress: 42, deadline: 'December 2026', status: 'In progress' },
  { title: 'Improve Fitness', progress: 71, deadline: 'January 2027', status: 'On track' },
];

const activities = [
  { text: 'Completed Morning Workout', time: '8:42 AM', icon: Dumbbell },
  { text: 'Completed Quran Reading', time: '7:18 AM', icon: MoonStar },
  { text: 'Solved 3 Coding Problems', time: '6:35 AM', icon: Code2 },
  { text: 'Completed 5 Habits', time: '6:10 AM', icon: CheckCircle2 },
  { text: 'Applied for Web Developer Job', time: 'Yesterday', icon: BriefcaseBusiness },
];

const quickActions = [
  { label: 'Add Habit', icon: CheckCircle2, href: '/habits' },
  { label: 'Add Goal', icon: Target, href: '/goals' },
  { label: 'Log Workout', icon: Dumbbell, href: '/fitness' },
  { label: 'Add Reading', icon: BookOpen, href: '/reading' },
  { label: 'Log Coding', icon: Code2, href: '/coding' },
  { label: 'Job Application', icon: BriefcaseBusiness, href: '/career' },
];

function cn(...classes: Array<string | false | null | undefined>) { return classes.filter(Boolean).join(' '); }

export function DashboardSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <>
    {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden" />}
    <aside className={cn('fixed inset-y-0 left-0 z-50 flex w-[276px] flex-col border-r border-white/[0.07] bg-[#090e1a]/95 px-4 py-5 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0', open ? 'translate-x-0' : '-translate-x-full')}>
      <div className="flex items-center justify-between px-2 pb-7">
        <Link href="/dashboard" className="group flex items-center gap-3" onClick={onClose}>
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-indigo-500/20"><span className="absolute inset-1 rounded-[9px] bg-[#0d1423]/70" /><Sparkles className="relative h-5 w-5 text-white" /></span>
          <span><span className="block text-lg font-bold tracking-tight text-white">Nafs</span><span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Life OS</span></span>
        </Link>
        <button aria-label="Close navigation" onClick={onClose} className="rounded-lg p-2 text-slate-500 hover:bg-white/5 hover:text-white lg:hidden"><X className="h-5 w-5" /></button>
      </div>
      <nav className="flex-1 space-y-6 overflow-y-auto pr-1">
        {navGroups.map((group) => <div key={group.label}><p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">{group.label}</p><div className="space-y-1">{group.items.map((item) => { const Icon = item.icon; const active = item.href === '/dashboard'; return <Link key={item.label} href={item.href} onClick={onClose} className={cn('group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all', active ? 'bg-gradient-to-r from-violet-500/15 to-blue-500/10 text-white ring-1 ring-inset ring-violet-400/15' : 'text-slate-400 hover:bg-white/[0.045] hover:text-white')}><Icon className={cn('h-[18px] w-[18px]', active ? 'text-violet-300' : 'text-slate-500 group-hover:text-slate-300')} /><span>{item.label}</span>{active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.9)]" />}</Link>; })}</div></div>)}
      </nav>
      <button className="mt-5 flex w-full items-center gap-3 rounded-xl border border-white/[0.06] px-3 py-3 text-sm font-medium text-slate-400 transition hover:border-red-400/20 hover:bg-red-400/5 hover:text-red-300"><LogOut className="h-[18px] w-[18px] />Logout</button>
    </aside>
  </>;
}

export function DashboardHeader({ onMenu }: { onMenu: () => void }) {
  return <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#070b14]/85 backdrop-blur-xl"><div className="flex min-h-[78px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"><div className="flex items-center gap-3"><button aria-label="Open navigation" onClick={onMenu} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 text-slate-300 hover:bg-white/[0.05] lg:hidden"><Menu className="h-5 w-5" /></button><div><p className="text-sm font-medium text-slate-400">Good morning, Sidhique <span aria-hidden="true">👋</span></p><h1 className="mt-0.5 text-base font-semibold tracking-tight text-white sm:text-lg">Let&apos;s make today meaningful.</h1></div></div><div className="flex items-center gap-2 sm:gap-4"><button aria-label="Notifications" className="relative rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 text-slate-400 transition hover:bg-white/[0.05] hover:text-white"><Bell className="h-5 w-5" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-violet-400" /></button><div className="hidden h-8 w-px bg-white/[0.07] sm:block" /><div className="flex items-center gap-2.5"><div className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">SK</div><div className="hidden sm:block"><p className="text-sm font-semibold text-white">Sidhique</p><p className="flex items-center gap-1 text-[11px] text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online</p></div></div></div></div></header>;
}

export function StatCard({ icon: Icon, label, value, detail, tone = 'violet' }: { icon: LucideIcon; label: string; value: string; detail: string; tone?: 'violet' | 'blue' | 'cyan' | 'green' }) {
  const toneClasses = { violet: 'bg-violet-500/10 text-violet-300 ring-violet-400/10', blue: 'bg-blue-500/10 text-blue-300 ring-blue-400/10', cyan: 'bg-cyan-500/10 text-cyan-300 ring-cyan-400/10', green: 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/10' }[tone];
  return <div className="group rounded-2xl border border-white/[0.07] bg-[#111827]/80 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-[#141d2d] sm:p-5"><div className="flex items-start justify-between gap-3"><span className={cn('grid h-10 w-10 place-items-center rounded-xl ring-1', toneClasses)}><Icon className="h-5 w-5" /></span><TrendingUp className="h-4 w-4 text-emerald-400/80" /></div><p className="mt-4 text-xs font-medium text-slate-500">{label}</p><p className="mt-1 text-2xl font-bold tracking-tight text-white">{value}</p><p className="mt-1 text-[11px] text-slate-500">{detail}</p></div>;
}

export function SectionHeader({ title, subtitle, href, action = 'View all' }: { title: string; subtitle?: string; href?: string; action?: string }) {
  return <div className="mb-4 flex items-end justify-between gap-4"><div><h2 className="text-base font-semibold tracking-tight text-white sm:text-lg">{title}</h2>{subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}</div>{href && <Link href={href} className="group flex shrink-0 items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-white">{action}<ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></Link>}</div>;
}

export function HabitCard({ habit, checked, onToggle }: { habit: (typeof habits)[number]; checked: boolean; onToggle: () => void }) {
  const Icon = habit.icon;
  return <button onClick={onToggle} className="flex w-full items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.018] p-3 text-left transition hover:border-white/[0.09] hover:bg-white/[0.035]"><span className={cn('grid h-9 w-9 shrink-0 place-items-center rounded-lg', checked ? 'bg-emerald-500/10 text-emerald-300' : 'bg-slate-500/10 text-slate-400')}><Icon className="h-4 w-4" /></span><span className="min-w-0 flex-1"><span className={cn('block truncate text-sm font-medium', checked ? 'text-slate-400 line-through decoration-slate-600' : 'text-white')}>{habit.name}</span><span className="mt-0.5 flex items-center gap-2 text-[10px] text-slate-500"><span>{habit.category}</span><span className="h-0.5 w-0.5 rounded-full bg-slate-700" />{habit.streak}</span></span><span className={cn('grid h-6 w-6 shrink-0 place-items-center rounded-full border transition', checked ? 'border-emerald-400 bg-emerald-400 text-[#08110e]' : 'border-slate-600 text-transparent')}><Check className="h-3.5 w-3.5" /></span></button>;
}

export function ProgressCard() { return <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium text-slate-500">Today&apos;s Progress</p><p className="mt-1 text-4xl font-bold tracking-tight text-white">72<span className="text-2xl text-violet-300">%</span></p></div><div className="relative grid h-20 w-20 place-items-center rounded-full bg-[conic-gradient(#8b5cf6_0deg,#3b82f6_259deg,#1e293b_259deg,#1e293b_360deg)]"><div className="grid h-[68px] w-[68px] place-items-center rounded-full bg-[#111827] text-sm font-semibold text-white">72%</div></div></div><div className="mt-6"><div className="h-2 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-blue-400" /></div><div className="mt-3 grid grid-cols-3 gap-2 text-xs"><div><p className="text-slate-500">Completed</p><p className="mt-1 font-semibold text-white">8</p></div><div><p className="text-slate-500">Remaining</p><p className="mt-1 font-semibold text-white">3</p></div><div><p className="text-slate-500">Total tasks</p><p className="mt-1 font-semibold text-white">11</p></div></div></div></div></div>; }

export function GoalCard({ goal }: { goal: (typeof goals)[number] }) { return <div className="rounded-xl border border-white/[0.06] bg-white/[0.018] p-4 transition hover:border-white/[0.1] hover:bg-white/[0.03]"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate text-sm font-semibold text-white">{goal.title}</p><p className="mt-1 text-[10px] text-slate-500">Target: {goal.deadline}</p></div><span className="shrink-0 text-sm font-bold text-violet-300">{goal.progress}%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400" style={{ width: `${goal.progress}%` }} /></div><div className="mt-2 flex items-center gap-1.5 text-[10px] text-slate-500"><span className={cn('h-1.5 w-1.5 rounded-full', goal.status === 'On track' ? 'bg-emerald-400' : 'bg-amber-400')} />{goal.status}</div></div>; }

export function ActivityChart() { const bars = [{ day: 'Mon', productivity: 72, coding: 64, fitness: 80, reading: 45 }, { day: 'Tue', productivity: 84, coding: 78, fitness: 66, reading: 60 }, { day: 'Wed', productivity: 68, coding: 92, fitness: 72, reading: 52 }, { day: 'Thu', productivity: 90, coding: 70, fitness: 88, reading: 72 }, { day: 'Fri', productivity: 76, coding: 86, fitness: 55, reading: 64 }, { day: 'Sat', productivity: 58, coding: 74, fitness: 90, reading: 80 }, { day: 'Sun', productivity: 72, coding: 60, fitness: 62, reading: 88 }]; return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><div className="mb-5 flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-semibold text-white">Weekly Activity</p><p className="mt-1 text-xs text-slate-500">Your rhythm across the week</p></div><div className="flex flex-wrap gap-3 text-[10px] text-slate-500"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-violet-400" />Productivity</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-blue-400" />Coding</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-cyan-400" />Fitness</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-emerald-400" />Reading</span></div></div><div className="grid h-48 grid-cols-7 gap-2 sm:gap-4">{bars.map((bar) => <div key={bar.day} className="flex min-w-0 flex-col items-center justify-end gap-2"><div className="flex h-full w-full max-w-10 items-end justify-center gap-0.5 rounded-lg bg-slate-900/60 p-1"><span className="w-1/4 rounded-t bg-violet-400/80" style={{ height: `${bar.productivity}%` }} /><span className="w-1/4 rounded-t bg-blue-400/80" style={{ height: `${bar.coding}%` }} /><span className="w-1/4 rounded-t bg-cyan-400/80" style={{ height: `${bar.fitness}%` }} /><span className="w-1/4 rounded-t bg-emerald-400/80" style={{ height: `${bar.reading}%` }} /></div><span className="text-[10px] font-medium text-slate-500">{bar.day}</span></div>)}</div></div>; }

function MiniStat({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) { return <div className="rounded-xl border border-white/[0.05] bg-white/[0.018] p-3"><Icon className="h-4 w-4 text-violet-300" /><p className="mt-3 text-[10px] text-slate-500">{label}</p><p className="mt-0.5 text-sm font-bold text-white">{value}</p></div>; }
export function CodingCard() { return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Coding Progress" href="/coding" action="Open Coding" /><div className="grid grid-cols-2 gap-2 sm:grid-cols-4"><MiniStat label="Today&apos;s Coding" value="2h 40m" icon={Code2} /><MiniStat label="This Week" value="14h 20m" icon={TrendingUp} /><MiniStat label="Problems Solved" value="24" icon={Trophy} /><MiniStat label="Current Streak" value="8 days" icon={Flame} /></div><Link href="/coding" className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-900/20 transition hover:brightness-110">Continue Coding <ArrowRight className="h-4 w-4" /></Link></div>; }
export function FitnessCard() { return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Fitness" href="/fitness" action="Open Fitness" /><div className="flex items-center justify-between gap-4"><div><p className="text-[10px] uppercase tracking-wider text-slate-600">Today&apos;s Workout</p><p className="mt-1 text-base font-semibold text-white">Chest &amp; Triceps</p><p className="mt-1 text-xs text-slate-500">52 min · 420 kcal</p></div><div className="grid h-16 w-16 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/5"><Dumbbell className="h-6 w-6 text-cyan-300" /></div></div><div className="mt-5 flex items-center justify-between text-xs"><span className="text-slate-500">Workout completed</span><span className="font-semibold text-white">65%</span></div><div className="mt-2 h-1.5 rounded-full bg-slate-800"><div className="h-full w-[65%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-400" /></div><Link href="/fitness" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/[0.05]">Open Fitness <ArrowRight className="h-4 w-4" /></Link></div>; }
export function IslamicCard() { const items = [['Quran', '8 pages'], ['Prayers', '4 / 5'], ['Dhikr', 'Completed'], ['Tahajjud', 'Not completed']]; return <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><div className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-violet-600/10 blur-3xl" /><div className="relative"><SectionHeader title="Spiritual Progress" href="/islamic" action="Open Islamic" /><div className="grid grid-cols-2 gap-2">{items.map(([label, value]) => <div key={label} className="rounded-xl border border-white/[0.05] bg-white/[0.018] p-3"><p className="text-[10px] text-slate-500">{label}</p><p className="mt-1 text-sm font-semibold text-white">{value}</p></div>)}</div><p className="mt-4 text-xs italic text-slate-400">Keep your heart connected to Allah.</p></div></div>; }
export function CareerCard() { return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Career Progress" href="/career" action="View Career" /><div className="grid grid-cols-2 gap-2 sm:grid-cols-4"><MiniStat label="Job Applications" value="12" icon={BriefcaseBusiness} /><MiniStat label="Interviews" value="3" icon={CalendarDays} /><MiniStat label="Offers" value="1" icon={Trophy} /><MiniStat label="This Week" value="5" icon={TrendingUp} /></div></div>; }
export function ReadingCard() { return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Reading" href="/reading" action="Continue Reading" /><div className="flex gap-4"><div className="grid h-16 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-amber-400/20 to-violet-500/20 ring-1 ring-white/10"><BookOpen className="h-6 w-6 text-amber-300" /></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold text-white">Atomic Habits</p><p className="mt-1 text-xs text-slate-500">172 / 268 pages</p><div className="mt-3 h-1.5 rounded-full bg-slate-800"><div className="h-full w-[64%] rounded-full bg-gradient-to-r from-amber-400 to-violet-400" /></div><p className="mt-1.5 text-[10px] font-medium text-slate-500">64% complete</p></div></div><Link href="/reading" className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/[0.05]">Continue Reading <ArrowRight className="h-4 w-4" /></Link></div>; }
export function QuickActions() { return <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">{quickActions.map(({ label, icon: Icon, href }) => <Link key={label} href={href} className="group flex items-center gap-2 rounded-xl border border-white/[0.06] bg-[#111827]/80 px-3 py-3 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-[#151e30] hover:text-white"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/15"><Icon className="h-4 w-4" /></span><span className="truncate">+ {label}</span></Link>)}</div>; }
export function MotivationCard() { return <div className="relative overflow-hidden rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-500/10 p-6 sm:p-8"><div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-500/15 blur-3xl" /><div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><div className="mb-3 flex items-center gap-2 text-violet-300"><Sparkles className="h-4 w-4" /><span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Daily reminder</span></div><p className="max-w-2xl text-xl font-semibold tracking-tight text-white sm:text-2xl">Small steps every day create a completely different life.</p><p className="mt-2 text-sm text-slate-400">Stay consistent. Trust the process.</p></div><div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 sm:grid"><Zap className="h-6 w-6 text-violet-300" /></div></div></div>; }
export function RecentActivity() { return <div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Recent Activity" subtitle="A quick look at what you&apos;ve accomplished" /><div className="space-y-1">{activities.map(({ text, time, icon: Icon }, index) => <div key={text} className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-white/[0.025]"><span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-300"><Icon className="h-4 w-4" />{index < activities.length - 1 && <span className="absolute left-1/2 top-9 h-4 w-px bg-white/[0.07]" />}</span><p className="min-w-0 flex-1 truncate text-xs font-medium text-slate-300">{text}</p><span className="shrink-0 text-[10px] text-slate-600">{time}</span></div>)}</div></div>; }

export function DashboardContent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [checkedHabits, setCheckedHabits] = useState(() => habits.map((habit) => habit.done));
  const toggleHabit = (index: number) => setCheckedHabits((current) => current.map((checked, itemIndex) => itemIndex === index ? !checked : checked));
  return <div className="min-h-screen bg-[#070b14] text-white selection:bg-violet-500/30"><DashboardSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} /><div className="lg:pl-[276px]"><DashboardHeader onMenu={() => setMobileOpen(true)} /><main className="mx-auto w-full max-w-[1540px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8"><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-xs font-medium text-violet-300"><CalendarDays className="h-4 w-4" />Tuesday, September 1, 2026</div><h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Your day at a glance</h2><p className="mt-1 text-sm text-slate-500">A balanced day starts with one intentional step.</p></div><div className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-2 text-xs text-slate-400"><Flame className="h-4 w-4 text-orange-300" />12 day current streak</div></div><section className="grid grid-cols-2 gap-3 xl:grid-cols-4 sm:gap-4"><StatCard icon={Activity} label="Today&apos;s Progress" value="72%" detail="+8% from yesterday" tone="violet" /><StatCard icon={CheckCircle2} label="Habits Completed" value="6 / 8" detail="2 habits remaining" tone="green" /><StatCard icon={Zap} label="Focus Time" value="3h 25m" detail="+42m this week" tone="blue" /><StatCard icon={Flame} label="Current Streak" value="12 days" detail="Best: 18 days" tone="cyan" /></section><section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.9fr]"><div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Today&apos;s Habits" subtitle="Keep the small promises you make to yourself." href="/habits" action="View all habits" /><div className="grid gap-2 sm:grid-cols-2">{habits.map((habit, index) => <HabitCard key={habit.name} habit={habit} checked={checkedHabits[index]} onToggle={() => toggleHabit(index)} />)}</div></div><ProgressCard /></section><section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]"><div className="rounded-2xl border border-white/[0.07] bg-[#111827]/90 p-5 sm:p-6"><SectionHeader title="Your Goals" subtitle="The bigger picture, broken into daily progress." href="/goals" action="View goals" /><div className="space-y-2">{goals.map((goal) => <GoalCard key={goal.title} goal={goal} />)}</div></div><ActivityChart /></section><section className="mt-6 grid gap-6 lg:grid-cols-2"><CodingCard /><FitnessCard /></section><section className="mt-6 grid gap-6 lg:grid-cols-2"><IslamicCard /><CareerCard /></section><section className="mt-6 grid gap-6 lg:grid-cols-2"><ReadingCard /><RecentActivity /></section><section className="mt-8"><SectionHeader title="Quick Actions" subtitle="Jump straight into the things you want to move forward." /><QuickActions /></section><section className="mt-6"><MotivationCard /></section><footer className="pb-4 pt-8 text-center text-[10px] text-slate-700">Nafs · Make today meaningful.</footer></main></div></div>;
}
