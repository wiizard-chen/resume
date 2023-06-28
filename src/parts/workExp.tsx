import SolidMarkdown from "solid-markdown";
import { intergrationExperience } from "./resumeContent";

// 支持 markdown 语法
const WorkList = (props: {
  infos: Array<{ name: string; description: string; detail: string }>;
}) => {
  const { infos } = props;
  return (
    <>
      {infos.map((workDescription: any) => {
        return (
          <>
            <div class="work-description">
              <div>{workDescription.name}</div>
              <div>{workDescription.description}</div>
            </div>

            <SolidMarkdown
              class="work-responsible"
              children={workDescription.detail}
            />
          </>
        );
      })}
    </>
  );
};

const WorkConpany = () => {
  return (
    <div>
      {intergrationExperience.map((info) => {
        return (
          <section class="work-experience">
            <div class="work-title">
              <h3>{info.name}</h3>
              <h3>{info.job}</h3>
              <h3>{info.time}</h3>
            </div>
            <WorkList infos={info.projectExperience} />
          </section>
        );
      })}
    </div>
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
