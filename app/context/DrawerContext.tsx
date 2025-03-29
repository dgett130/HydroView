import React, { createContext, useContext, useState } from 'react';

type DrawerContextType = {
  selectedDrawer: string;
  setSelectedDrawer: (value: string) => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [selectedDrawer, setSelectedDrawer] = useState('home');

  return (
    <DrawerContext.Provider value={{ selectedDrawer, setSelectedDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
} 