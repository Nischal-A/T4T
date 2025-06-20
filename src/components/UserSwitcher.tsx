
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Crown, Search, Shield, Users } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { users } from '@/data/users';

interface UserSwitcherProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserSwitcher = ({ isOpen, onClose }: UserSwitcherProps) => {
  const { currentUser, switchUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserSwitch = (userId: string) => {
    switchUser(userId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Switch User Account</h2>
            <Button variant="outline" onClick={onClose}>Close</Button>
          </div>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users by name, username, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {filteredUsers.map((user) => (
              <Card 
                key={user.id} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  currentUser?.id === user.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleUserSwitch(user.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback style={{ backgroundColor: user.bannerColor }}>
                        {user.firstName[0]}{user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground">
                          {user.firstName} {user.lastName}
                        </span>
                        {user.role === 'admin' && (
                          <Crown className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                        {user.role === 'admin' ? (
                          <><Shield className="h-3 w-3 mr-1" /> Admin</>
                        ) : (
                          <><User className="h-3 w-3 mr-1" /> Employee</>
                        )}
                      </Badge>
                      {currentUser?.id === user.id && (
                        <Badge variant="outline">Current</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.jobTitle}</p>
                    <p className="text-xs text-muted-foreground">{user.department}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
            <span>{filteredUsers.length} users found</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Crown className="h-4 w-4 text-yellow-500" />
                <span>{users.filter(u => u.role === 'admin').length} Admins</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-500" />
                <span>{users.filter(u => u.role === 'employee').length} Employees</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
