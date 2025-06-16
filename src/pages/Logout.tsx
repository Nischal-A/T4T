
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Logged Out Successfully</h1>
            <p className="text-slate-600">You have been safely logged out of Department Monitor</p>
          </div>

          <div className="space-y-4">
            <Button 
              onClick={handleBackToLogin}
              className="w-full"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign In Again
            </Button>
            
            <div className="text-sm text-slate-500">
              Thank you for using Department Monitor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
