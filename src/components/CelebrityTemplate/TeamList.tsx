import React from 'react'

interface TeamListProps {
  teamList: string[];
}

const TeamList: React.FC<TeamListProps> = ({ teamList }) => {
  return (
    <div className="team-list">
      {teamList.map(member => <div className="member">{member}</div>)}
    </div>
  );
}

export default TeamList;