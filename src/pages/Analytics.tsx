
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    {
      title: 'Total Users',
      value: '12,345',
      change: '+12%',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8%',
      icon: DollarSign,
      color: 'text-green-500'
    },
    {
      title: 'Growth Rate',
      value: '23.5%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-purple-500'
    },
    {
      title: 'Analytics Score',
      value: '89.2',
      change: '+3%',
      icon: BarChart3,
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background page-enter">
      <DashboardHeader />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.title} className="card-hover animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    {metric.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-foreground">Performance Overview</CardTitle>
              <CardDescription>Key performance indicators and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">Chart Placeholder - Performance Data</p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-foreground">User Engagement</CardTitle>
              <CardDescription>User activity and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-lg">
                <p className="text-muted-foreground">Chart Placeholder - Engagement Data</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
