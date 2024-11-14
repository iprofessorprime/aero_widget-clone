import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import customTheme from './customTheme'; // Update the path based on your file structure
import './CodeViewerCard.css';

const CodeViewerCard = ({ title, code, containerStyle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeCode, setActiveCode] = useState('react'); // Default to HTML
  const [copyMessage, setCopyMessage] = useState(''); // State to show copy message

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to check the available code and set the activeCode accordingly
  useEffect(() => {
    if (!code[activeCode]) {
      if (code.react) {
        setActiveCode('react');
      } else if (code.css) {
        setActiveCode('css');
      } else if (code.html) {
        setActiveCode('html');
      } else {
        setActiveCode(null); // No code available
      }
    }
  }, [activeCode, code]);

  const handleCodeOptionClick = (type) => {
    if (code[type]) {
      setActiveCode(type);
    }
  };

  const isHtmlAvailable = Boolean(code?.html);
  const isCssAvailable = Boolean(code?.css);
  const isReactAvailable = Boolean(code?.react);

  // Function to copy code to clipboard
  const copyToClipboard = (codeToCopy) => {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      setCopyMessage('Code copied to clipboard!');
      setTimeout(() => {
        setCopyMessage('');
      }, 2000);
    });
  };

  return (
    <div className="CodeViewerCard">
      <div className="container" >
        <div className="header">
          <div className="header-icons">
            <span className="icon red"></span>
            <span className="icon yellow"></span>
            <span className="icon green"></span>
          </div>
          <div className="header-title">{title}</div>
        </div>
        <div className="content">
          <div className='codeOptionWrapper'>
            <div>
              <span
                className={`codeOption ${activeCode === 'react' ? 'active' : ''} ${!isReactAvailable ? 'disabled' : ''}`}
                onClick={() => handleCodeOptionClick('react')}
              >
                React
              </span>
              <span
                className={`codeOption ${activeCode === 'html' ? 'active' : ''} ${!isHtmlAvailable ? 'disabled' : ''}`}
                onClick={() => handleCodeOptionClick('html')}
              >
                HTML
              </span>
              <span
                className={`codeOption ${activeCode === 'css' ? 'active' : ''} ${!isCssAvailable ? 'disabled' : ''}`}
                onClick={() => handleCodeOptionClick('css')}
              >
                CSS
              </span>
            </div>
            <div >
              <button
                className="copyButton"
                onClick={() => copyToClipboard(code[activeCode])}
                disabled={!code[activeCode]}
              >
                Copy
              </button>
              {copyMessage && <span className="copyMessage">{copyMessage}</span>}
            </div>
          </div>
          {isLoading ? (
            <div className="loading">
              <span className="loading-text">Loading</span>
              <span className="dot dot-1">.</span>
              <span className="dot dot-2">.</span>
              <span className="dot dot-3">.</span>
            </div>
          ) : (
            <div style={{
              height: '60vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflowY:'scroll',
              paddingTop:"20px"
            }}>
              {activeCode === 'html' && isHtmlAvailable && (
                <SyntaxHighlighter language="html" style={customTheme}>
                  {code.html}
                </SyntaxHighlighter>
              )}
              {activeCode === 'css' && isCssAvailable && (
                <SyntaxHighlighter language="css" style={customTheme}>
                  {code.css}
                </SyntaxHighlighter>
              )}
              {activeCode === 'react' && isReactAvailable && (
                <SyntaxHighlighter language="jsx" style={customTheme}>
                  {code.react}
                </SyntaxHighlighter>
              )}
              {activeCode && !code[activeCode] && (
                <div className='heading'>No {activeCode.toUpperCase()} code available.</div>
              )}
              {!activeCode && (
                <div className='heading'>No code available.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeViewerCard;
