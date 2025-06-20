import { Menu, Volume2, Star, Pencil, Mic, X, Type} from 'lucide-react';
import { useState } from 'react';
import './App.css'

function App() {
  const [showInputBar, setShowInputBar] = useState(false);
  const [inputText, setInputText] = useState('');
  const [questions, setQuestions] = useState([]);
  // const [answers, setAnswers] = useState([]);

  // when user presses enter, if inputText is not empty, add it to questions array and clear inputText
  const handleEnter = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      setQuestions((prev) => [...prev, inputText.trim()]);
      setInputText('');
      setShowInputBar(false);
    }
  }

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-[#694A4A] to-[#221C1C] text-[#FFF4D7] text-lg font-Caudex px-1 py-2"> 
      {/* nav button */}
      <div className="p-4">
        <button className="p-2 rounded-full bg-[#F5E8C7]/90">
          <Menu size={20} strokeWidth={2} className="text-[#322B26]"/>
        </button>
      </div>
      <main className="flex-1 overflow-y-auto px-6">
        {/* question */}
        <h2 className="flex items-center gap-2 mb-10 w-full justify-end text-[#FFFFFF]">
          <Pencil size={22} strokeWidth={2} className="p-1 border border-current rounded-full"/>
          "How do you play Verne?"
        </h2>
        {/* answer */}
        <p className="leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
        
        <div className="space-y-4 mb-6">
          {questions.map((question, index) => (
            <div key={index} className="flex items-center gap-2 mb-10 w-full justify-end text-[#FFFFFF]">
              <Pencil size={22} strokeWidth={2} className="p-1 border border-current rounded-full"/>
              {question}
            </div>
            ))}
        </div>

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

      {/* T button viewable by default, after click, text bar opens and T button disappears */}
      {!showInputBar && (
        <button
          className="p-2 rounded-full bg-[#F5E8C7]/90 self-end mr-4 mb-10 text-[#322B26]"
          onClick={() => setShowInputBar(true)}
        >
          <Type size={22} strokeWidth={2}/>
        </button>
        )}

      {/* on click T button, appears, on click X button, disappears and T reappears */}
      {showInputBar && (
      <footer className="px-4 mb-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="What's your question?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleEnter}
            className="flex-1 p-2 bg-[#322B26] border border-[#F5E8C7]/90 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#F5E8C7]/90"
          />
          <button 
            className="p-2 ml-[-44px] relative z-10 rounded-full"
            onClick={() => setShowInputBar(false)}
          >
            <X size={16} strokeWidth={2} />
          </button>
          <button className="p-2 bg-[#F5E8C7]/90 rounded-full">
            <Mic size={20} strokeWidth={2} className="text-[#322B26]" />
          </button>
        </div>
      </footer>
      )}

    </div>
  );
}


export default App;
