import { useState } from "react";

export default function DarkMode() {
  const [darkModeOn, setDarkMode] = useState(false);
  const mode = darkModeOn && "dark-mode";

  const handleDarkMode = () => {
    if (!darkModeOn) {
      setDarkMode(true);
    }
  };
  const handleLightMode = () => {
    if (darkModeOn) {
      setDarkMode(false);
    }
  };
  return (
    <div className={`page ${mode}`}>
      <button className="dark-mode-button" onClick={handleDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={handleLightMode}>
        Light Mode
      </button>
    </div>
  );
}
