import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const Tabs = ({ children, defaultValue, className, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className, ...props }) => (
  <div className={`flex ${className}`} {...props}>
    {children}
  </div>
);

export const TabsTrigger = ({ children, value, className, ...props }) => {
  const { value: selectedValue, setValue } = useContext(TabsContext);
  const isSelected = value === selectedValue;

  return (
    <button
      className={`px-4 py-2 ${isSelected ? 'bg-gray-200' : ''} ${className}`}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ children, value, className, ...props }) => {
  const { value: selectedValue } = useContext(TabsContext);
  if (value !== selectedValue) return null;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
