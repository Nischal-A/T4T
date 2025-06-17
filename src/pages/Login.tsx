import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lock, User } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple authentication check
    if (username === 'admin' && password === 'dashboard123') {
      localStorage.setItem('isAuthenticated', 'true');
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

  return (
    <div className="min-h-screen bg-background dark:bg-background flex items-center justify-center px-4 page-enter">
      <div className="w-full max-w-md">
        <div className="bg-card dark:bg-card rounded-lg shadow-lg p-8 dark:carbon-fiber card-hover">
          <div className="text-center mb-8 animate-fade-in">
            <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 glow-effect">
              <span className="text-white font-bold text-lg">DM</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Department Monitor</h1>
            <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
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
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-8 p-4 bg-muted rounded-lg animate-scale-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-sm font-semibold text-foreground mb-2">Test Credentials:</h3>
            <p className="text-xs text-muted-foreground">Username: <span className="font-mono bg-background px-1 rounded">admin</span></p>
            <p className="text-xs text-muted-foreground">Password: <span className="font-mono bg-background px-1 rounded">dashboard123</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
