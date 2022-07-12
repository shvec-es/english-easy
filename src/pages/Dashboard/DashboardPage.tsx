import React from "react";
import { Link } from "react-router-dom";
import s from "./DashboardPage.module.css";
import { Modal, AddNewWords } from "../../components";
import {useAppDispatch, useAppSelector} from '../../store/hooks/redux';
import { changeStateModal } from '../../store/reducers/ActionCreators';

const DashboardPage: React.FC = () => {
  // const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isModalOpenAddWord } = useAppSelector(state => state.ModalSlice);

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
        onClick={() => dispatch(changeStateModal(true, 'add'))}
      >
        Add New Words
      </button>
      {isModalOpenAddWord && (
        <Modal action='add'>
          <AddNewWords/>
        </Modal>
      )}
    </section>
  );
};

export default DashboardPage;
