"use client"
import { useState } from "react";

export default function ValentineProposal() {
  const [answer, setAnswer] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-red-100 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-white/20">
        
        {/* Decorative header */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mb-4 shadow-lg">
            <span className="text-3xl">💝</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-6">
          Will You Be My Valentine?
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
          From the moment I met you, everything changed.<br />
          You make my world brighter and my heart fuller.<br />
          <span className="text-pink-600 font-semibold">So… will you be mine forever?</span> ❤️
        </p>

        {!answer && (
          <div className="flex justify-center gap-6 relative min-h-[60px]">
            <button
              onClick={() => setAnswer("yes")}
              className="group relative px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Yes <span className="group-hover:animate-pulse">💕</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onMouseEnter={() => {
                moveNoButton();
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              onClick={moveNoButton}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isHovering ? "transform 0.3s ease-out" : "none"
              }}
              className="px-8 py-3 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold rounded-2xl shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                No <span className="animate-bounce">😅</span>
              </span>
              {isHovering && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl"></div>
              )}
            </button>
          </div>
        )}

        {answer === "yes" && (
          <div className="mt-8 space-y-4">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full shadow-lg animate-bounce">
              <span className="text-4xl">🎉</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Yaaay!! I'm the happiest person alive! ❤️
            </div>
            <p className="text-gray-700 text-lg">
              I promise to cherish you forever and always make you smile 💍✨
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="text-2xl animate-pulse">💖</span>
              <span className="text-2xl animate-pulse animation-delay-200">💕</span>
              <span className="text-2xl animate-pulse animation-delay-400">💗</span>
            </div>
          </div>
        )}

        {answer === "no" && (
          <div className="mt-8 space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full shadow-lg">
              <span className="text-3xl">💔</span>
            </div>
            <div className="text-xl text-gray-600 font-medium">
              Are you sure about that? 😢
            </div>
            <p className="text-gray-500">
              Try again... maybe give that "No" button another hover 👀
            </p>
          </div>
        )}
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 text-4xl animate-float-up animation-delay-1000">�</div>
        <div className="absolute bottom-0 left-1/2 text-3xl animate-float-up animation-delay-3000">💖</div>
        <div className="absolute bottom-0 right-1/4 text-5xl animate-float-up animation-delay-5000">💗</div>
      </div>
    </div>
  );
}
