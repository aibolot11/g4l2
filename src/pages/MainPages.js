// MainPage.js
import React from 'react';
import About from './About';
import Title from './Title';

const MainPage = () => {
  const aboutInfo = {
    title: 'Some Title',
    body: 'Some body',
  };

  return (
    <div>
      <Title text="Hello world" />
      <About info={aboutInfo} />
    </div>
  );
};

export default MainPage;
