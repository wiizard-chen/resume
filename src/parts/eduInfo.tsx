import { eduInfo } from "./resumeContent";

const EduInfo = () => {
  return (
    <div class="area">
      <h2>教育经历</h2>
      <div class="edu-title">
        <h3>{eduInfo.school}</h3>
        <h3>{eduInfo.graduation}</h3>
        <h3>{eduInfo.grade}</h3>
      </div>
    </div>
  );
};

export default EduInfo;
