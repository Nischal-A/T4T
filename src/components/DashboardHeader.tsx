
import { useState } from 'react';
import { Bell, Settings, User, LogOut, Moon, Sun, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { useAuth } from '@/contexts/AuthContext';
import { NotificationPanel } from '@/components/NotificationPanel';
import { UserSwitcher } from '@/components/UserSwitcher';

export const DashboardHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { currentUser, logout, isAdmin } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserSwitcher, setShowUserSwitcher] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <>
      <header 
        className="bg-white dark:bg-card border-b border-slate-200 dark:border-border px-4 py-4 shadow-sm dark:carbon-fiber"
        style={currentUser ? { borderBottomColor: currentUser.accentColor + '20' } : {}}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className="h-8 w-8 rounded-lg flex items-center justify-center"
              style={{ 
                background: currentUser ? 
                  `linear-gradient(to right, ${currentUser.bannerColor}, ${currentUser.accentColor})` :
                  'linear-gradient(to right, #3b82f6, #10b981)'
              }}
            >
              <span className="text-white font-bold text-sm">DM</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-800 dark:text-foreground">Department Monitor</h1>
              <p className="text-sm text-slate-500 dark:text-muted-foreground">
                {currentUser ? `Welcome, ${currentUser.firstName}` : 'Real-time dashboard'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Current User Avatar */}
            {currentUser && (
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback style={{ backgroundColor: currentUser.bannerColor }}>
                    {currentUser.firstName[0]}{currentUser.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground">{currentUser.firstName} {currentUser.lastName}</p>
                  <p className="text-xs text-muted-foreground">{currentUser.jobTitle}</p>
                </div>
                {isAdmin && (
                  <Badge variant="default" className="text-xs">Admin</Badge>
                )}
              </div>
            )}

            {/* User Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowUserSwitcher(true)}
              className="text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground"
            >
              <Users className="h-4 w-4" />
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Bell 
                className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" 
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center text-xs bg-red-500">
                3
              </Badge>
            </div>

            {/* Settings */}
            <Settings 
              className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" 
              onClick={handleSettingsClick}
            />

            {/* Profile */}
            <User 
              className="h-5 w-5 text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground cursor-pointer transition-colors" 
              onClick={handleProfileClick}
            />

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-slate-600 dark:text-muted-foreground hover:text-slate-800 dark:hover:text-foreground"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Logout */}
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
      
      <NotificationPanel 
        isOpen={showNotifications} 
        onClose={() => setShowNotifications(false)} 
      />

      <UserSwitcher 
        isOpen={showUserSwitcher}
        onClose={() => setShowUserSwitcher(false)}
      />
    </>
  );
};
