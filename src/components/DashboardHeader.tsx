
import { Bell, Settings, User, LogOut, Moon, Sun } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <header className="bg-white dark:bg-card border-b border-slate-200 dark:border-border px-4 py-4 shadow-sm dark:carbon-fiber">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DM</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-foreground">Department Monitor</h1>
            <p className="text-sm text-slate-500 dark:text-muted-foreground">Real-time dashboard</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" />
            <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs bg-red-500">
              3
            </Badge>
          </div>
          <Settings className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" />
          <User className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
