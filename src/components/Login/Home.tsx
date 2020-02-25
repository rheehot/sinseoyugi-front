import React, { useState } from 'react';
import './Home.css';

import CreateRoom from './CreateRoom';
import Join from './Join';

const Index: React.FunctionComponent = () => {
  const [isJoin, setIsJoin] = useState<boolean>(false);
  const handleCreateRoom = () => setIsJoin(false);
  const handleJoin= () => setIsJoin(true);

  return (
    <section className="outter-container">
      <div className="inner-container">
        <div className="chang-mode">
          <button type="button" className="btn" onClick={handleCreateRoom}>
            Create Room
          </button>
          <button type="button" className="btn" onClick={handleJoin}>
            Join
          </button>
        </div>
        {
          isJoin ? <Join /> : <CreateRoom />
        }
      </div>
    </section>
  );
}

export default Index;