import { useState } from "react";

const PlayerForm = (props) => {
    const {onSubmitFunction} = props;
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [preferredPosition, setPreferredPosition] = useState('');


    const nameValidation = (e) => {
        setName(e.target.value);
        if(e.target.value.length<2){
            setError('*name must be at least two characters long');
        } else {
            setError(false);
        }
    }

    const formHandler = (e) => {
        e.preventDefault();
        onSubmitFunction(e);
    }

    return (
        <form onSubmit={formHandler}>
            <label htmlFor='name'>Player Name:</label>
            <input
                type='text'
                id='name'
                name='name'
                onChange={nameValidation}
                value={name}
            />
            {
                error?
                <p style={{color: 'red'}}>{error}</p>:
                ''
            }
            <label htmlFor='preferredPosition'>Preferred Position:</label>
            <input
                type='text'
                id='preferredPosition'
                name='preferredPosition'
                onChange={(e) => setPreferredPosition(e.target.value)}
                value={preferredPosition}
            />
            {
                error?
                <input
                    type='submit'
                    value='Player Invalid'
                    disabled
                />:
                <input
                    type='submit'
                    value='Add Player'
                />
            }
        </form>
    )
}

export default PlayerForm;