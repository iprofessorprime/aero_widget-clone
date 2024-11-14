// customTheme.js
const customTheme = {
  'code[class*="language-"]': {
    color: '#f8f8f2', // Light gray for code text
    background: '#282a36', // Dark background
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '1em',
    lineHeight: '1.5',
    overflowX: 'auto',
  },
  'pre[class*="language-"]': {
    color: '#f8f8f2',
    background: '#282a36',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '1em',
    lineHeight: '1.5',
    overflowX: 'auto',
    padding: '1em',
    borderRadius: '0.3em',
  },
  'comment': {
    color: '#6272a4', // Comments color
  },
  'keyword': {
    color: '#ff79c6', // Keywords color
  },
  'string': {
    color: '#50fa7b', // Strings color
  },
  'variable': {
    color: '#f1fa8c', // Variables color
  },
  'number': {
    color: '#bd93f9', // Numbers color
  },
  // Add more token types as needed
};

export default customTheme;
