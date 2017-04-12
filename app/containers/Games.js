import React, { Component } from 'react';
import connectProps from '../utils/redux-connect-helper'
import GameList from '../components/GameList'
import { withRouter } from 'react-router'

class Games extends Component {

    handleOnGameSelected = (gameId) => {
        const { match, location, history } = this.props
        if(!this.props.loading){
            history.push(`/codex/${gameId}`)
            this.props.actions.getCodexRequest(gameId)
        }
    }

    render(){

        return (
            <div>
                <GameList games={ this.props.games } onGameSelected={ this.handleOnGameSelected }/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.codex
}

export default connectProps(mapStateToProps, withRouter(Games))