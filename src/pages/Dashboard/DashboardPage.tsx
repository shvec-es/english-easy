import React from "react";
import { Link } from "react-router-dom";
import s from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
      <section>
          <ul className={s.list}>
              <li className={s.item}><Link to="my_vocabulary">My vocabulary</Link></li>
              <li className={s.item}><Link to="all_words">All words</Link></li>
              <li className={s.item}><Link to="translator">Translator</Link></li>
              <li className={s.item}><Link to="add_words">Add new words</Link></li>
              <li className={s.item}><Link to="rules">Rules</Link></li>
              <li className={s.item}><Link to="top_users">Top users</Link></li>
              <li className={s.item}><Link to="chat">Chat</Link></li>
          </ul> 
    </section>
  );
};

export default DashboardPage;
