import SolidMarkdown from "solid-markdown";

// 支持 markdown 语法
const WorkList = () => {
  const workDescription = {
    name: "ByteCycle 平台 (DevOps 平台)",
    description:
      "整合字节内部研发工具，打造「需求-研发-测试-交付-度量」的一站式研发管理平台。ByteCycle 使得构建、测试、发布软件能够更加地快捷、频繁和可靠。 ",
  };

  const temp = `
- 负责前端团队的研发流程的最佳实践⽅案制定, **覆盖需求分析** -> 研发流程 -> 发布流程 -> 线上监控等阶段
- 负责平台的架构升级, **改造成 Module Federation 微前端** , 提供单模块单独发布能⼒. 解耦各个模块的发版依赖.
- 负责 ByteCycle 的流⽔线, 可观测, 变量模块的需求研发与排期, 优化模块中的存量代码, 并输出规范防⽌代码劣化.
- 优化 ByteCycle 平台⻚⾯性能, 治理⻚⾯关键指标, FP, FCP, LCP 等指标低于 1s.
- 负责平台的国际化⼯作, 产出统⼀的国际化⽅案, 包含静态资源和动态资源国际化⽅案, 提供⼀键式改造插件
`;
  return (
    <>
      <div class="work-description">
        <div>{workDescription.name}</div>
        <div>{workDescription.description}</div>
      </div>

      <SolidMarkdown class="work-responsible" children={temp} />
    </>
  );
};

const WorkConpany = () => {
  const info = {
    name: "北京字节跳动科技有限公司",
    job: "前端开发工程师",
    time: "2020.06 - 至今",
  };
  return (
    <section class="work-experience">
      <div class="work-title">
        <h4>{info.name}</h4>
        <h4>{info.job}</h4>
        <h4>{info.time}</h4>
      </div>
      <WorkList />
    </section>
  );
};

const WorkExp = () => {
  return (
    <div class="area">
      <h2>工作经历</h2>
      <WorkConpany />
    </div>
  );
};

export default WorkExp;
