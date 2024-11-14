import React from 'react';
import './Grid.css';

export const Grid = ({ children, spacing = 2 }) => {
  return (
    <div className="custom-grid">
      {React.Children.map(children, (child) => {
        // Clone child to pass spacing prop
        return React.cloneElement(child, { spacing });
      })}
    </div>
  );
};

export const GridItem = ({ children, xs = 12, sm = 6, md = 4, onClick, spacing }) => {
  const classNames = `grid-item xs-${xs} sm-${sm} md-${md}`;
  return (
    <div className={classNames} onClick={onClick} style={{ padding: spacing }}>
      {children}
    </div>
  );
};
