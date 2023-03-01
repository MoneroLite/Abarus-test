import { RootState } from "@app/store";
import { ActionCreator } from "../../../store/actions/index";
import { VIEW_COUNT } from "../../../store/consts";
import { Posts } from "@app/store/types";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./search.scss";

let searchedPosts: Posts = null;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const posts = useSelector((state: RootState) => state.data.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // обновляем данные с задержкой

      if (!searchQuery) {
        // проверяем есть ли содержимое в инпуте
        dispatch(ActionCreator.updateSearchedPosts(null)); // очищаем массив найденных постов
        dispatch(
          ActionCreator.updatePagesCount(Math.ceil(posts.length / VIEW_COUNT))
        ); // обновляем количество страниц
      } else {
        searchPosts();
        dispatch(ActionCreator.updateSearchedPosts(searchedPosts)); // записываем массив найденных постов
        dispatch(
          ActionCreator.updatePagesCount(
            Math.ceil(searchedPosts.length / VIEW_COUNT)
          )
        ); // обновляем количество страниц
      }

      navigate("/posts/1"); // переходим на первую страницу
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const searchPosts = () => {
    searchedPosts = posts.filter((post) => {
      // создаем массив прошедших проверку постов
      const query = new RegExp(`${searchQuery}`, "i");
      return query.test(post.title) || query.test(post.title); // проверяем, есть ли строка в заголовке или теле поста
    });
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Поиск"
        value={searchQuery}
        onChange={(evt) => setSearchQuery(evt.target.value)}
      />
    </div>
  );
};

export default Search;
