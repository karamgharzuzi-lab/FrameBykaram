@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

body {
  background-color: #050505;
  color: #ffffff;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

.glass-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.text-gradient {
  background: linear-gradient(to right, #ffffff, #a3a3a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gold-gradient {
  background: linear-gradient(135deg, #C5A059, #E2C792, #B38D40, #D4AF37);
}

.gold-text {
  background: linear-gradient(135deg, #C5A059, #E2C792, #B38D40, #D4AF37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Luxury Outer Frame */
.luxury-frame-overlay {
  --frame-width: 5px;
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  border: var(--frame-width) solid;
  border-image: linear-gradient(
    135deg, 
    #2a1d03 0%, 
    #c5a059 15%, 
    #fef4d4 30%, 
    #a6803c 50%, 
    #4a3508 70%, 
    #fef4d4 85%, 
    #2a1d03 100%
  ) 1;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
}

@media (min-width: 768px) {
  .luxury-frame-overlay {
    --frame-width: 8px;
  }
}

.luxury-frame-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(254, 244, 212, 0.5);
  outline: 1px solid rgba(197, 160, 89, 0.3);
  outline-offset: -5px;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.7);
  pointer-events: none;
}

.luxury-frame-overlay::after {
  content: '';
  position: absolute;
  inset: calc(var(--frame-width) * -1);
  border: 1px solid #000;
  box-shadow: 0 0 20px rgba(0,0,0,1);
  pointer-events: none;
}
