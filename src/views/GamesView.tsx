import * as React from "react";
import View from "../components/layout/View";
import Card from "../components/layout/Card";
import SearchBox from "../components/SearchBox";

interface Game {
  id: string;
  title: string;
}

interface GamesViewState {
  games: Game[];
}

class GamesView extends React.Component<{}, GamesViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      games: []
    };
  }

  async componentDidMount() {
    const response = await fetch("/api/games").then(r => r.json());

    this.setState({
      games: response.data
    });
  }

  handleOnSearch = (value: string) => {};

  render() {
    console.log("render", this.state);
    return (
      <View>
        <SearchBox onSearch={this.handleOnSearch} />
        <div>
          {this.state.games
            ? this.state.games.map((g: any) => (
                <Card key={g.id}>
                  <p>{g.title}</p>
                </Card>
              ))
            : null}
        </div>
      </View>
    );
  }
}

export default GamesView;
