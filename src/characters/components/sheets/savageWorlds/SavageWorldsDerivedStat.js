import React, { PureComponent } from 'react';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Trait from '../../Trait';

const plusMinusButtonStyle = {
  minWidth:30
};

const traitValueStyle = {
  minWidth: 40,
  display: 'inline',
};

class SavageWorldsDerivedStat extends PureComponent {

  state = {
    traitValue: 0
  }
  
  handleMinusClicked = () => {
    this.setState({
      traitValue: this.state.traitValue-1
    });
  }

  handlePlusClicked = () => {
    this.setState({
      traitValue: this.state.traitValue+1
    });
  }

  render () {
    return (
      <Trait title={this.props.title}>
        <FlatButton label={this.state.traitValue.toString()} />
        <FlatButton
          style={plusMinusButtonStyle}
          icon={ <RemoveCircle/>}
          onClick={this.handleMinusClicked}
        />
        <FlatButton
          style={plusMinusButtonStyle}
          icon={ <AddCircle/>}
          onClick={this.handlePlusClicked}
        />
      </Trait>
    )
  }
}

export default SavageWorldsDerivedStat;

