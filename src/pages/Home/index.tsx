import React from "react";
import { useUserContext } from "shared/providers/UserProvider";
import NiceModal from "@ebay/nice-modal-react";
import NiceModalCustom from "../../modals/NiceModalCustom";

export type UserTest = { name: string; id: number; email: string };

const Home = () => {
  const { user } = useUserContext();

  const show = (customName: string, customEmail: string) => {
    NiceModal.show(NiceModalCustom, { id: customName, email: customEmail });
  };

  // create nice modal user
  const [users, setUsers] = React.useState<UserTest[]>([]);
  return (
    <div className="mt-5">
      <li onClick={() => show("1", "osshalakhina@gmail.com")}>User1</li>
      <li onClick={() => show("2", "o.kosov@barva.tech")}>User2</li>
      <li onClick={() => show("3", "alex.ksv@gmail.com")}>User3</li>
    </div>
  );
};

export default Home;
