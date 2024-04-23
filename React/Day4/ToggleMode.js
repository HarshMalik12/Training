import React, { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    // You can also save the user preference in local storage if you want
    // localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode
          ? "Change to White Background"
          : "Change to Black Background"}
      </button>
      <div
        style={{
          backgroundColor: isDarkMode ? "black" : "white",
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default App;
