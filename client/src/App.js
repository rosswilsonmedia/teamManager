import './App.css';
import { useState } from 'react';

import {Router} from '@reach/router';
import PlayerList from './views/PlayerList';
import AddPlayer from './views/AddPlayer';


function App() {
  const [playerList, setPlayerList] = useState([]);

  return (
    <Router>
      <PlayerList
        playerList={playerList}
        setPlayerList={setPlayerList}
        path='/players/list'
      />
      <AddPlayer
        path='/players/addplayer'
      />
    </Router>
  );
}

export default App;
