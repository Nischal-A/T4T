
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Filter } from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      title: 'Monthly Department Report',
      description: 'Comprehensive overview of all department activities',
      date: '2024-01-15',
      status: 'completed',
      size: '2.4 MB'
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed performance metrics and KPI analysis',
      date: '2024-01-14',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      title: 'User Engagement Report',
      description: 'User activity patterns and engagement statistics',
      date: '2024-01-13',
      status: 'processing',
      size: '3.1 MB'
    },
    {
      title: 'Financial Summary',
      description: 'Revenue, costs, and financial performance overview',
      date: '2024-01-12',
      status: 'completed',
      size: '1.2 MB'
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background page-enter">
      <DashboardHeader />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Reports Center</h1>
          <p className="text-muted-foreground">Generate, view, and download comprehensive reports</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button className="glow-effect">
            <FileText className="h-4 w-4 mr-2" />
            Generate New Report
          </Button>
          <Button variant="outline" className="smooth-hover">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button variant="outline" className="smooth-hover">
            <Filter className="h-4 w-4 mr-2" />
            Filter Reports
          </Button>
        </div>

        <div className="grid gap-4">
          {reports.map((report, index) => (
            <Card key={report.title} className="card-hover animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-foreground">{report.title}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    <p>Generated: {report.date}</p>
                    <p>Size: {report.size}</p>
                  </div>
                  {report.status === 'completed' && (
                    <Button size="sm" variant="outline" className="smooth-hover">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Reports;
