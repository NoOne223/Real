import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface User {
  name: string;
  avatar: string;
}

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
}

const initialUserContext: UserContextProps = {
  user: null,
  setUser: () => {}
};

export const UserContext = createContext<UserContextProps>(initialUserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
