import React, { useState } from 'react';

import TeamList from './TeamList';

interface CelebrityTemplateProps {
  redTeam: string[];
  blueTeam: string[];
}

interface member {
  idx: number;
  username: string;
}

const CelebrityTemplate: React.FunctionComponent<CelebrityTemplateProps> = () => {
  const [redTeam, useRedTeam] = useState<string[]>(['윤자이']);
  const [blueTeam, useBlueTeam] = useState<string[]>(['김승', '김ㅇㄴㄹ미']);

  return (
    <section className="outter-container">
      <div className="inner-container">
        <main className="main">
          <div className="blue-team">
            <TeamList teamList={redTeam} />
            <button></button>
          </div>
          <div className="img">

          </div>
          <div className="blue-team">
            <TeamList teamList={blueTeam} />
          </div>
        </main>
      </div>
    </section>
  );
}

export default CelebrityTemplate;