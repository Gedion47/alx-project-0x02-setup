import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome to My App!</h1>
      </header>
      <main className="welcome-main">
        <p>This is your starting page.</p>
        <p>Go ahead and start building something amazing!</p>
      </main>
      <footer className="welcome-footer">
        <p>Happy Coding!</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
