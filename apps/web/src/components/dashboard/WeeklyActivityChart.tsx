import React from 'react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CATEGORIES = [
  { label: 'Productivity', color: 'bg-purple-500' },
  { label: 'Coding', color: 'bg-blue-500' },
  { label: 'Fitness', color: 'bg-emerald-500' },
  { label: 'Reading', color: 'bg-amber-500' },
];

const WEEKLY_DATA = [
  { day: 'Mon', productivity: 75, coding: 90, fitness: 40, reading: 60 },
  { day: 'Tue', productivity: 60, coding: 80, fitness: 70, reading: 30 },
  { day: 'Wed', productivity: 90, coding: 60, fitness: 50, reading: 80 },
  { day: 'Thu', productivity: 80, coding: 95, fitness: 30, reading: 40 },
  { day: 'Fri', productivity: 70, coding: 50, fitness: 90, reading: 70 },
  { day: 'Sat', productivity: 85, coding: 40, fitness: 80, reading: 90 },
  { day: 'Sun', productivity: 40, coding: 30, fitness: 60, reading: 100 },
];

export function WeeklyActivityChart() {
  return (
    <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <h2 className="text-lg font-bold text-white tracking-tight">Weekly Activity</h2>
        
        {/* Category Legend */}
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map(cat => (
            <div key={cat.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
              <span className="text-xs text-slate-400">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Simplified Bar Visualization */}
      <div className="grid grid-cols-7 gap-2 items-end h-44 pt-4 border-b border-slate-800">
        {WEEKLY_DATA.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-1 h-full justify-end">
            <div className="w-full flex items-end justify-center gap-0.5 sm:gap-1 h-full">
              <div 
                className="w-1.5 sm:w-2 bg-purple-500 rounded-t transition-all duration-300" 
                style={{ height: `${item.productivity}%` }}
                title={`Productivity: ${item.productivity}%`}
              />
              <div 
                className="w-1.5 sm:w-2 bg-blue-500 rounded-t transition-all duration-300" 
                style={{ height: `${item.coding}%` }}
                title={`Coding: ${item.coding}%`}
              />
              <div 
                className="w-1.5 sm:w-2 bg-emerald-500 rounded-t transition-all duration-300" 
                style={{ height: `${item.fitness}%` }}
                title={`Fitness: ${item.fitness}%`}
              />
              <div 
                className="w-1.5 sm:w-2 bg-amber-500 rounded-t transition-all duration-300" 
                style={{ height: `${item.reading}%` }}
                title={`Reading: ${item.reading}%`}
              />
            </div>
            <span className="text-[11px] font-medium text-slate-400 mt-2">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}