import { RootState } from "@app/store";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "./pagination.scss";

const Pagination = () => {
  const currentPage = +useParams().page;

  const pagesCount = useSelector((state: RootState) => state.view.pagesCount);

  let paginationButtons = Array(pagesCount).fill(""); // создаем массив длиной, соответствующей количеству страниц

  return (
    <div className="pagination">
      {currentPage > 1 ? (
        <NavLink
          to={`/posts/${currentPage - 1}`}
          className="pagination__prev-button"
        >
          Назад
        </NavLink>
      ) : (
        <span className="pagination__next-button disabled">Назад</span>
      )}

      <div className="pagination__pagination">
        {paginationButtons.map((el, i) => {
          const page = i + 1;
          const isActive = page === currentPage || pagesCount === 0;

          return (
            <NavLink
              to={`/posts/${page}`}
              key={i}
              className={`pagination__pagination-button${
                isActive ? " active" : ""
              }`}
            >
              {page}
            </NavLink>
          );
        })}
      </div>

      {currentPage !== pagesCount && pagesCount !== 0 ? (
        <NavLink
          to={`/posts/${currentPage + 1}`}
          className="pagination__next-button"
        >
          Вперед
        </NavLink>
      ) : (
        <span className="pagination__next-button disabled">Вперед</span>
      )}
    </div>
  );
};

export default Pagination;
