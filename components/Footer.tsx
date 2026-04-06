/**
 * CyberPulse Footer Component
 * Simple footer for the visualizer
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm text-white py-6 px-6 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-sm text-gray-400">
            CyberPulse Music Visualizer
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} - Built with Web Audio API
          </p>
          <a
            href="https://github.com/RTS-Technology-Solutions/cyberpulse-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

        {/* Privacy Commitment */}
        <div className="mt-4 pt-4 border-t border-gray-700/50 text-center">
          <p className="text-xs text-gray-500">
            🔒 <strong>Privacy First:</strong> All audio processing happens in your browser. Your microphone audio is never recorded, stored, or transmitted.
          </p>
        </div>
      </div>
    </footer>
  );
}
