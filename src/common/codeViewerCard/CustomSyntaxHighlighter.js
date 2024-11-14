import React from 'react';
import './CustomSyntaxHighlighter.css'; // Add your styles here

const HTML_REGEX = /(&lt;\/?[\w-]+&gt;|&lt;[\w-]+(?:\s+[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)?&gt;|&quot;[^&quot;]*&quot;|&lt;[^&gt;]+&gt;)/g;
const CSS_REGEX = /([\w-]+)(\s*:\s*.*?;)|(#([a-fA-F0-9]{3,6}))|rgba?\(\s*([0-9]+),\s*([0-9]+),\s*([0-9]+)(?:,\s*([0-9.]+))?\s*\)/g;
const JS_REGEX = /(const|let|var|function|return|if|else|for|while|switch|case|break|continue)|(["'`])([^"']*?)\2/g;

const CustomSyntaxHighlighter = ({ language, codeString }) => {
  const highlightCode = (code, lang) => {
    switch (lang) {
      case 'html':
        return code.replace(HTML_REGEX, (match) => {
          if (match.startsWith('&lt;')) return `<span class="tag">${match.replace(/&lt;/g, '<').replace(/&gt;/g, '>')}</span>`;
          if (match.includes('&quot;')) return `<span class="quote">${match.replace(/&quot;/g, '"')}</span>`;
          return match;
        });

      case 'css':
        return code.replace(CSS_REGEX, (match, p1, p2, p3) => {
          if (p1) return `<span class="property">${p1}</span>${p2}`;
          if (p3) return `<span class="color">#${p3}</span>`;
          return match;
        });

      case 'js':
      case 'jsx':
        return code.replace(JS_REGEX, (match, p1, p2) => {
          if (p1) return `<span class="keyword">${p1}</span>`;
          if (p2) return `<span class="string">${p2}</span>`;
          return match;
        });

      default:
        return code;
    }
  };

  const highlightedCode = highlightCode(codeString, language);

  return (
    <div className="custom-syntax-highlighter" dangerouslySetInnerHTML={{ __html: highlightedCode }} />
  );
};

export default CustomSyntaxHighlighter;
