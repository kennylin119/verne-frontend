import { Menu, Volume2, Star, Pencil, Mic, X} from 'lucide-react';
import { useState } from 'react';
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#3e2723] to-[#1b1b1b] text-white px-1 py-2"> 
      {/* nav button */}
      <div className="p-4">
        <button className="p-2 rounded-full bg-[#F5E8C7]/90">
          <Menu size={20} strokeWidth={2} className="text-[#322B26]"/>
        </button>
      </div>
      <main className="flex-1 overflow-y-auto px-6">
        {/* question */}
        <h2 className="flex items-center gap-2 mb-4 w-full justify-end">
          <Pencil size={22} strokeWidth={2} className="p-1 border border-current rounded-full"/>
          "How do you play Verne?"
        </h2>
        {/* answer */}
        <p className="leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
        {/* mute + save icons */}
        <div className="flex items-center gap-2 mb-4">
          <button className="p-1 border border-current rounded-full">
            <Volume2 size={18} strokeWidth={2} />
          </button>
          <button>
            <Star size={22} strokeWidth={2} />
          </button>
        </div>
      </main>

      {/* text input, need to change to only appear after text button tapped */}
      <footer className="px-4 pb-5">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="What does th"
            className="flex-1 p-2 bg-[#322B26] border border-[#F5E8C7]/90 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F5E8C7]/90"
          />
          <button className="p-2 ml-[-44px] relative z-10 rounded-full">
            <X size={16} strokeWidth={2} />
          </button>
          <button className="p-2 bg-[#F5E8C7]/90 rounded-full">
            <Mic size={20} strokeWidth={2} className="text-[#322B26]" />
          </button>
        </div>
      </footer>
    </div>
  );
}


export default App;
