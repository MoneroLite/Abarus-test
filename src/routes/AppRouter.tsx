import React, { FC } from "react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { publicRoutes } from "./routes";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="/" element={<Navigate to={"/posts/1"} />} />
    </Routes>
  );
};

export default AppRouter;
