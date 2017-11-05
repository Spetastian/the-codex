import React, {Component} from 'react';
import SheetSection from './SheetSection';
import SheetSectionColumn from './SheetSectionColumn';
import SavageWorldsTrait from './savageWorlds/SavageWorldsTrait';
import SavageWorldsDerivedStat from './savageWorlds/SavageWorldsDerivedStat';
import NoteList from './NoteList';

const hindraces = [
  {
    title: 'Lame',
    description: 'Lame description'
  },
  {
    title: 'Death wish',
    description: 'Death wish description'
  }
];

const edges = [
  {
    title: 'Ace',
    description: 'Ace description'
  },
  {
    title: 'Martial artist',
    description: 'Martial artist description'
  }
];

class InterfaceZeroSheet extends Component {

  handleAddNewSkill = () => {
    
  }

  handleAddNewHindrance = () => {

  }

  handleAddNewEdge = () => {
    
  }

  render() {
    return (
      <div>
        <SheetSection title="Attributes">
          <SheetSectionColumn>
            <SavageWorldsTrait name="Agility" value={4} />
            <SavageWorldsTrait name="Smarts" value={4} />
            <SavageWorldsTrait name="Spirit" value={4} />
            <SavageWorldsTrait name="Strength" value={4} />
            <SavageWorldsTrait name="Vigor" value={4} />
          </SheetSectionColumn>
          <SheetSectionColumn>
            <SavageWorldsDerivedStat title="Charisma" />
            <SavageWorldsDerivedStat title="Pace" />
            <SavageWorldsDerivedStat title="Parry" />
            <SavageWorldsDerivedStat title="Toughness" />
            <SavageWorldsDerivedStat title="Firewall" />
            <SavageWorldsDerivedStat title="Strain" />
            <SavageWorldsDerivedStat title="Street cred" />
          </SheetSectionColumn>
        </SheetSection>
        <SheetSection 
          addButton 
          onAddNew={this.handleAddNewSkill}
          title="Skills">
          <SheetSectionColumn title="Agility">
            <SavageWorldsTrait name="Boating" value={4} />
            <SavageWorldsTrait name="Driving" value={4} />
            <SavageWorldsTrait name="Fighting" value={4} />
            <SavageWorldsTrait name="Strength" value={4} />
            <SavageWorldsTrait name="Lockpicking" value={4} />
          </SheetSectionColumn>
          <SheetSectionColumn title="Smarts">
            <SavageWorldsTrait name="Kn. demolitions" value={4} />
            <SavageWorldsTrait name="Kn. programming" value={4} />
            <SavageWorldsTrait name="Hacking" value={4} />
            <SavageWorldsTrait name="Strength" value={4} />
            <SavageWorldsTrait name="Vigor" value={4} />
          </SheetSectionColumn>
        </SheetSection>
        <SheetSection 
          withAddButton 
          onAddNew={this.handleAddNewHindrance}
          title="Hindrances">
          <SheetSectionColumn>
            <NoteList notes={hindraces} />
          </SheetSectionColumn>
        </SheetSection>
        <SheetSection
          withAddButton 
          onAddNew={this.handleAddNewEdge}
          title="Edges">
          <SheetSectionColumn>
            <NoteList notes={edges} />
          </SheetSectionColumn>
        </SheetSection>
      </div>
    );
  }
}

export default InterfaceZeroSheet;