import { useState, useEffect } from "react";

const api_url = "/.netlify/functions/quote";

function App() {
  const [visible, setVisible] = useState(false);
  const [quote, setQuote] = useState("");

  // fade-in effect
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 250);
    return () => clearTimeout(t);
  }, []);

  // fetch quote once on mount
  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(api_url);
        const data = await response.json();

        setQuote(data[0]?.q + " — " + data[0]?.a);
      } catch (err) {
        console.error("Failed to fetch quote:", err);
        setQuote("Could not load quote.");
      }
    }

    fetchQuote();
  }, []);

 return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 ambient-gradient" />

      <div className="relative z-10">

      {/* Headline */}
     <div
      className={`relative text-5xl mt-50 text-center font-[myHeadline] tracking-wide drop-shadow transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >

      {/* main text with float */}
      <span className="relative inline-block text-[#7A2E3A] animate-float drop-shadow-2xl">
        <GetRandomHeadline />
      </span>
    </div>

      {/* Quote container */}
      <div className="flex justify-center mt-16 px-4">
        <div
          className={`relative max-w-2xl text-center font-[myQuotes] text-[#7A2E3A] italic text-2xl md:text-3xl tracking-wide bg-[#f5e6e8] border border-[#7A2E3A]/30 rounded-3xl p-10 shadow-lg transition-all duration-700 ease-out ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* decorative quote marks */}
          <div className="absolute top-3 left-5 text-6xl opacity-10">“</div>
          <div className="absolute -bottom-4 right-5 text-6xl opacity-10">”</div>

          {quote || "Loading..."}
        </div>
      </div>
      </div>
    </div>
  ); 
}

function GetRandomHeadline() {
  const headlines = [
    "Guten Morgen!",
    "Hallo Mama!",
    "Hab heute einen schönen Tag!",
    "Ich freu mich schon auf dich!",
    "Lass dich nicht ärgern!",
    "Sei du selbst!",
    "Ich hab dich lieb!",
    "Denk an Yuki und Aiko!",
    "Komm bald heim, ich vermiss dich!",
    "Du bist wunderhübsch!",
    "Dir passt deine Frisur heute besonders gut!",
    "Nimm dir pausen!",
    "Schicke Schuhe!",
    "Lehn dich auch mal zurück!",
    "Vergiss nicht genug zu trinken!",
    "Denk an unsere Wauzies!",
    "Atme tief durch.",
    "Mach die Augen zu und denk an was schönes!",
    "Lass dir nicht alles gefallen!",
    "Lass den Kopf nicht hängen!",
    "Halt noch etwas durch!",
    "Du schaffst das!",
    "Bleib stark!",
  ];

  return headlines[Math.floor(Math.random() * headlines.length)];
}

export default App;
