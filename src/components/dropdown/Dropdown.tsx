import { Dropdown } from 'semantic-ui-react';

import { GameModeData } from '../../interfaces';
import './Dropdown.scss';

type DropdownSelectionProps = {
  gameModes: GameModeData[];
  onChangeMode: (mode: number) => void;
}

const DropdownSelection: React.FC<DropdownSelectionProps> = ({ gameModes, onChangeMode }) => {
  const options = gameModes.map(({ field, name }) => {
    return { value: field, text: name }
  });

  return (
    <Dropdown
      onChange={(_e, data) => {
        if (data.value) {
          onChangeMode(Number(data.value))
        }
      }}
      className="dropdown"
      placeholder="Pick Mode"
      disabled={gameModes.length === 0}
      fluid
      selection
      options={options}
    />
  )
}

export default DropdownSelection;
