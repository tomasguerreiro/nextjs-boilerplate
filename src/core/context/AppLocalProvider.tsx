import React, { useContext } from 'react';
import { CookieOptions, useCookie } from 'simple-design-react';

interface AppLocalContextProps {
  isAcceptedPolicies: boolean;
  setIsAcceptedPolicies: (value: boolean, op?: CookieOptions) => void;
}

const AppLocalContext = React.createContext({} as AppLocalContextProps);

const AppLocalProvider: React.FC = ({ children }) => {
  const [isAcceptedPolicies, setIsAcceptedPolicies] = useCookie(
    'isAcceptedPolicies',
    false,
  );

  return (
    <AppLocalContext.Provider
      value={{
        isAcceptedPolicies,
        setIsAcceptedPolicies,
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
