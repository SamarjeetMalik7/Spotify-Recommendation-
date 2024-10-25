import React, { useState } from 'react';
import { Search, Music2 } from 'lucide-react';

function App() {
  const [word, setWord] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const generateRecommendations = (searchWord: string) => {
    const songsByMood: Record<string, string[]> = {
      happy: [
        "Don't Stop Believin' - Journey",
        "Happy - Pharrell Williams",
        "Walking on Sunshine - Katrina & The Waves",
        "I Wanna Dance with Somebody - Whitney Houston",
        "Uptown Funk - Mark Ronson ft. Bruno Mars"
      ],
      sad: [
        "Someone Like You - Adele",
        "All By Myself - Celine Dion",
        "Yesterday - The Beatles",
        "Hurt - Johnny Cash",
        "The Sound of Silence - Simon & Garfunkel"
      ],
      love: [
        "All of Me - John Legend",
        "Perfect - Ed Sheeran",
        "At Last - Etta James",
        "Can't Help Falling in Love - Elvis Presley",
        "Make You Feel My Love - Adele"
      ],
      energetic: [
        "Eye of the Tiger - Survivor",
        "Thunderstruck - AC/DC",
        "Stronger - Kanye West",
        "Can't Hold Us - Macklemore & Ryan Lewis",
        "Shake It Off - Taylor Swift"
      ],
      chill: [
        "Somewhere Over the Rainbow - Israel Kamakawiwo'ole",
        "Three Little Birds - Bob Marley",
        "Sunday Morning - Maroon 5",
        "Banana Pancakes - Jack Johnson",
        "Here Comes the Sun - The Beatles"
      ]
    };

    // Default to random songs if mood not found
    const defaultSongs = [
      "Bohemian Rhapsody - Queen",
      "Imagine - John Lennon",
      "Billie Jean - Michael Jackson",
      "Sweet Child O' Mine - Guns N' Roses",
      "Like a Rolling Stone - Bob Dylan"
    ];

    const mood = searchWord.toLowerCase();
    return songsByMood[mood] || defaultSongs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim()) {
      setRecommendations(generateRecommendations(word));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Music2 className="w-12 h-12 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800 ml-3">MoodTunes</h1>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter a mood (e.g., happy, sad, love)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pl-12"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get Recommendations
          </button>
        </form>

        {recommendations.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Your Music Recommendations:
            </h2>
            <ul className="space-y-3">
              {recommendations.map((song, index) => (
                <li
                  key={index}
                  className="p-3 bg-purple-50 rounded-lg flex items-center"
                >
                  <Music2 className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">{song}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;