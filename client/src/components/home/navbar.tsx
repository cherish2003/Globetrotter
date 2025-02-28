import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "../../lib/utils";
import { FaMoon, FaSun, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 bg-transparent z-50 py-4 px-6 flex justify-between items-center",
        className
      )}
    >
      <div className=" md:flex flex-1 items-center justify-center">
        <Menu setActive={setActive}>
          <div className="text-xl font-bold text-[#FFA500] cursor-pointer hover:scale-105 transition-transform">
            Globetrotter
          </div>

          <MenuItem setActive={setActive} active={active} item="Play Now">
            <HoveredLink href="/play">Start the Game</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Leaderboard">
            <HoveredLink href="/leaderboard">Top Scores</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="How to Play">
            <HoveredLink href="/how-to-play">Game Rules</HoveredLink>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Account">
            {isLoggedIn ? (
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/profile">Profile</HoveredLink>
                <HoveredLink href="/logout">Logout</HoveredLink>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/sign-in">Sign In</HoveredLink>
                <HoveredLink href="/sign-up">Sign Up</HoveredLink>
              </div>
            )}
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
