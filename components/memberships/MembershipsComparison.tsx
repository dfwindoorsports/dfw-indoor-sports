import React from 'react';

const MembershipsComparison: React.FC = () => {
  return (
    <section aria-label="Membership plan comparison" className="py-24 bg-white relative transition-colors duration-300">
       <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-header font-bold text-dfw-navy uppercase mb-12 text-center">Feature Comparison</h2>
          
          <div className="overflow-x-auto">
             <table className="w-full min-w-[900px] border-collapse">
                <thead>
                   <tr>
                      <th className="p-4 text-left border-b-2 border-dfw-navy/10 w-1/4"></th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 font-header font-bold text-dfw-navy uppercase tracking-wider">Badminton Unl.</th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 font-header font-bold text-dfw-navy uppercase tracking-wider">Cricket Unl.</th>
                      <th className="p-4 text-center border-b-2 border-dfw-red bg-dfw-navy text-white font-header font-bold uppercase tracking-wider rounded-t-lg">Gold Member</th>
                      <th className="p-4 text-center border-b-2 border-dfw-navy/10 font-header font-bold text-dfw-navy uppercase tracking-wider">Family Gold</th>
                   </tr>
                </thead>
                <tbody className="text-sm">
                   {[
                      { feature: "Commitment", bad: "6mo / Monthly", cric: "Monthly", gold: "6mo / Monthly", fam: "6 Months" },
                      { feature: "Cricket Access", bad: "---", cric: "Unlimited", gold: "Unlimited", fam: "Unlimited" },
                      { feature: "Badminton Access", bad: "Unlimited", cric: "---", gold: "Unlimited", fam: "Unlimited" },
                      { feature: "Bowling Machine", bad: "N/A", cric: "Included", gold: "Included", fam: "Included" },
                      { feature: "Members Covered", bad: "1 Adult", cric: "1 Adult", gold: "1 Adult", fam: "2 Adults + 2 Kids" },
                      { feature: "Coaching Discount", bad: "---", cric: "10%", gold: "10%", fam: "10% / Student" },
                      { feature: "Daily 5AM-11PM", bad: "Yes", cric: "Yes", gold: "Yes", fam: "Yes" },
                      { feature: "No Court/Lane Fees", bad: "Yes", cric: "Yes", gold: "Yes", fam: "Yes" },
                   ].map((row, i) => (
                      <tr key={i} className={`hover:bg-gray-50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}>
                         <td className="p-4 font-medium text-gray-700 border-b border-gray-100">{row.feature}</td>
                         <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.bad}</td>
                         <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.cric}</td>
                         <td className="p-4 text-center font-bold text-dfw-navy border-b border-gray-100 bg-dfw-red/5 border-l border-r border-dfw-red/10">{row.gold}</td>
                         <td className="p-4 text-center text-gray-600 border-b border-gray-100">{row.fam}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </section>
  );
};

export default MembershipsComparison;