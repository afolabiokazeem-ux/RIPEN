import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, Users, PlusCircle, CalendarSync, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

export default function AjoScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [selectedGroup, setSelectedGroup] = useState<any>(null);

  const TopBar = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => selectedGroup ? setSelectedGroup(null) : navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );

  const groups = [
    { id: 1, name: "Market Women Àjọ", members: 12, contribution: "₦10,000/week", payout: "₦120,000", nextTurn: "Mama Nkechi", myTurn: "Week 4", image: "https://api.dicebear.com/7.x/shapes/svg?seed=market" },
    { id: 2, name: "Transport Union", members: 20, contribution: "₦5,000/day", payout: "₦100,000", nextTurn: "Babatunde", myTurn: "Day 15", image: "https://api.dicebear.com/7.x/shapes/svg?seed=transport" },
    { id: 3, name: "Family Savings Circle", members: 5, contribution: "₦50,000/month", payout: "₦250,000", nextTurn: "Me", myTurn: "Next Week", image: "https://api.dicebear.com/7.x/shapes/svg?seed=family" },
  ];

  if (selectedGroup) {
    return (
      <div className="min-h-screen bg-neutral-50 pb-20">
        <TopBar title={selectedGroup.name} />
        <div className="p-4 space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm text-center border border-neutral-100">
            <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto flex items-center justify-center mb-4">
               <img src={selectedGroup.image} alt="Group" className="w-12 h-12" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{selectedGroup.payout}</h2>
            <p className="text-neutral-500">Total Group Payout</p>
            
            <div className="bg-neutral-50 rounded-2xl p-4 mt-6 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-neutral-500">My Contribution</span>
                <span className="font-bold">{selectedGroup.contribution}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-neutral-500">My Turn For Payout</span>
                <span className="font-bold text-green-600">{selectedGroup.myTurn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Total Members</span>
                <span className="font-bold">{selectedGroup.members} Members</span>
              </div>
            </div>

            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('Contribution deducted successfully!');
                setSelectedGroup(null);
              }}
              className="w-full bg-pink-600 text-white font-bold h-14 rounded-full mt-6 flex items-center justify-center gap-2"
            >
               Pay Contribution ({selectedGroup.contribution.split('/')[0]})
            </motion.button>
          </div>

          <h3 className="font-bold text-lg mt-6 px-2">Payout Schedule</h3>
          <div className="bg-white rounded-3xl p-4 border border-neutral-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">1</div>
                <div><p className="font-bold">Next Week</p><p className="text-sm text-neutral-500">Me</p></div>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">Receives {selectedGroup.payout}</div>
            </div>
            <div className="flex items-center justify-between opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">2</div>
                <div><p className="font-bold">In 2 Weeks</p><p className="text-sm text-neutral-500">Mama Nkechi</p></div>
              </div>
              <div className="text-xs font-bold text-neutral-400">Waiting</div>
            </div>
            <div className="flex items-center justify-between opacity-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">3</div>
                <div><p className="font-bold">In 3 Weeks</p><p className="text-sm text-neutral-500">Iya Oyo</p></div>
              </div>
              <div className="text-xs font-bold text-neutral-400">Waiting</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <TopBar title="Digital Àjọ" />
      
      <div className="p-4 space-y-6">
        
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          <p className="font-medium text-pink-100 mb-1">Total Àjọ Built</p>
          <h2 className="text-4xl font-bold mb-4">₦120,000</h2>
          <div className="flex gap-4">
             <button className="bg-white/20 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 backdrop-blur-sm">
                <PlusCircle size={16}/> Create Group
             </button>
             <button className="bg-white text-pink-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
                <Users size={16}/> Join Group
             </button>
          </div>
        </div>

        <h3 className="font-bold text-neutral-800 text-lg px-1">My Savings Groups</h3>
        
        <div className="space-y-4">
          {groups.map((group) => (
             <motion.div 
               whileTap={{ scale: 0.98 }}
               key={group.id} 
               onClick={() => setSelectedGroup(group)}
               className="bg-white p-4 rounded-3xl shadow-sm border border-neutral-100 flex items-center gap-4 cursor-pointer"
             >
               <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center p-2 shrink-0">
                 <img src={group.image} alt="" className="w-full h-full" />
               </div>
               <div className="flex-1">
                 <h4 className="font-bold text-neutral-800 text-lg whitespace-nowrap overflow-hidden text-ellipsis">{group.name}</h4>
                 <p className="text-sm text-neutral-500 flex items-center gap-1">
                   <CalendarSync size={14} /> {group.contribution}
                 </p>
               </div>
               <div className="text-right">
                 <p className="font-bold text-green-600">Pending</p>
                 <p className="text-xs text-neutral-400">{group.payout}</p>
               </div>
             </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
