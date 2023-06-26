import type { Component } from "solid-js";
import BasicInfo from "./parts/basicInfo";

const App: Component = () => {
  return (
    <div class="flex">
      <BasicInfo />
      <BasicInfo />
    </div>
  );
};

export default App;
