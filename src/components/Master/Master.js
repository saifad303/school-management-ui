import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import TopNav from "../TopNav/TopNav";

function Master() {
  return (
    <div id="master">
      <Sidebar />
      <Main>
        <TopNav />
      </Main>
    </div>
  );
}

export default Master;
