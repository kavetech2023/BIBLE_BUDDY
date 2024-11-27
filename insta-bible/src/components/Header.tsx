import React from 'react';
import { Book, PlusCircle, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Book className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl font-semibold">DailyVerse</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <PlusCircle className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <Bell className="w-6 h-6" />
            </button>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}