
import { Bell, Settings, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DM</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800">Department Monitor</h1>
            <p className="text-sm text-slate-500">Real-time dashboard</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-5 w-5 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors" />
            <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs bg-red-500">
              3
            </Badge>
          </div>
          <Settings className="h-5 w-5 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors" />
          <User className="h-5 w-5 text-slate-600 hover:text-slate-800 cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
};
