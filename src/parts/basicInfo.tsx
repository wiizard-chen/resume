import type { Component } from "solid-js";
import { basicInfo } from "./resumeContent";

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
      <h1>{basicInfo.header}</h1>
      <div class="flex">
        <div>
          <label for="">姓名：</label>
          <span>{basicInfo.name}</span>
        </div>

        <DividerLine />

        <div>
          <label for="">电话：</label>
          <span>{basicInfo.phone}</span>
        </div>

        <DividerLine />

        <div>
          <label for="">邮箱：</label>
          <span>{basicInfo.email}</span>
        </div>

        <DividerLine />

        <div>
          <label for="">应聘：</label>
          <span>{basicInfo.job}</span>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
