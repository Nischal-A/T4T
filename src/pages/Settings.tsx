
import { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useTheme } from '@/components/ThemeProvider';
import { useToast } from '@/hooks/use-toast';
import { Save, Shield, Bell, Globe, Trash2, Download } from 'lucide-react';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    language: 'English',
    emailNotifications: true,
    pushNotifications: true,
    departmentAlerts: true,
    twoFactor: false,
    autoSave: true,
    dataBackup: true
  });

  const handleSettingChange = (key: string, value: boolean | string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully"
    });
  };

  const handleExportData = () => {
    toast({
      title: "Data export started",
      description: "Your data export will be ready shortly"
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "Please check your email for confirmation",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background page-enter">
      <DashboardHeader />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your application preferences and configuration</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          <Card className="card-hover animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Globe className="h-5 w-5 mr-2" />
                Appearance
              </CardTitle>
              <CardDescription>Customize the look and feel of your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="text-foreground">Dark Mode</Label>
                <Switch 
                  id="dark-mode" 
                  checked={theme === 'dark'} 
                  onCheckedChange={toggleTheme}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language" className="text-foreground">Language</Label>
                <Input 
                  id="language" 
                  value={settings.language} 
                  onChange={(e) => handleSettingChange('language', e.target.value)}
                  className="max-w-xs" 
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-save" className="text-foreground">Auto-save Changes</Label>
                <Switch 
                  id="auto-save" 
                  checked={settings.autoSave}
                  onCheckedChange={(checked) => handleSettingChange('autoSave', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </CardTitle>
              <CardDescription>Configure your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="text-foreground">Email Notifications</Label>
                <Switch 
                  id="email-notifications" 
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="text-foreground">Push Notifications</Label>
                <Switch 
                  id="push-notifications" 
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) => handleSettingChange('pushNotifications', checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="department-alerts" className="text-foreground">Department Alerts</Label>
                <Switch 
                  id="department-alerts" 
                  checked={settings.departmentAlerts}
                  onCheckedChange={(checked) => handleSettingChange('departmentAlerts', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Shield className="h-5 w-5 mr-2" />
                Security
              </CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-foreground">Current Password</Label>
                <Input id="current-password" type="password" className="max-w-xs" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-foreground">New Password</Label>
                <Input id="new-password" type="password" className="max-w-xs" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor" className="text-foreground">Two-Factor Authentication</Label>
                <Switch 
                  id="two-factor" 
                  checked={settings.twoFactor}
                  onCheckedChange={(checked) => handleSettingChange('twoFactor', checked)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Download className="h-5 w-5 mr-2" />
                Data Management
              </CardTitle>
              <CardDescription>Manage your data and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-backup" className="text-foreground">Automatic Data Backup</Label>
                <Switch 
                  id="data-backup" 
                  checked={settings.dataBackup}
                  onCheckedChange={(checked) => handleSettingChange('dataBackup', checked)}
                />
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={handleExportData}>
                  <Download className="h-4 w-4 mr-2" />
                  Export My Data
                </Button>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-4">
            <Button className="glow-effect" onClick={handleSaveSettings}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
