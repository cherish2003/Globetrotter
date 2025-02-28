import React from "react";
import { NavbarDemo } from "../components/home/navbar";
import { Globe } from "../components/home/globe";
import { GlobeDemo } from "../components/home/GlobeDemo";
import { FaPlay, FaTrophy, FaUsers, FaDiscord } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className=" h-screen">
      <NavbarDemo />
      <GlobeDemo />
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Globetrotter?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <FaTrophy className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Compete & Win</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Climb the leaderboard and prove your geography skills.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Join the Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with players worldwide and share your progress.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <FaDiscord className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Improve your knowledge with fun challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-6xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-2">Start the Game</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click "Play Now" and begin your journey.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-2">Answer Questions</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test your knowledge of countries, capitals, and landmarks.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-6xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-2">
                Climb the Leaderboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn points and compete with players worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Top Players</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((rank) => (
                <div
                  key={rank}
                  className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-600 rounded-lg"
                >
                  <span className="text-lg font-semibold">#{rank}</span>
                  <span className="text-lg">Player {rank}</span>
                  <span className="text-lg font-bold text-blue-600">
                    {rank * 1000} Points
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Connect with other players, share tips, and stay updated!
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center space-x-2 mx-auto">
            <FaDiscord />
            <span>Join Discord</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Globetrotter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
