import React, { useState } from 'react';

const Join: React.FunctionComponent = () => {
  const [nickName, setNickName] = useState<string>('');
  const [joinRoom, setJoinRoom] = useState<string>('');

  return (
    <section className="container">
      <div className="header">Join</div>
      <div className="content">

        <div className="form-group">
          <label htmlFor="Nick Name"></label>
          <input 
            type="text" 
            name="nickName" 
            placeholder="닉네임" 
            value={nickName}
            onChange={(event) => setNickName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Join Room"></label>
          <input 
            type="text" 
            name="joinRoom" 
            placeholder="방 제목" 
            value={joinRoom}
            onChange={(event) => setJoinRoom(event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}

export default Join;