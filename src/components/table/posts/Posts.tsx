import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import { Post, Posts } from "../../../store/types";
import { VIEW_COUNT } from "../../../store/consts";
import "./posts.scss";

const SortMode = {
  ID: "ID",
  TITLE: "TITLE",
  BODY: "BODY",
} as const;

const Posts = () => {
  const [sortMode, setSortMode] = useState(null);

  const page = +useParams().page;
  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.data.posts);
  const searchedPosts = useSelector(
    (state: RootState) => state.data.searchedPosts
  );

  useEffect(() => {
    setSortMode(null);
  }, [posts, searchedPosts]);

  const sortPosts = (posts: Posts) => {
    switch (sortMode) {
      case SortMode.ID:
        return posts.sort((a: Post, b: Post) => b.id - a.id);
      case SortMode.TITLE:
        return posts.sort((a: Post, b: Post) => (a.title > b.title ? 1 : -1));
      case SortMode.BODY:
        return posts.sort((a: Post, b: Post) => (a.body > b.body ? 1 : -1));
      default:
        return posts;
    }
  };

  const onSortButtonClick = (mode: keyof typeof SortMode) => {
    setSortMode(mode);
    navigate("/posts/1");
  };

  const actualPosts = searchedPosts ?? posts;

  const displayedPosts = sortPosts(actualPosts.slice()) // дублируем и сортируем массив
    .slice(VIEW_COUNT * page - VIEW_COUNT, VIEW_COUNT * page); // находим нужный кусок массива по текущей странице

  const emptyRowsCount = VIEW_COUNT - displayedPosts.length; // вычисляем, сколько строк таблицы остались не заполнены
  const emptyRows =
    emptyRowsCount > 0 ? Array(emptyRowsCount).fill(null) : null; // создаем массив с пустыми значениями для незаполненных строк

  return (
    <table className="posts">
      <thead>
        <tr className="posts__header-row">
          <th className="posts__header posts__header--id">
            <button
              className="posts__header-button"
              onClick={() => onSortButtonClick(SortMode.ID)}
            >
              ID
            </button>
          </th>
          <th className="posts__header posts__header--title">
            <button
              className="posts__header-button"
              onClick={() => onSortButtonClick(SortMode.TITLE)}
            >
              Заголовок
            </button>
          </th>
          <th className="posts__header posts__header--description">
            <button
              className="posts__header-button"
              onClick={() => onSortButtonClick(SortMode.BODY)}
            >
              Описание
            </button>
          </th>
        </tr>
      </thead>

      <tbody>
        {displayedPosts.map((post, i) => {
          return (
            <tr key={i} className="posts__row">
              <td className="posts__cell">{post.id}</td>
              <td className="posts__cell">{post.title}</td>
              <td className="posts__cell">{post.body}</td>
            </tr>
          );
        })}

        {emptyRows
          ? emptyRows.map((post, i) => {
              return (
                <tr key={i} className="posts__row">
                  <td className="posts__cell"></td>
                  <td className="posts__cell"></td>
                  <td className="posts__cell"></td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default Posts;
