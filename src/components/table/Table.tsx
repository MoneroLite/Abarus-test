import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Search from "./header/Search";
import Pagination from "./pagination/Pagination";
import Posts from "./posts/Posts";
import { getPosts } from "../../store/actions/actionAPI";
import { RootState } from "../../store/index";
import { AppStatus } from "../../store/consts";
import { useAppDispatch } from "../../hooks";
import "./table.scss";

const Table = () => {
  const status = useSelector((state: RootState) => state.state.appStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="table">
      {status === AppStatus.READY ? (
        <>
          <div className="table__search">
            <Search />
          </div>

          <div className="table__post">
            <Posts />
          </div>

          <div className="table__pagination">
            <Pagination />
          </div>
        </>
      ) : null}

      {status === AppStatus.LOADING ? (
        <p className="table__loading-message">Загрузка...</p>
      ) : null}

      {status === AppStatus.ERROR ? (
        <p className="table__error-message">Произошла ошибка</p>
      ) : null}
    </div>
  );
};

export default Table;
