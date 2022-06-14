import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from "./DashboardPage.module.css";
import { Modal, AddNewWords } from "../../components";

const DashboardPage: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <section>
      <ul className={s.list}>
        <li className={s.item}>
          <Link to="my_vocabulary">My vocabulary</Link>
        </li>
        <li className={s.item}>
          <Link to="all_words">All words</Link>
        </li>
        <li className={s.item}>
          <Link to="translator">Translator</Link>
        </li>
        <li className={s.item}>
          <Link to="rules">Rules</Link>
        </li>
        <li className={s.item}>
          <Link to="top_users">Top users</Link>
        </li>
        <li className={s.item}>
          <Link to="chat">Chat</Link>
        </li>
      </ul>
      <button
        className={s.button}
        type="button"
        onClick={() => setActive(true)}
      >
        Add New Words
      </button>
      {active && (
        <Modal setActive={setActive}>
          <AddNewWords setActive={setActive}/>
        </Modal>
      )}
    </section>
  );
};

export default DashboardPage;
