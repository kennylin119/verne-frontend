import { Menu } from 'lucide-react';
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[#3e2723] to-[#1b1b1b] text-white px-6 py-8"> 
    {/* nav button */}
      <div className="flex justify-end mb-8">
        <button className="w-10 h-10 rounded-full flex items-center justify-center">
          <Menu size={20}></Menu>
        </button>
      </div>
      <main className="flex-1 overflow-y-auto px-6">
        {/* question */}
        <h2 className="flex items-center gap-2 mb-4">
          How do you play Verne?
        </h2>
        {/* answer */}
        <p className="leading-relaxed max-w-prose mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
          velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </main>
    </div>
  );
}


export default App;
