import React from 'react'

const GameItem = ({ gameId, title, onItemSelected }) => (
    <div onClick={() => onItemSelected(gameId)}>
        <p>{title}</p>
    </div>
)

GameItem.propTypes = {
    gameId: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    onItemSelected: React.PropTypes.func.isRequired
}

export default GameItem