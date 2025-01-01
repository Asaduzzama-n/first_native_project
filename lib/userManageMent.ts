import { useAppContext } from "./useContext";

export const login = () => {
  const user = {
    id: "1",
    name: "John Doe",
    email: "asad@gmail.com",
    avatar:
      "https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg",
  };
  return user;
};

export const logout = () => {
  return null;
};
