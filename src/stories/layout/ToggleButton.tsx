import { MouseEvent } from 'react';

import '../../styles/layout/toggleButton.scss';

interface ToggleButtonProps {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  isMenuOpen: boolean;
}

export const ToggleButton = ({ callback, isMenuOpen }: ToggleButtonProps) => {
  return (
    <button className={`${isMenuOpen ? 'close' : 'menu'}`} onClick={callback}>
      <div />
      <div />
      <div />
    </button>
  );
};
