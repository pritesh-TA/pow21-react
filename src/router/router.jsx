import React from "react";
import { Route, Routes } from "react-router-dom";
import Dispensaries from "../components/dispensaries/dispensaries";
import Contributors from "../components/contributors/contributors";
import Login from "../register/login";
import Test from "../register/Test";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/business/contributors" element={<Dispensaries />} />
        <Route path="/business/contributors" element={<Contributors />} />
      </Routes>
    </>
  );
};

export default Router;
