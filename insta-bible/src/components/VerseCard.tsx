import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Verse } from '../types/verse';
import { Button } from './ui/Button';
import { Avatar } from './ui/Avatar';
import { VerseContent } from './VerseContent';

interface VerseCardProps {
  verse: Verse;
}

export function VerseCard({ verse }: VerseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <Avatar src={verse.author.avatar} alt={verse.author.name} />
          <div className="ml-3">
            <p className="font-semibold">{verse.author.name}</p>
            <p className="text-sm text-gray-500">{verse.timestamp}</p>
          </div>
        </div>
      </div>
      
      <VerseContent reference={verse.reference} content={verse.content} />
      
      <div className="border-t">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-50 flex items-center justify-between"
        >
          <span className="font-medium">
            {isExpanded ? "Hide Explanation" : "Show Explanation"}
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
        
        {isExpanded && (
          <div className="px-6 py-4 border-t bg-white">
            <p className="text-gray-600 leading-relaxed">{verse.explanation}</p>
          </div>
        )}
      </div>
      
      <div className="px-4 py-3 border-t">
        <div className="flex items-center space-x-4">
          <Button
            variant="default"
            className="hover:text-red-500"
          >
            <Heart className="w-5 h-5" />
            <span>{verse.likes}</span>
          </Button>
          <Button
            variant="default"
            className="hover:text-blue-500"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button
            variant="default"
            className="hover:text-green-500"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}