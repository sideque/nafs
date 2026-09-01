import React from 'react';
import { Goal } from './mockData';

export function GoalList({ goals }: { goals: Goal[] }) {
  return (
    <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-white tracking-tight">Your Goals</h2>
        <span className="text-xs text-slate-400">{goals.length} Active Goals</span>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => (
          <div key={goal.id} className="p-4 rounded-xl bg-[#151c2c] border border-slate-800/80">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-white">{goal.title}</h4>
              <span className="text-xs font-extrabold text-purple-400">{goal.progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${goal.progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Target: {goal.deadline}</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {goal.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}