import React from 'react';
import { Header } from './components/Header';
import { VerseCard } from './components/VerseCard';
import { verses } from './data/verses';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-10">
        {verses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))}
      </main>
    </div>
  );
}

export default App;