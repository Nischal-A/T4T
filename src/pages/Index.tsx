
import { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { DepartmentCard } from '@/components/DepartmentCard';
import { departmentData } from '@/data/departmentData';

const Index = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (departmentId: string) => {
    setExpandedCard(expandedCard === departmentId ? null : departmentId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Department Overview</h1>
          <p className="text-slate-600">Monitor the status and performance of all departments in real-time</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {departmentData.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
              isExpanded={expandedCard === department.id}
              onClick={() => handleCardClick(department.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
