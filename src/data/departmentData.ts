
export const departmentData = [
  {
    id: 'sales',
    name: 'Sales Department',
    status: 'good' as const,
    pendingTasks: 12,
    completedTasks: 89,
    totalTasks: 101,
    activeMembers: 8,
    totalMembers: 10,
    lastUpdated: '2 minutes ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'New lead assigned to John Smith',
          timestamp: '5 minutes ago',
          user: 'Sarah Johnson'
        },
        {
          id: '2',
          action: 'Deal closed - $15,000 value',
          timestamp: '1 hour ago',
          user: 'Mike Davis'
        },
        {
          id: '3',
          action: 'Follow-up call scheduled',
          timestamp: '2 hours ago',
          user: 'Emily Wilson'
        }
      ],
      metrics: [
        { label: 'Monthly Revenue', value: '$245,000', trend: 'up' as const },
        { label: 'Conversion Rate', value: '24%', trend: 'up' as const },
        { label: 'Pipeline Value', value: '$450,000', trend: 'stable' as const },
        { label: 'Avg Deal Size', value: '$12,500', trend: 'up' as const }
      ]
    }
  },
  {
    id: 'marketing',
    name: 'Marketing Department',
    status: 'warning' as const,
    pendingTasks: 25,
    completedTasks: 67,
    totalTasks: 92,
    activeMembers: 6,
    totalMembers: 8,
    lastUpdated: '5 minutes ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'Campaign performance review completed',
          timestamp: '10 minutes ago',
          user: 'Alex Thompson'
        },
        {
          id: '2',
          action: 'Social media posts scheduled',
          timestamp: '30 minutes ago',
          user: 'Lisa Chen'
        },
        {
          id: '3',
          action: 'Budget approval pending',
          timestamp: '1 hour ago',
          user: 'David Park'
        }
      ],
      metrics: [
        { label: 'Campaign ROI', value: '340%', trend: 'up' as const },
        { label: 'Lead Generation', value: '156 leads', trend: 'down' as const },
        { label: 'Website Traffic', value: '+18%', trend: 'up' as const },
        { label: 'Email Open Rate', value: '22%', trend: 'stable' as const }
      ]
    }
  },
  {
    id: 'it',
    name: 'IT Department',
    status: 'critical' as const,
    pendingTasks: 34,
    completedTasks: 45,
    totalTasks: 79,
    activeMembers: 4,
    totalMembers: 6,
    lastUpdated: '1 minute ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'Server maintenance scheduled',
          timestamp: '3 minutes ago',
          user: 'Tom Rodriguez'
        },
        {
          id: '2',
          action: 'Security patch deployed',
          timestamp: '15 minutes ago',
          user: 'Anna Kim'
        },
        {
          id: '3',
          action: 'Backup system failure reported',
          timestamp: '45 minutes ago',
          user: 'System Alert'
        }
      ],
      metrics: [
        { label: 'System Uptime', value: '97.2%', trend: 'down' as const },
        { label: 'Support Tickets', value: '23 open', trend: 'up' as const },
        { label: 'Response Time', value: '2.4 hours', trend: 'down' as const },
        { label: 'Security Score', value: '89%', trend: 'stable' as const }
      ]
    }
  },
  {
    id: 'hr',
    name: 'Human Resources',
    status: 'good' as const,
    pendingTasks: 8,
    completedTasks: 52,
    totalTasks: 60,
    activeMembers: 3,
    totalMembers: 4,
    lastUpdated: '10 minutes ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'New employee onboarding completed',
          timestamp: '20 minutes ago',
          user: 'Jennifer Lee'
        },
        {
          id: '2',
          action: 'Performance review scheduled',
          timestamp: '1 hour ago',
          user: 'Mark Wilson'
        },
        {
          id: '3',
          action: 'Training program updated',
          timestamp: '3 hours ago',
          user: 'Susan Brown'
        }
      ],
      metrics: [
        { label: 'Employee Satisfaction', value: '87%', trend: 'up' as const },
        { label: 'Retention Rate', value: '94%', trend: 'stable' as const },
        { label: 'Time to Hire', value: '18 days', trend: 'down' as const },
        { label: 'Training Completion', value: '92%', trend: 'up' as const }
      ]
    }
  },
  {
    id: 'finance',
    name: 'Finance Department',
    status: 'good' as const,
    pendingTasks: 15,
    completedTasks: 78,
    totalTasks: 93,
    activeMembers: 5,
    totalMembers: 6,
    lastUpdated: '3 minutes ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'Monthly budget review completed',
          timestamp: '1 hour ago',
          user: 'Robert Clark'
        },
        {
          id: '2',
          action: 'Invoice processing automated',
          timestamp: '2 hours ago',
          user: 'Maria Garcia'
        },
        {
          id: '3',
          action: 'Expense report approved',
          timestamp: '4 hours ago',
          user: 'James Taylor'
        }
      ],
      metrics: [
        { label: 'Cash Flow', value: '+$125k', trend: 'up' as const },
        { label: 'Budget Variance', value: '-2.1%', trend: 'stable' as const },
        { label: 'Processing Time', value: '1.2 days', trend: 'down' as const },
        { label: 'Cost Savings', value: '$45k', trend: 'up' as const }
      ]
    }
  },
  {
    id: 'operations',
    name: 'Operations',
    status: 'warning' as const,
    pendingTasks: 19,
    completedTasks: 63,
    totalTasks: 82,
    activeMembers: 7,
    totalMembers: 9,
    lastUpdated: '7 minutes ago',
    details: {
      recentActivity: [
        {
          id: '1',
          action: 'Supply chain optimization review',
          timestamp: '30 minutes ago',
          user: 'Kevin Zhang'
        },
        {
          id: '2',
          action: 'Quality control check completed',
          timestamp: '1.5 hours ago',
          user: 'Rachel Green'
        },
        {
          id: '3',
          action: 'Inventory level alert triggered',
          timestamp: '2 hours ago',
          user: 'System Alert'
        }
      ],
      metrics: [
        { label: 'Efficiency Rate', value: '92%', trend: 'stable' as const },
        { label: 'Delivery Time', value: '3.2 days', trend: 'up' as const },
        { label: 'Quality Score', value: '96%', trend: 'up' as const },
        { label: 'Cost per Unit', value: '$12.40', trend: 'down' as const }
      ]
    }
  }
];
