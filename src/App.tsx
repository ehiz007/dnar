import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Coin from "./pages/coins";
import Error from "./pages/coins";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
