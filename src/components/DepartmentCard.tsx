
import { ChevronDown, ChevronUp, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Department {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'critical';
  pendingTasks: number;
  completedTasks: number;
  totalTasks: number;
  activeMembers: number;
  totalMembers: number;
  lastUpdated: string;
  details: {
    recentActivity: Array<{
      id: string;
      action: string;
      timestamp: string;
      user: string;
    }>;
    metrics: Array<{
      label: string;
      value: string;
      trend: 'up' | 'down' | 'stable';
    }>;
  };
}

interface DepartmentCardProps {
  department: Department;
  isExpanded: boolean;
  onClick: () => void;
}

export const DepartmentCard = ({ department, isExpanded, onClick }: DepartmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800 border-green-200';
      case 'warning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const completionRate = Math.round((department.completedTasks / department.totalTasks) * 100);

  return (
    <Card className={cn(
      "cursor-pointer transition-all duration-300 hover:shadow-lg border-l-4",
      department.status === 'good' && "border-l-green-500",
      department.status === 'warning' && "border-l-yellow-500",
      department.status === 'critical' && "border-l-red-500",
      isExpanded && "md:col-span-2 xl:col-span-3"
    )}>
      <CardHeader className="pb-3" onClick={onClick}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h3 className="text-lg font-semibold text-slate-800">{department.name}</h3>
            <Badge className={cn("border", getStatusColor(department.status))}>
              {getStatusIcon(department.status)}
              <span className="ml-1 capitalize">{department.status}</span>
            </Badge>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-slate-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-500" />
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Pending</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">{department.pendingTasks}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-slate-500" />
              <span className="text-sm text-slate-600">Active</span>
            </div>
            <p className="text-2xl font-bold text-slate-800">
              {department.activeMembers}/{department.totalMembers}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-600">Completion Rate</span>
            <span className="text-sm font-medium text-slate-800">{completionRate}%</span>
          </div>
          <Progress value={completionRate} className="h-2" />
        </div>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  {department.details.recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-800">{activity.action}</p>
                        <p className="text-xs text-slate-500 mt-1">
                          {activity.user} • {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Metrics</h4>
                <div className="space-y-4">
                  {department.details.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                      <span className="text-sm text-slate-600">{metric.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-slate-800">{metric.value}</span>
                        <div className={cn(
                          "h-2 w-2 rounded-full",
                          metric.trend === 'up' && "bg-green-500",
                          metric.trend === 'down' && "bg-red-500",
                          metric.trend === 'stable' && "bg-yellow-500"
                        )}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">
                Last updated: {department.lastUpdated}
              </span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                  Edit Data
                </button>
                <button className="px-3 py-1 text-xs bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>
        )}

        {!isExpanded && (
          <p className="text-xs text-slate-500 mt-3">
            Last updated: {department.lastUpdated}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
