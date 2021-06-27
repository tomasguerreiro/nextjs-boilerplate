import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react';

interface AppLocalContextProps {
  cookie: Record<string, unknown>;
  setCookie: (key: string, val: string, expires: number) => void;
}

const AppLocalContext = React.createContext({} as AppLocalContextProps);

const AppLocalProvider: React.FC = ({ children }) => {
  const [cookie, updateCookie] = useState({});

  useEffect(() => {
    updateCookie(Cookies.get());
  }, []);

  const setCookie = (key: string, val: string, expires: number) => {
    if (typeof window !== 'undefined') {
      Cookies.set(key, val, { expires });
      updateCookie(Cookies.get());
    }
  };

  return (
    <AppLocalContext.Provider
      value={{
        cookie,
        setCookie,
      }}
    >
      {children}
    </AppLocalContext.Provider>
  );
};

const useAppLocal = () => {
  return useContext(AppLocalContext);
};

export { AppLocalProvider, useAppLocal };
