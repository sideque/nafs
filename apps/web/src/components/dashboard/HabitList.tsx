'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Habit } from './mockData';

export function HabitList({ initialHabits }: { initialHabits: Habit[] }) {
  const [habits, setHabits] = useState(initialHabits);

  const toggleHabit = (id: string) => {
    setHabits(prev =>
      prev.map(h => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  };

  return (
    <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white tracking-tight">Today's Habits</h2>
          <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {habits.filter(h => h.completed).length}/{habits.length} Done
          </span>
        </div>

        <div className="space-y-3">
          {habits.map((habit) => (
            <div
              key={habit.id}
              onClick={() => toggleHabit(habit.id)}
              className={`
                flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer
                ${habit.completed 
                  ? 'bg-slate-900/40 border-slate-800/50 text-slate-400' 
                  : 'bg-[#151c2c] border-slate-700/60 text-white hover:border-slate-600'}
              `}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => {}}
                  className="w-4 h-4 rounded border-slate-600 text-purple-600 focus:ring-purple-500 bg-slate-800"
                />
                <span className={`text-sm font-medium ${habit.completed ? 'line-through' : ''}`}>
                  {habit.name}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {habit.category}
                </span>
                {habit.streak > 0 && (
                  <span className="text-xs font-semibold text-amber-400">
                    🔥 {habit.streak}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800">
        <Link
          href="/habits"
          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center justify-end gap-1 transition-all"
        >
          View all habits →
        </Link>
      </div>
    </div>
  );
}