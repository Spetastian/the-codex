import React, { PureComponent } from 'react';
import Trait from '../../Trait';
import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import RadioButtonUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked';

const diceLevelsContainerStyle = {
  paddingTop: 6
};

class SavageWorldsTrait extends PureComponent {

  state = {
    selectedDie: 0
  }

  handleTraitDieSelected = (selectedDie) => {
    this.setState({
      selectedDie
    });
  }

  render() {
    const { name, value } = this.props;
    return (
      <Trait title={name}>
      <div style={diceLevelsContainerStyle}>
        <TraitDieIconButton die={4} checked={this.state.selectedDie >= 4} onSelect={this.handleTraitDieSelected} />
        <TraitDieIconButton die={6} checked={this.state.selectedDie >= 6} onSelect={this.handleTraitDieSelected} />
        <TraitDieIconButton die={8} checked={this.state.selectedDie >= 8} onSelect={this.handleTraitDieSelected} />
        <TraitDieIconButton die={10} checked={this.state.selectedDie >= 10} onSelect={this.handleTraitDieSelected} />
        <TraitDieIconButton die={12} checked={this.state.selectedDie >= 12} onSelect={this.handleTraitDieSelected} />
      </div>
      </Trait>
    );
  }
}

class TraitDieIconButton extends PureComponent {

  handleClick = () => {
    const { die, onSelect} = this.props;
    onSelect(die);
  }
  
  render() {
    const { die, checked } = this.props;
    return (
      <IconButton style={{padding: 0, width:22, height:22, color: "black"}} touch={true} onClick={this.handleClick}>
        {checked ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
      </IconButton>
    );
  }
}

export default SavageWorldsTrait;