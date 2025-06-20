
import { useState, useEffect } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ImageUpload } from '@/components/ImageUpload';
import { ColorPicker } from '@/components/ColorPicker';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { User } from 'lucide-react';

const Profile = () => {
  const { toast } = useToast();
  const { currentUser, updateUser } = useAuth();
  
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    employeeId: '',
    startDate: '',
    avatar: '',
    bannerColor: '#3b82f6',
    accentColor: '#10b981'
  });

  // Initialize profile data from current user
  useEffect(() => {
    if (currentUser) {
      setProfileData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phone: currentUser.phone,
        jobTitle: currentUser.jobTitle,
        department: currentUser.department,
        employeeId: currentUser.employeeId,
        startDate: currentUser.startDate,
        avatar: currentUser.avatar,
        bannerColor: currentUser.bannerColor,
        accentColor: currentUser.accentColor
      });
    }
  }, [currentUser]);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    if (!currentUser) return;

    // Update the user in the AuthContext
    updateUser(profileData);

    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully"
    });
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background dark:bg-background page-enter">
      <DashboardHeader />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {/* Profile Banner Section */}
          <Card className="card-hover animate-scale-in">
            <CardHeader>
              <CardTitle className="text-foreground">Profile Banner</CardTitle>
              <CardDescription>Customize your profile appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="h-32 rounded-lg mb-4 relative"
                style={{ backgroundColor: profileData.bannerColor }}
              >
                <div className="absolute bottom-4 left-4">
                  <Avatar className="h-16 w-16 border-4 border-white">
                    <AvatarImage src={profileData.avatar} />
                    <AvatarFallback className="text-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ColorPicker
                  label="Banner Color"
                  value={profileData.bannerColor}
                  onChange={(color) => handleInputChange('bannerColor', color)}
                />
                <ColorPicker
                  label="Accent Color"
                  value={profileData.accentColor}
                  onChange={(color) => handleInputChange('accentColor', color)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Avatar Upload Section */}
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Profile Picture</CardTitle>
              <CardDescription>Upload and customize your avatar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profileData.avatar} />
                  <AvatarFallback className="text-2xl">
                    {profileData.firstName[0]}{profileData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <ImageUpload
                    currentImage={profileData.avatar}
                    onImageChange={(imageUrl) => handleInputChange('avatar', imageUrl)}
                    className="max-w-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-foreground">First Name</Label>
                  <Input 
                    id="first-name" 
                    value={profileData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-foreground">Last Name</Label>
                  <Input 
                    id="last-name" 
                    value={profileData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input 
                    id="phone" 
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Information */}
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Work Information</CardTitle>
              <CardDescription>Your role and department details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title" className="text-foreground">Job Title</Label>
                  <Input 
                    id="job-title" 
                    value={profileData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-foreground">Department</Label>
                  <Input 
                    id="department" 
                    value={profileData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-id" className="text-foreground">Employee ID</Label>
                  <Input 
                    id="employee-id" 
                    value={profileData.employeeId}
                    onChange={(e) => handleInputChange('employeeId', e.target.value)}
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-foreground">Start Date</Label>
                  <Input 
                    id="start-date" 
                    type="date"
                    value={profileData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <Card className="card-hover animate-scale-in" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Activity Summary</CardTitle>
              <CardDescription>Your recent activity and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: `${profileData.accentColor}20`, borderColor: profileData.accentColor, borderWidth: '1px' }}
                >
                  <div className="text-2xl font-bold text-foreground">156</div>
                  <div className="text-sm text-muted-foreground">Reports Generated</div>
                </div>
                <div 
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: `${profileData.accentColor}20`, borderColor: profileData.accentColor, borderWidth: '1px' }}
                >
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div 
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: `${profileData.accentColor}20`, borderColor: profileData.accentColor, borderWidth: '1px' }}
                >
                  <div className="text-2xl font-bold text-foreground">89%</div>
                  <div className="text-sm text-muted-foreground">Performance Score</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-4">
            <Button 
              className="glow-effect" 
              onClick={handleSaveProfile}
              style={{ backgroundColor: profileData.accentColor }}
            >
              <User className="h-4 w-4 mr-2" />
              Update Profile
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
