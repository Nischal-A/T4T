
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Lock, User, Crown, Shield, Users, Chrome, IdCard } from 'lucide-react';
import { users } from '@/data/users';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, loginWithEmployeeId } = useAuth();

  const handleUsernameLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = login(username, password);
    
    if (success) {
      toast({
        title: 'Login Successful',
        description: 'Welcome to the Department Monitor',
      });
      navigate('/dashboard');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid username or password',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  const handleEmployeeIdLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = loginWithEmployeeId(employeeId, employeePassword);
    
    if (success) {
      toast({
        title: 'Login Successful',
        description: 'Welcome to the Department Monitor',
      });
      navigate('/dashboard');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid employee ID or password',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    // Simulate Google OAuth login
    const googleUser = users.find(u => u.username === 'admin'); // Default to admin for demo
    if (googleUser) {
      const success = login(googleUser.username, googleUser.password);
      if (success) {
        toast({
          title: 'Google Login Successful',
          description: 'Welcome back via Google!',
        });
        navigate('/dashboard');
      }
    }
  };

  const handleQuickLogin = (user: any) => {
    setUsername(user.username);
    setPassword(user.password);
    const success = login(user.username, user.password);
    if (success) {
      toast({
        title: 'Login Successful',
        description: `Welcome ${user.firstName}!`,
      });
      navigate('/dashboard');
    }
  };

  const adminUsers = users.filter(u => u.role === 'admin');
  const employeeUsers = users.filter(u => u.role === 'employee');

  return (
    <div className="min-h-screen bg-background dark:bg-background flex items-center justify-center px-4 page-enter">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-card dark:bg-card rounded-lg shadow-lg p-8 dark:carbon-fiber card-hover">
            <div className="text-center mb-8 animate-fade-in">
              <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 glow-effect">
                <span className="text-white font-bold text-lg">DM</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Department Monitor</h1>
              <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
            </div>

            <Tabs defaultValue="username" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="username">Username</TabsTrigger>
                <TabsTrigger value="employeeid">Employee ID</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
              </TabsList>

              <TabsContent value="username" className="space-y-4">
                <form onSubmit={handleUsernameLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In with Username'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="employeeid" className="space-y-4">
                <form onSubmit={handleEmployeeIdLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="employee-id">Employee ID</Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="employee-id"
                        type="text"
                        placeholder="Enter employee ID"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="employee-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="employee-password"
                        type="password"
                        placeholder="Enter password"
                        value={employeePassword}
                        onChange={(e) => setEmployeePassword(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Sign In with Employee ID'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="google" className="space-y-4">
                <div className="space-y-6">
                  <Button 
                    onClick={handleGoogleLogin}
                    variant="outline"
                    className="w-full h-12"
                    disabled={isLoading}
                  >
                    <Chrome className="h-5 w-5 mr-2" />
                    Continue with Google
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Quick demo login - connects to admin account
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowAccounts(!showAccounts)}
                className="w-full"
              >
                {showAccounts ? 'Hide' : 'Show'} Available Accounts
              </Button>
            </div>
          </div>
        </div>

        {/* Available Accounts */}
        <div className={`transition-all duration-300 ${showAccounts ? 'opacity-100' : 'opacity-0 lg:opacity-100'}`}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Available Test Accounts
              </CardTitle>
              <CardDescription>
                Click any account to login instantly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 max-h-96 overflow-y-auto">
              {/* Admin Accounts */}
              <div>
                <div className="flex items-center mb-3">
                  <Crown className="h-4 w-4 text-yellow-500 mr-2" />
                  <h3 className="font-semibold">Administrators ({adminUsers.length})</h3>
                </div>
                <div className="grid gap-2">
                  {adminUsers.slice(0, 5).map((user) => (
                    <Button
                      key={user.id}
                      variant="outline"
                      className="justify-start h-auto p-3"
                      onClick={() => handleQuickLogin(user)}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: user.bannerColor }}
                        >
                          {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div className="text-left flex-1">
                          <div className="font-medium">{user.firstName} {user.lastName}</div>
                          <div className="text-xs text-muted-foreground">@{user.username} | {user.employeeId}</div>
                        </div>
                        <Badge variant="default" className="ml-auto">
                          <Shield className="h-3 w-3 mr-1" />
                          Admin
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Employee Accounts */}
              <div>
                <div className="flex items-center mb-3">
                  <User className="h-4 w-4 text-blue-500 mr-2" />
                  <h3 className="font-semibold">Employees ({employeeUsers.length})</h3>
                </div>
                <div className="grid gap-2">
                  {employeeUsers.slice(0, 5).map((user) => (
                    <Button
                      key={user.id}
                      variant="outline"
                      className="justify-start h-auto p-3"
                      onClick={() => handleQuickLogin(user)}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: user.bannerColor }}
                        >
                          {user.firstName[0]}{user.lastName[0]}
                        </div>
                        <div className="text-left flex-1">
                          <div className="font-medium">{user.firstName} {user.lastName}</div>
                          <div className="text-xs text-muted-foreground">@{user.username} | {user.employeeId}</div>
                        </div>
                        <Badge variant="secondary">
                          <User className="h-3 w-3 mr-1" />
                          Employee
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground border-t pt-4">
                Total: {users.length} accounts available
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
