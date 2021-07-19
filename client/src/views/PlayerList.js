import { useState, useEffect } from "react";

import {Link} from '@reach/router';

import axios from 'axios';

import PlayerTable from "../components/PlayerTable";

const PlayerList = (props) => {
    const {playerList, setPlayerList} = props;
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayerList(res.data);
                setLoaded(true);
        })
            .catch(err => console.log(err))
    }, [])

    const deleteFunction = (playerId) => {
        if(window.confirm('Are you sure you want to delete this user?')){
            axios.delete('http://localhost:8000/api/players/' + playerId)
                .then(res => {
                    setPlayerList(playerList.filter(player => player._id != playerId));
                })
        }
    }


    return (
        <>
            <nav>
                <Link to='/players/list'>
                    <b>Manage Players</b>
                </Link>
                <span> | </span>
                <Link to='/status/game/1'>
                    Manage Player Status
                </Link>
            </nav>
            <div>
                <p>
                    <Link to='/players/list'>
                        <b>List</b>
                    </Link>
                    <span> | </span>
                    <Link to='/players/addplayer'>
                        Add Player
                    </Link>
                </p>
                {
                    loaded?
                    <PlayerTable
                        playerList={playerList}
                        deleteFunction={deleteFunction}
                    />:
                    ''
                }
            </div>
        </>
    )
}

export default PlayerList;