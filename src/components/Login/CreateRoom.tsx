import React, { useState } from 'react';

const CreateRoom: React.FunctionComponent = () => {
  const [nickName, setNickName] = useState<string>('');
  const [roomName, setRoomName] = useState<string>('');
  const [selectGame, setSelectGame] = useState<string>('');

  interface Option {
    nickName: string;
    roomName: string;
    selectGame: string;
  }

  const handleBtn = () => {
    const opt: Option = {
      nickName,
      roomName,
      selectGame
    };
    console.log(opt);
  }

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
            value={roomName}
            onChange={(event) => setRoomName(event.target.value)}
          />
        </div>
        <div className="form-group">
        <select name="selectGame" value={selectGame} onChange={(event) => setSelectGame(event.target.value)}>
            <option value="">직업선택</option>
            <option value="celebrity">연예인 사진 맞추기</option>
        </select>
        </div>
      </div>
      <div className="footer">
          <button type="button" className="btn" onClick={handleBtn}>
            Create Room
          </button>
        </div>
    </section>
  );
}

export default CreateRoom;