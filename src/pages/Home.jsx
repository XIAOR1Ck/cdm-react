import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-red-400 uppercase bg-red-500/10 rounded-full border border-red-500/20">
            CDM Major 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-white">Call of Duty Mobile</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Major Stats
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Track live match schedules, player performance, and tournament rankings all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-red-700 rounded-xl hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg shadow-red-500/25"
            >
              📅 View Schedule
            </a>
            <a
              href="/player"
              className="px-8 py-4 text-lg font-bold text-gray-900 bg-gray-100 rounded-xl hover:bg-white transition-all transform hover:scale-105 shadow-lg"
            >
              🎮 Player Rankings
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Schedule */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Schedule</h3>
            <p className="text-gray-400 mb-4">
              Real-time match timings, group stages, playoffs, and finals for CDM Major.
            </p>
            <a href="/schedule" className="text-red-400 font-semibold hover:text-red-300 transition">
              View Schedule →
            </a>
          </div>

          {/* Card 2 - Rankings */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Player Rankings</h3>
            <p className="text-gray-400 mb-4">
              Top fraggers, K/D leaders, and MVP contenders updated after every match.
            </p>
            <a href="/player" className="text-red-400 font-semibold hover:text-red-300 transition">
              View Rankings →
            </a>
          </div>

          {/* Card 3 - Advanced Stats */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500/50 transition-all hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-5">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Advanced Stats</h3>
            <p className="text-gray-400 mb-4">
              Detailed player performance metrics, team comparisons, and historical data.
            </p>
            <a href="/player" className="text-red-400 font-semibold hover:text-red-300 transition">
              Explore Stats →
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-800">
        <p>© 2026 CDMStats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
