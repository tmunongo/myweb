import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const scrollElements = document.querySelectorAll(".js-scroll")
console.log(scrollElements)
// scrollElements.forEach((el) => {
//   el.style.opacity = 0
// })
const elementInView = (el, dividend) => {
  const elementTop = el.getBoundingClientRect().top
   return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
   )
}
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
}

const displayScrollElement = (element) => {
  // element.classList.add("scrolled")
  element.style.opacity = 1
}
const hideScrollElement = (element) => {
  // element.classList.remove("scrolled")
  element.style.opacity = 0
}

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el)
      console.log(el)
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

  window.addEventListener('scroll', () => {
    handleScrollAnimation()
  })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
