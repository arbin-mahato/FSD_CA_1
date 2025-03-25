import TeamMemberCard from "./components/TeamMemberCard";
import "./App.css";

const App = () => {
  const member1 = "Mukesh Patil";
  const title1 = "Designer";
  const member2 = "Sanjay Gupta";
  const title2 = "Program Head";
  const member3 = "Ram Singh";
  const title3 = "Mechanical Engineer";
  const member4 = "Manoj Thapar";
  const title4 = "Project Supervisor";
  return (
    <>
      <div className="container">
        <TeamMemberCard name={member1} title={title1} />
        <TeamMemberCard name={member2} title={title2} />
        <TeamMemberCard name={member3} title={title3} />
        <TeamMemberCard name={member4} title={title4} />
      </div>
    </>
  );
};

export default App;
