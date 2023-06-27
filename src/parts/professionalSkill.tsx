import SolidMarkdown from "solid-markdown";

const skillContent = `
- 熟练使⽤ Webpack 进⾏⽹站性能优化，包括代码分割、按需加载和资源压缩等，有效提升⽹站加载速度和运⾏效率，为⽤户带来更优秀的体验
- API性能监控 有深⼊了解，能够针对性地提出合理的优化⽅案并进⾏实施，从⽽提升系统整体性能，保证项⽬稳定⾼效运⾏
- 精通 React Hooks技术 ，可以灵活地构建⾼质量的React组件。同时，熟悉各类React状态库的使⽤，如Redux和MobX等，能够根据项⽬需求选择合适的状态管理⽅案进⾏⾼效的组件开发和状态管理
- 深⼊了解 Webpack的核⼼原理和配置 ，具备调整和优化Webpack配置的能⼒，能够根据项⽬需求进⾏适当的配置调整，提⾼开发和构建效率
- 熟练掌握 TypeScript编程语⾔ ，熟悉其类型系统和类型推导等特性，能编写⾼稳定性且具有强灵活度的前端项⽬，降低维护成本和潜在错误⻛险
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
