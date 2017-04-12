import React from 'react'
import GameItem from './GameItem'

const GameList = ({ games = [], onGameSelected }) => {
    const gameItemsRender = games.map((game, index) =>
        (<GameItem key={ index } gameId={ game.id } title={ game.title } onItemSelected={ onGameSelected }/>)
    )

    return (
        <div>
            { gameItemsRender }
        </div>
    )
}

GameList.propTypes = {
    games: React.PropTypes.array,
    onGameSelected: React.PropTypes.func.isRequired
}

export default GameList;