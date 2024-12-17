// File: src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Ensure that body and html fill the entire viewport */
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Set the background for the entire page using a pseudo-element */
  body::before {
    content: '';
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }

  /* Styling for all elements to use box-sizing for better layout management */
  * {
    box-sizing: border-box;
  }

  /* Ensure anchor tags look consistent */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Customize the scrollbar for the website */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    scrollbar-width: thin;
    scrollbar-color: #4a90e2 #1c1c1e;
  }

  /* Track styling */
  ::-webkit-scrollbar-track {
    background: #1c1c1e;
    border-radius: 10px;
  }

  /* Thumb styling */
  ::-webkit-scrollbar-thumb {
    background-color: #4a90e2;
    border-radius: 10px;
    border: 3px solid #1c1c1e;
  }

  /* Hover effect on the thumb */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #fff;
  }

  /* Optional: Style the scrollbar corners */
  ::-webkit-scrollbar-corner {
    background: #1c1c1e;
  }
`;
