import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, LogIn } from 'lucide-react';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication when component mounts
    localStorage.removeItem('isAuthenticated');
  }, []);

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background flex items-center justify-center px-4 page-enter">
      <div className="w-full max-w-md">
        <div className="bg-card dark:bg-card rounded-lg shadow-lg p-8 text-center dark:carbon-fiber card-hover">
          <div className="mb-6 animate-fade-in">
            <CheckCircle className="h-16 w-16 text-green-500 dark:text-green-400 mx-auto mb-4 animate-bounce-gentle" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Logged Out Successfully</h1>
            <p className="text-muted-foreground">You have been safely logged out of Department Monitor</p>
          </div>

          <div className="space-y-4 animate-scale-in" style={{ animationDelay: '200ms' }}>
            <Button 
              onClick={handleBackToLogin}
              className="w-full glow-effect"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In Again
            </Button>
            
            <div className="text-sm text-muted-foreground">
              Thank you for using Department Monitor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
