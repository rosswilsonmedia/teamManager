const PlayerTable = (props) => {
    const {playerList, deleteFunction} = props;

    const deleteHandler = (e, playerId) => {
        deleteFunction(playerId);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                playerList.map((player) => {
                    return (
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button
                                    onClick={(e) => deleteHandler(e, player._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default PlayerTable;