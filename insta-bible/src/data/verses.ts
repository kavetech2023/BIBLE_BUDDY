import { Verse } from '../types/verse';

export const verses: Verse[] = [
  {
    id: '1',
    reference: 'Philippians 4:13',
    content: 'I can do all things through Christ who strengthens me.',
    explanation: 'This verse reminds us that our strength comes from Christ, not ourselves. When we face challenges, we can rely on His power rather than our own abilities.',
    likes: 1234,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    timestamp: '2h ago'
  },
  {
    id: '2',
    reference: 'Psalm 23:1-3',
    content: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.',
    explanation: "These verses paint a beautiful picture of God's care for us. Like a shepherd caring for his sheep, God provides rest, peace, and restoration for our souls.",
    likes: 892,
    author: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    timestamp: '5h ago'
  }
];