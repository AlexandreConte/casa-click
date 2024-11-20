import Usuario from "@/model/Usuario";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

const userContext = createContext<{
  usuario: Usuario | undefined;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | undefined>>;
}>({
  usuario: undefined,
  setUsuario: () => { },
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | undefined>(undefined);

  return (
    <userContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const user = useContext(userContext);
  return user;
}
