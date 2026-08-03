import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-sm">
              HC
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">Hirwa Christian</p>
              <p className="text-xs text-gray-500">Robotics · IoT · Web · Games</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white font-semibold transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white font-semibold transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white font-semibold transition-colors">Contact</a>
            <a
              href="https://github.com/chrishirwa123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-500/50 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Hirwa Christian. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-violet-500 fill-violet-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
