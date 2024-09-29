// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Chatbox from './components/chatbox';

const App = () => {
  return (
    <div className="bg-[#18181B] min-h-screen">
      <Header />
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oSwoDdH4lZM?si=8f1PX2wKtNaqXigH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Chatbox />
    </div>
  );
};

export default App;
