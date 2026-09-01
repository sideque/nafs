import React from 'react';
import { RecentActivity } from './mockData';

export function ActivityTimeline({ activities }: { activities: RecentActivity[] }) {
  return (
    <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg">
      <h2 className="text-lg font-bold text-white tracking-tight mb-4">Recent Activity</h2>

      <div className="relative border-l border-slate-800 ml-3 space-y-6">
        {activities.map((act) => (
          <div key={act.id} className="relative pl-6">
            {/* Timeline node */}
            <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-[#111827]" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white">{act.title}</p>
              <span className="text-xs text-slate-400">{act.time}</span>
            </div>
            <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
              {act.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}