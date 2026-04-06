
# CyberPulse Music Visualizer

**🎵 Real-time audio visualization powered by your microphone 🎵**

A futuristic, browser-based music visualizer that reacts to live microphone input with stunning particle animations and customizable visual effects. No downloads, no plugins—just pure Web Audio API magic.

---

## ✨ Key Features

### 🎙️ **Live Microphone Visualization**
Real-time audio capture and visualization using the Web Audio API. Your audio never leaves your browser—completely privacy-first.

### 🌈 **Dynamic Audio-Reactive Effects**
*   **Central bass pulse** that glows with low-frequency sounds
*   **Particle system** (100 particles) with audio-reactive connections
*   **Optional EQ frequency spectrum** bars for detailed visualization
*   **Wave motion** effects that flow with the music

### 🎛️ **Customizable Controls**
*   **PUNCH**: Adjust audio gain/sensitivity (0.3x to 1.5x multiplier)
*   **VIBE**: Control wave motion intensity and frequency
*   **MOOD**: Switch color palettes (Cool Blue, Warm Orange, Full Spectrum)
*   **EQ Toggle**: Show/hide frequency spectrum bars

### 🖥️ **Immersive Experience**
*   **UI auto-hide** after 3 seconds of inactivity (cursor hides too!)
*   **Fullscreen mode** for unobstructed viewing
*   **Responsive design** works on desktop, tablet, and mobile
*   **Privacy-first**: Audio processing happens entirely in-browser

---

## 🛠️ Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6 (lightning-fast HMR)
- **Styling:** Tailwind CSS 3 (CDN)
- **Audio Processing:** Web Audio API (AnalyserNode, GainNode, AGC)
- **Rendering:** HTML5 Canvas 2D

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm or yarn
- Modern browser with microphone support

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YourUsername/cyberpulse-visualizer.git
    cd cyberpulse-visualizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:5173` (or the port shown in terminal)

5.  **Activate microphone:**
    - Click "Activate Microphone" button
    - Grant microphone permissions when prompted
    - Play music, sing, or make sounds to see visuals react!

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory, optimized and ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
cyberpulse-visualizer/
├── components/           # React components
│   ├── Visualizer.tsx   # Main canvas visualizer
│   ├── ControlsPanel.tsx # User controls
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useMicrophoneData.ts
│   └── useMockAudioData.ts
├── utils/               # Utility functions
├── public/              # Static assets
├── App.tsx              # Main app component
├── index.tsx            # App entry point
└── vite.config.ts       # Build configuration
```

---

## 🎛️ Configuration

All configuration is done through [constants.ts](constants.ts) - no environment variables required for basic functionality.

---

## 🎨 Customization

### Audio Parameters

Edit [constants.ts](constants.ts) to adjust:
- FFT size (frequency resolution)
- Smoothing time constants
- Frequency ranges for bass/treble detection
- Visual sensitivity thresholds

### Visual Styles

Modify [Visualizer.tsx](components/Visualizer.tsx):
- Particle count and behavior
- Color schemes and gradients
- Connection line rendering
- Animation physics

---

## 🌐 Browser Compatibility

- ✅ Chrome/Edge 89+
- ✅ Firefox 88+
- ✅ Safari 14.1+
- ✅ Opera 75+

**Required APIs:**
- Web Audio API
- MediaDevices.getUserMedia
- Canvas 2D Context
- RequestAnimationFrame

---

## 📦 Deployment

See [DEPLOYMENT.public.md](DEPLOYMENT.public.md) for detailed deployment instructions for:
- Firebase Hosting
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- Code follows TypeScript best practices
- Components are properly typed
- No console errors or warnings
- Tested across major browsers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Audio powered by [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

---

## 📬 Contact

Have questions or feedback? 

- Open an issue on GitHub
- Submit a pull request
- Star the repo if you find it useful!

---

**Made with 💜 by the open-source community**
