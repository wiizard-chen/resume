import SolidMarkdown from "solid-markdown";

const skillContent = `
- **Webpack技术与性能优化**：深入了解Webpack的核心原理和配置，熟练使用Webpack进行网站性能优化，包括代码分割、按需加载和资源压缩等。具备调整和优化Webpack配置的能力，能根据项目需求进行适当的配置调整，提升开发和构建效率，同时有效提升网站加载速度和运行效率，致力于为用户提供优质的体验。
- **API性能监控**：深入理解API性能监控，能针对性地提出并实施合理的优化方案，有能力提升系统整体性能并保证项目的稳定高效运行。
- **React Hooks技术**：精通React Hooks技术，能灵活地构建高质量的React组件，熟悉Redux和MobX等React状态库，能根据项目需求选择合适的状态管理方案进行高效的组件开发和状态管理。
- **TypeScript编程语言**：熟练掌握TypeScript编程语言，熟悉其类型系统和类型推导等特性，能编写高稳定性且具有强灵活度的前端项目，有效降低维护成本和潜在错误风险。
`;

const Skill = () => {
  return <SolidMarkdown class="work-responsible" children={skillContent} />;
};
const ProfessionalSkill = () => {
  return (
    <div class="area">
      <h2>专业技能</h2>
      <Skill />
    </div>
  );
};

export default ProfessionalSkill;
