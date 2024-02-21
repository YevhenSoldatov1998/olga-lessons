import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react';
import {User} from "helpers/types";
import {isAuth as isAuthLocalStorage, user as userLocalStorage} from "helpers/auth";


type UserContextValue = {
  isAuth: boolean,
  user: User | null,
  setAuth: Dispatch<SetStateAction<boolean>>
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextValue | null>(null)


export const useUserContext = () => {
  const context = useContext(UserContext)
  return context as UserContextValue
}

const UserProvider = ({children}: PropsWithChildren) => {
  const [isAuth, setAuth] = useState<boolean>(isAuthLocalStorage)
  const [user, setUser] = useState<User | null>(userLocalStorage)

  const value = {
    isAuth,
    user,
    setUser,
    setAuth
  }
  return (
    <UserContext.Provider value={value as UserContextValue}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider;

// <UserProvider>
//   <App/>
// </UserProvider>