/**
 * CyberPulse Schema.org Structured Data
 * 
 * Provides search engines with structured information about CyberPulse
 * as a WebApplication, improving SEO and rich results display.
 */

export function CyberPulseSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CyberPulse",
    "alternateName": "CyberPulse Music Visualizer",
    "description": "Real-time audio visualization powered by your microphone. Watch sound transform into mesmerizing particle animations with customizable PUNCH, VIBE, and MOOD controls. Built with Web Audio API for zero-latency performance.",
    "url": "https://cyberpulse.labs.rapidtechconsultants.com/",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any (browser-based)",
    "browserRequirements": "Requires a modern browser with Web Audio API support (Chrome, Firefox, Safari, Edge)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Real-time microphone audio visualization",
      "Customizable particle animations",
      "PUNCH control for audio sensitivity",
      "VIBE control for wave motion",
      "MOOD control for color palettes",
      "Optional EQ frequency bars",
      "Fullscreen mode",
      "Privacy-first: audio processing in-browser only"
    ],
    "screenshot": "https://cyberpulse.labs.rapidtechconsultants.com/assets/og-image.png",
    "provider": {
      "@type": "Organization",
      "name": "RTS Technology & Solutions",
      "url": "https://rapidtechconsultants.com",
      "logo": "https://rapidtechconsultants.com/favicon.ico",
      "sameAs": [
        "https://labs.rapidtechconsultants.com"
      ]
    },
    "creator": {
      "@type": "Organization",
      "name": "RTS Labs",
      "url": "https://labs.rapidtechconsultants.com",
      "description": "Experimental portfolio showcasing RTS technical capabilities"
    },
    "accessibilityAPI": "Web Audio API",
    "accessibilityControl": [
      "fullKeyboardControl",
      "fullMouseControl"
    ],
    "accessibilityFeature": [
      "audioDescription",
      "visualAdjustability"
    ],
    "keywords": "music visualizer, microphone visualizer, audio reactive, live music visualization, web audio api, frequency analyzer, real-time audio, sound reactive, audio spectrum, beat detection, particle simulation, canvas visualization",
    "softwareRequirements": "Modern web browser with JavaScript enabled and microphone permission",
    "permissions": "Requires microphone permission for audio input"
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
    />
  );
}
