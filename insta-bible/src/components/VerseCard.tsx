import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { Verse } from '../types/verse';

interface VerseCardProps {
  verse: Verse;
}

export function VerseCard({ verse }: VerseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <img
            src={verse.author.avatar}
            alt={verse.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold">{verse.author.name}</p>
            <p className="text-sm text-gray-500">{verse.timestamp}</p>
          </div>
        </div>
      </div>
      
      <div className="flex">
        <div className="w-1/2 p-6 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{verse.reference}</h2>
            <p className="text-gray-700 leading-relaxed">{verse.content}</p>
          </div>
        </div>
        
        <div className="w-1/2 p-6">
          <p className="text-gray-600 leading-relaxed">{verse.explanation}</p>
        </div>
      </div>
      
      <div className="px-4 py-3 border-t">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>{verse.likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}