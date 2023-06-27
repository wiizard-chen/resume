import type { Component } from "solid-js";

const DividerLine = () => {
  return (
    <div
      style={{
        width: "3px",
        height: "22px",
        "background-color": "#ddd",
        margin: "0 12px",
      }}
    ></div>
  );
};

const BasicInfo: Component = () => {
  return (
    <div id="id-div-head">
      <h1>前端开发工程师-陈伟梓</h1>
      <div class="flex">
        <div>
          <label for="">姓名：</label>
          <span>陈伟梓</span>
        </div>

        <DividerLine />

        <div>
          <label for="">电话：</label>
          <span>13824453814</span>
        </div>

        <DividerLine />

        <div>
          <label for="">邮箱：</label>
          <span>wiizard-chen@outlook.com</span>
        </div>

        <DividerLine />

        <div>
          <label for="">应聘：</label>
          <span>前端开发工程师</span>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
