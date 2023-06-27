const byteDanceExperience = {
  name: "北京字节跳动科技有限公司",
  job: "前端开发工程师",
  time: "2020.06 - 2023.07",
  projectExperience: [
    {
      name: "ByteCycle 平台 (DevOps 平台)",
      description:
        "整合字节内部研发工具, 打造「需求-研发-测试-交付-度量」的一站式研发管理平台。ByteCycle 使得构建、测试、发布软件能够更加地快捷、频繁和可靠。 ",
      detail: `
- 负责前端团队的研发流程的最佳实践⽅案制定, **覆盖需求分析** -> 研发流程 -> 发布流程 -> 线上监控等阶段
- 负责平台的架构升级, **改造成 Module Federation 微前端** , 提供单模块单独发布能⼒. 解耦各个模块的发版依赖.
- 负责 ByteCycle 的流⽔线, 可观测, 变量模块的需求研发与排期, 优化模块中的存量代码, 并输出规范防⽌代码劣化.
- 优化 ByteCycle 平台⻚⾯性能, 治理⻚⾯关键指标, FP, FCP, LCP 等指标低于 1s.
- 负责平台的国际化⼯作, 产出统⼀的国际化⽅案, 包含静态资源和动态资源国际化⽅案, 提供⼀键式改造插件
`,
    },
    {
      name: "Argos 数据监控平台 (APM 平台)",
      description:
        "基于指标监控、日志、报警、链路追踪一站式可观测和诊断平台。提供丰富的可视化能力, 实时观察应用的健康状况.",
      detail: `
- 负责构建 Argos 平台的核⼼模块, 统⼀前端项⽬中的 开发规范, 联调规范并推动, 实现平台元数据的公⽤库, 降低⼈⼒接⼊成本
- 负责 Argos 核⼼模块需求评审, 技术⽅案调研, 任务拆分&估期, 以及k⼒调配.
- 负责 Argos 平台性能优化, 项⽬架构升级为微前端 Module Federation, 优化 Webpack 分包策略
- 负责 Argos 平台的容灾⽅案制定并实施, 推动横向团队的配合并实施`,
    },
    {
      name: "自定义看板平台 (Dashboard 平台)",
      description:
        "集数据查询, 数据分析, 数据可视化, 事件报警功能的监控云平台. 通过精致, 灵活的仪表板创建、探索和共享所有数据.",
      detail: `
- 从零开始构建看板平台, 负责技术选型, 项⽬技术栈有 React, uplot, arco-design, jotai, react-grid-layout.
- ⽀持各个业务团队对监控数据源的需求, 如抖⾳电商双⼗⼀活动, 抖⾳ 2022年春节活动, 提供可靠稳定的实时应⽤监控.
- 负责平台性能优化, 在单⻚⾯展示上千图表场景下, ⽹站性能 FCP, FP 指标低于 1s, TTI 低于 1.5s.
- 整理业务图表诉求, 开发 Metrics 图表 SDK , 实现横向平台低⻔槛消费 metrics 数据的诉求, ⼤幅降低团队内可视化成本
    `,
    },
  ],
};

const yoiucaiExperience = {
  name: "广州友财信息科技有限公司",
  job: "全栈开发工程师",
  time: "2016.06 - 2020.04",
  projectExperience: [
    {
      name: "中山大学收费管理平台",
      description:
        "为各大高校财务工作中的收费业务, 提供一套完整, 可靠的解决方案. 平台前端技术栈 <b>Vue, Vuex, Vue Router, Element UI</b>",
      detail: `
- 从零构建三个系统, 后台管理系统, PC端的收费⻔户以及移动端的收费⻔户
- 负责该平台的前端技术选型, 前端项目架构设计, 以及制定项目部署方案
- 负责前端公共组件设计与开发, 为公司提供一套通用前端组件库
- 负责构建该平台的开发环境与生产环境, CI系统, API文档管理系统, 项目管理系统
    `,
    },
  ],
};
const intergrationExperience = [byteDanceExperience, yoiucaiExperience];

export default intergrationExperience;
