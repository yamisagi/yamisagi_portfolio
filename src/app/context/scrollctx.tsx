import { type } from 'os';
import React, { useContext, createContext } from 'react';

// Create context for scroll state

type ScrollType = {
  scrollState: string;
  setScrollState: React.Dispatch<React.SetStateAction<string>>;
};
export const ScrollContext = createContext({} as ScrollType);

// Create provider for scroll state

export const ScrollProvider = ({ children }) => {
  const [scrollState, setScrollState] = React.useState('top');

  return (
    <ScrollContext.Provider value={{ scrollState, setScrollState }}>
      {children}
    </ScrollContext.Provider>
  );
};
