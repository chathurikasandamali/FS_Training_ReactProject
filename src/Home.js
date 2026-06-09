import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'left', maxWidth: 800, margin: '1rem auto' }}>
      <h2>Home</h2>
      <p>
        Welcome to the home page. Use the button or the navigation links to
        visit the HelloWorld page.
      </p>
      <p>
        This is the main landing page for the app. The navigation setup is
        handled in `App.js` with React Router.
      </p>
    </div>
  );
}
