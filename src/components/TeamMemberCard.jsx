const TeamMemberCard = ({ name, title }) => {
  return (
    <>
      <div className="team-card">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </>
  );
};

export default TeamMemberCard;
