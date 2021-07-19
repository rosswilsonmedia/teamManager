import PlayerForm from '../components/PlayerForm';

import axios from 'axios';

import { Link, navigate } from '@reach/router';

const AddPlayer = () => {
    const onSubmitFunction = (e) => {
        axios.post('http://localhost:8000/api/players', {
            name: e.target.name.value,
            preferredPosition: e.target.preferredPosition.value
        })
            .then(res => {
                navigate('/players/list');
            })
            .catch(err => console.log(err))
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
                        List
                    </Link>
                    <span> | </span>
                    <Link to='/players/addplayer'>
                        <b>Add Player</b>
                    </Link>
                </p>
                <PlayerForm onSubmitFunction={onSubmitFunction}/>
            </div>
        </>
    )
}

export default AddPlayer;