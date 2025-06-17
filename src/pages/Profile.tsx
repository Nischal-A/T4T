
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';

const Profile = () => {
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
          <Card className="card-hover animate-scale-in">
            <CardHeader>
              <CardTitle className="text-foreground">Personal Information</CardTitle>
              <CardDescription>Update your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6 mb-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <Button size="sm" variant="secondary" className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">John Doe</h3>
                  <p className="text-muted-foreground">Department Administrator</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-foreground">First Name</Label>
                  <Input id="first-name" value="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-foreground">Last Name</Label>
                  <Input id="last-name" value="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" value="john.doe@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone</Label>
                  <Input id="phone" value="+1 (555) 123-4567" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Work Information</CardTitle>
              <CardDescription>Your role and department details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title" className="text-foreground">Job Title</Label>
                  <Input id="job-title" value="Department Administrator" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-foreground">Department</Label>
                  <Input id="department" value="IT Operations" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-id" className="text-foreground">Employee ID</Label>
                  <Input id="employee-id" value="EMP-2024-001" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-foreground">Start Date</Label>
                  <Input id="start-date" value="2020-01-15" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Activity Summary</CardTitle>
              <CardDescription>Your recent activity and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">156</div>
                  <div className="text-sm text-muted-foreground">Reports Generated</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">23</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-foreground">89%</div>
                  <div className="text-sm text-muted-foreground">Performance Score</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end pt-4">
            <Button className="glow-effect">
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
