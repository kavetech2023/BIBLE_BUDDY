import React from 'react';

interface VerseContentProps {
  reference: string;
  content: string;
}

export function VerseContent({ reference, content }: VerseContentProps) {
  return (
    <div className="text-center p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">{reference}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}