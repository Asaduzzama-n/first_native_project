import { IUser } from "@/types/user";
import React, { createContext, ReactNode, useState } from "react";

const AppContext = createContext<
  | {
      user: IUser | null;
      setUser: (user: IUser | null) => void;
      loading: boolean;
      setLoading: (loading: boolean) => void;
    }
  | undefined
>(undefined);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
export { AppContext, AppContextProvider, useAppContext };
