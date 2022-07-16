import React from "react";
import { Link } from "react-router-dom";
import s from "./DashboardPage.module.scss";
import { Modal, AddNewWords } from "../../components";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { changeStateModal } from "../../store/reducers/ActionCreators";

const DashboardPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isModalOpenAddWord } = useAppSelector((state) => state.ModalSlice);

  return (
    <section>
      <div className={s.wrap}>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="my_vocabulary"><h3 className={s.title} >My vocabulary</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="all_words"><h3 className={s.title} >All words</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="translator"><h3 className={s.title} >Translator</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="rules"><h3 className={s.title} >Rules</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="top_users"><h3 className={s.title} >Top users</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <Link className={s.link} to="chat"><h3 className={s.title} >Chat</h3></Link>
          </div>
        </div>
        <div className={s.item}>
          <div className={s["item-wrap"]}>
            <button
              className={s.link}
              type="button"
              onClick={() => dispatch(changeStateModal(true, "add"))}
            >
              <h3 className={s.title} >Add New Words</h3>
            </button>
            {isModalOpenAddWord && (
              <Modal action="add">
                <AddNewWords />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
