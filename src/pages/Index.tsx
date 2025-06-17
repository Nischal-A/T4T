
import { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Navigation } from '@/components/Navigation';
import { DepartmentCard } from '@/components/DepartmentCard';
import { departmentData } from '@/data/departmentData';

const Index = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (departmentId: string) => {
    setExpandedCard(expandedCard === departmentId ? null : departmentId);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background page-enter">
      <DashboardHeader />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Department Overview</h1>
          <p className="text-muted-foreground">Monitor the status and performance of all departments in real-time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {departmentData.map((department, index) => (
            <div 
              key={department.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DepartmentCard
                department={department}
                isExpanded={expandedCard === department.id}
                onClick={() => handleCardClick(department.id)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
