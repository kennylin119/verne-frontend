import { Menu, Volume2, Star, Pencil, Mic, X, Type } from 'lucide-react';
import { useState } from 'react';
import './App.css'

function App() {
  const [showInputBar, setShowInputBar] = useState(false);
  const [inputText, setInputText] = useState('');
  const [exchanges, setExchanges] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  // when user presses enter, if inputText is not empty, add it to questions array and clear inputText
  const handleEnter = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      const newQuestion = inputText.trim();
      const placeholderAnswer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

      // Add the new question to the exchanges array
      setExchanges((prev) => [...prev, { question: newQuestion, answer: placeholderAnswer }]);
      setInputText('');
    }
  }

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-[#694A4A] to-[#221C1C] text-[#FFF4D7] text-xl font-[Caudex] px-2 py-2">

      {/* menu button */}
      <div className="p-5">
        <button
          className="p-2 rounded-full bg-[#F5E8C7]/90"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={30} strokeWidth={2} className="text-[#322B26]" />
        </button>
      </div>

      <main className="flex-1 overflow-y-auto px-6">

        {/* placeholder question */}
        <h2 className="flex items-center gap-2 mb-10 w-full justify-end text-[#FFFFFF]">
          <Pencil size={25} strokeWidth={2} className="p-1 border border-current rounded-full" />
          "How do you play Verne?"
        </h2>

        {/* placeholder answer */}
        <p className="leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>

        {/* mute + save icons */}
        <div className="flex items-center gap-2 mb-4">
          <button className="p-1 border border-current rounded-full">
            <Volume2 size={25} strokeWidth={2} />
          </button>
          <button>
            <Star size={25} strokeWidth={2} />
          </button>
        </div>

        {/* user input question + answer exchange */}
        <div className="space-y-6 mb-6">
          {exchanges.map((exchange, index) => (
            <div key={index}>

              <div className="flex justify-end text-[#FFFFFF] mb-6">
                <div className="flex items-start gap-2 max-w-[80%]">
                  <Pencil size={25} strokeWidth={2} className="p-1 border border-current rounded-full shrink-0 mt-1" />
                  <h2 className="break-words"> {exchange.question} </h2>
                </div>
              </div>

              <p className="leading-relaxed mb-6">
                {exchange.answer}
              </p>

              {/* mute + save icons */}
              <div className="flex items-center gap-2">
                <button className="p-1 border border-current rounded-full">
                  <Volume2 size={25} strokeWidth={2} />
                </button>
                <button>
                  <Star size={25} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* T button viewable by default, after click, text bar opens and T button disappears */}
      {!showInputBar && (
        <button
          className="p-2 rounded-full bg-[#F5E8C7]/90 self-end mr-4 mb-10 text-[#322B26]"
          onClick={() => setShowInputBar(true)}
        >
          <Type size={30} strokeWidth={2} />
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
              className="p-2 ml-[-50px] relative z-10 rounded-full"
              onClick={() => setShowInputBar(false)}
            >
              <X size={20} strokeWidth={2} />
            </button>
            <button className="p-2 bg-[#F5E8C7]/90 rounded-full">
              <Mic size={25} strokeWidth={2} className="text-[#322B26]" />
            </button>
          </div>
        </footer>
      )}

      {/* sidebar component, opens on click of menu button */}
      {isSidebarOpen && (

        // needed to close sidebar when clicking outside of it 
        <div className="fixed inset-0 z-50 flex">

          <div className="w-[80vw] max-w-[400px] backdrop-blur-md">

            {/* sidebar takes up 80% of screen width, max 300px */}
            <div className="bg-gradient-to-b from-[#281515] to-[#4D3333] opacity-75 h-full p-6 flex flex-col">

              {/* close button */}
              <div className="p-1">
                <button
                  className="p-2 rounded-full bg-[#F5E8C7]/90 mb-8"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={30} strokeWidth={2} className="text-[#322B26]" />
                </button>
              </div>

              <h2 className="text-xl font-bold mb-4 flex items-center p-1 gap-4">
                <Star size={34} fill="#F5E8C7" />
                Saved Responses
              </h2>

              {/* Options */}
              <div className="mt-auto text-l text-[#FFF4D7]/70 space-y-4 mb-10">
                <button className="block w-full text-left"> Settings </button>
                <button className="block w-full text-left"> Clear Chat History </button>
              </div>

            </div>
          </div>

          {/* close sidebar when clicking outside of it */}
          <div
            className="flex-1"
            onClick={() => setSidebarOpen(false)}
          />

        </div>
      )}

    </div>
  );
}


export default App;
