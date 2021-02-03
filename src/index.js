import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './About/About.css'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const observerCallback = (entries, observer) => {
  for (const { target, isIntersecting } of entries) {
    console.log(target.classList)
    if (isIntersecting) {
      let type = target.classList[0]
      console.log(type)
      if (type === 'about-flex1') {
          target.classList.add('slide-in-left')
      }
      else if (type === 'about-flex2'){
          target.classList.add('slide-in-right')
      }
      else if (type === 'quote'){
          target.classList.add('slide-in-up')
      }
      else if (type === 'shade'){
          target.classList.add('scale-in')
      }
      else if (type === 'projectGrid'){
          target.classList.add('slide-in-up')
      }
      else if (type === 'form'){
          target.classList.add('slide-in-right')
      }
    }
  }
};

const observer = new IntersectionObserver(observerCallback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
});

const aboutAnimation1 = document.querySelector('.about-flex1');
const aboutAnimation2 = document.querySelector('.about-flex2');
const quoteAnimation = document.querySelector('.quote');
const contactAnimation = document.querySelector('.form');
const barAnimation = document.querySelectorAll('.shade');

const portfolioAnimation = document.querySelectorAll('.projectGrid');

barAnimation.forEach((element)=>observer.observe(element));
portfolioAnimation.forEach((element)=>observer.observe(element));
observer.observe(aboutAnimation1);
observer.observe(aboutAnimation2);
observer.observe(quoteAnimation);
observer.observe(contactAnimation);
