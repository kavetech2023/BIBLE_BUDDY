export interface Verse {
    id: string;
    reference: string;
    content: string;
    explanation: string;
    likes: number;
    author: {
      name: string;
      avatar: string;
    };
    timestamp: string;
  }