'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Sidebar from "@/components/dashboard/Sidebar";
import { Header } from '@/components/dashboard/Header';
import { StatCard } from '@/components/dashboard/StatCard';
import { HabitList } from '@/components/dashboard/HabitList';
import { GoalList } from '@/components/dashboard/GoalList';
import { WeeklyActivityChart } from '@/components/dashboard/WeeklyActivityChart';
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline';

import { MOCK_DASHBOARD_DATA } from '@/components/mockData';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex">
      {/* Navigation Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Container */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        {/* Navigation Header */}
        <Header 
          userName={MOCK_DASHBOARD_DATA.user.name} 
          onOpenMobileMenu={() => setSidebarOpen(true)} 
        />

        <main className="flex-1 p-4 sm:p-6 md:p-8 space-y-8 max-w-7xl w-full mx-auto">
          {/* Section 1: Daily Overview Header */}
          <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
                Monday, September 1
              </span>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
                Your day at a glance
              </h2>
            </div>
          </section>

          {/* Key Metric Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Today's Progress"
              value={`${MOCK_DASHBOARD_DATA.stats.todayProgress}%`}
              icon="🎯"
              trend="+5% vs yesterday"
              trendPositive={true}
            />
            <StatCard
              title="Habits Completed"
              value={`${MOCK_DASHBOARD_DATA.stats.habitsCompleted} / ${MOCK_DASHBOARD_DATA.stats.habitsTotal}`}
              icon="✅"
              trend="2 remaining"
              trendPositive={true}
            />
            <StatCard
              title="Focus Time"
              value={MOCK_DASHBOARD_DATA.stats.focusTime}
              icon="⏱️"
              trend="+45m today"
              trendPositive={true}
            />
            <StatCard
              title="Current Streak"
              value={`${MOCK_DASHBOARD_DATA.stats.currentStreak} days`}
              icon="🔥"
              trend="Personal record!"
              trendPositive={true}
            />
          </section>

          {/* Section 2: Core Grid (Habits, Overall Circular Progress, Goals) */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Habits Component */}
            <HabitList initialHabits={MOCK_DASHBOARD_DATA.habits} />

            {/* Daily Circular Progress Component */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col items-center justify-between text-center">
              <h2 className="text-lg font-bold text-white tracking-tight w-full text-left">
                Daily Overall Progress
              </h2>
              
              <div className="relative flex items-center justify-center my-6">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="currentColor"
                    strokeWidth="12"
                    className="text-slate-800"
                    fill="transparent"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 65}
                    strokeDashoffset={2 * Math.PI * 65 * (1 - MOCK_DASHBOARD_DATA.stats.todayProgress / 100)}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">
                    {MOCK_DASHBOARD_DATA.stats.todayProgress}%
                  </span>
                  <span className="text-xs text-slate-400">Completed</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-slate-800 text-center">
                <div>
                  <p className="text-xs text-slate-400">Completed</p>
                  <p className="text-sm font-bold text-emerald-400">8</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Remaining</p>
                  <p className="text-sm font-bold text-amber-400">3</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">Total Tasks</p>
                  <p className="text-sm font-bold text-white">11</p>
                </div>
              </div>
            </div>

            {/* Goals List Component */}
            <GoalList goals={MOCK_DASHBOARD_DATA.goals.slice(0, 3)} />
          </section>

          {/* Section 3: Weekly Activity Visualization */}
          <section>
            <WeeklyActivityChart />
          </section>

          {/* Section 4: Categorized Productivity Cards (Coding, Fitness, Spiritual, Career, Reading) */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Coding Progress */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    💻 Coding Progress
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    🔥 {MOCK_DASHBOARD_DATA.coding.streak}d streak
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-xs text-slate-400">Today</p>
                    <p className="text-lg font-extrabold text-white">{MOCK_DASHBOARD_DATA.coding.today}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-xs text-slate-400">This Week</p>
                    <p className="text-lg font-extrabold text-white">{MOCK_DASHBOARD_DATA.coding.thisWeek}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Problems Solved: <span className="font-bold text-white">{MOCK_DASHBOARD_DATA.coding.problemsSolved}</span>
                </p>
              </div>

              <Link
                href="/coding"
                className="mt-6 w-full py-2 flex items-center justify-center text-xs font-semibold text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-xl transition-all"
              >
                Continue Coding →
              </Link>
            </div>

            {/* Fitness Section */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    🏋️ Fitness
                  </h3>
                  <span className="text-xs font-semibold text-emerald-400">
                    {MOCK_DASHBOARD_DATA.fitness.progress}% Completed
                  </span>
                </div>

                <p className="text-sm font-semibold text-white mb-3">
                  Today's Workout: <span className="text-purple-400">{MOCK_DASHBOARD_DATA.fitness.workout}</span>
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-xs text-slate-400">Calories Burned</p>
                    <p className="text-lg font-extrabold text-white">{MOCK_DASHBOARD_DATA.fitness.calories} kcal</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-xs text-slate-400">Duration</p>
                    <p className="text-lg font-extrabold text-white">{MOCK_DASHBOARD_DATA.fitness.duration}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/fitness"
                className="mt-6 w-full py-2 flex items-center justify-center text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl transition-all"
              >
                Open Fitness →
              </Link>
            </div>

            {/* Spiritual Progress */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    🌙 Spiritual Progress
                  </h3>
                </div>

                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex justify-between p-2 rounded bg-[#151c2c]">
                    <span className="text-slate-400">Quran Reading</span>
                    <span className="font-bold text-white">{MOCK_DASHBOARD_DATA.islamic.quranPages} pages</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#151c2c]">
                    <span className="text-slate-400">Prayers</span>
                    <span className="font-bold text-emerald-400">{MOCK_DASHBOARD_DATA.islamic.prayersCompleted} / {MOCK_DASHBOARD_DATA.islamic.prayersTotal}</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#151c2c]">
                    <span className="text-slate-400">Dhikr</span>
                    <span className="font-bold text-emerald-400">Completed</span>
                  </div>
                  <div className="flex justify-between p-2 rounded bg-[#151c2c]">
                    <span className="text-slate-400">Tahajjud</span>
                    <span className="font-bold text-slate-400">Not completed</span>
                  </div>
                </div>

                <p className="text-xs italic text-purple-300 text-center">
                  "{MOCK_DASHBOARD_DATA.islamic.message}"
                </p>
              </div>

              <Link
                href="/islamic"
                className="mt-6 w-full py-2 flex items-center justify-center text-xs font-semibold text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-xl transition-all"
              >
                View Spiritual Hub →
              </Link>
            </div>

            {/* Career Progress */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                  💼 Career Progress
                </h3>

                <div className="grid grid-cols-3 gap-2 text-center mb-4">
                  <div className="p-2.5 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Applied</p>
                    <p className="text-base font-extrabold text-white">{MOCK_DASHBOARD_DATA.career.applications}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Interviews</p>
                    <p className="text-base font-extrabold text-amber-400">{MOCK_DASHBOARD_DATA.career.interviews}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#151c2c] border border-slate-800">
                    <p className="text-[10px] text-slate-400">Offers</p>
                    <p className="text-base font-extrabold text-emerald-400">{MOCK_DASHBOARD_DATA.career.offers}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400">
                  Applications submitted this week: <span className="font-bold text-white">{MOCK_DASHBOARD_DATA.career.weeklyApps}</span>
                </p>
              </div>

              <Link
                href="/career"
                className="mt-6 w-full py-2 flex items-center justify-center text-xs font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 rounded-xl transition-all"
              >
                View Career →
              </Link>
            </div>

            {/* Reading Tracker */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                  📚 Reading Progress
                </h3>

                <p className="text-xs text-slate-400">Currently Reading:</p>
                <p className="text-sm font-extrabold text-white mb-2">{MOCK_DASHBOARD_DATA.reading.book}</p>

                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-2">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${MOCK_DASHBOARD_DATA.reading.progress}%` }}
                  />
                </div>

                <div className="flex justify-between text-xs text-slate-400">
                  <span>{MOCK_DASHBOARD_DATA.reading.progress}% Completed</span>
                  <span>{MOCK_DASHBOARD_DATA.reading.currentPages} / {MOCK_DASHBOARD_DATA.reading.totalPages} pages</span>
                </div>
              </div>

              <Link
                href="/reading"
                className="mt-6 w-full py-2 flex items-center justify-center text-xs font-semibold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 rounded-xl transition-all"
              >
                Continue Reading →
              </Link>
            </div>

            {/* Timeline Activity */}
            <ActivityTimeline activities={MOCK_DASHBOARD_DATA.recentActivities} />
          </section>

          {/* Section 5: Quick Actions Bar */}
          <section className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg">
            <h2 className="text-lg font-bold text-white tracking-tight mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: '+ Add Habit', href: '/habits' },
                { label: '+ Add Goal', href: '/goals' },
                { label: '+ Log Workout', href: '/fitness' },
                { label: '+ Add Reading', href: '/reading' },
                { label: '+ Log Coding', href: '/coding' },
                { label: '+ Job Application', href: '/career' },
              ].map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="px-3 py-2.5 rounded-xl bg-[#151c2c] hover:bg-purple-600/20 border border-slate-700/60 hover:border-purple-500/40 text-xs font-semibold text-slate-200 hover:text-white text-center transition-all flex items-center justify-center"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </section>

          {/* Section 6: Motivation Card Banner */}
          <section className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/40 via-violet-900/30 to-blue-900/40 border border-purple-500/30 text-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-[2px]" />
            <div className="relative z-10 space-y-2">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "Small steps every day create a completely different life."
              </h3>
              <p className="text-sm font-medium text-purple-200/80">
                Stay consistent. Trust the process.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}