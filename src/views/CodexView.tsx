import * as React from "react";
import View from "../components/layout/View";
import SearchBox from "../components/SearchBox";

class CodexView extends React.Component {
  handleOnSearch = (value: string) => {};

  render() {
    return (
      <View>
        <SearchBox onSearch={this.handleOnSearch} />
      </View>
    );
  }
}

export default CodexView;
