import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  trend?: string;
  trendPositive?: boolean;
}

export function StatCard({ title, value, subtitle, icon, trend, trendPositive = true }: StatCardProps) {
  return (
    <div className="p-5 rounded-2xl bg-[#111827] border border-slate-800/80 shadow-lg hover:border-slate-700/80 transition-all">
      <div className="flex items-center justify-between">
        <span className="text-2xl">{icon}</span>
        {trend && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trendPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-3xl font-extrabold text-white tracking-tight">{value}</h3>
        <p className="mt-1 text-sm font-medium text-slate-400">{title}</p>
        {subtitle && <p className="mt-0.5 text-xs text-slate-400">{subtitle}</p>}
      </div>
    </div>
  );
}