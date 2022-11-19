import { MouseEvent } from 'react';

import '../../styles/layout/toggleButton.scss';

interface ToggleButtonProps {
  callback: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  isMenuOpen: boolean;
}

export const ToggleButton = ({
  callback,
  disabled,
  isMenuOpen,
}: ToggleButtonProps) => {
  return (
    <button
      className={`${isMenuOpen ? 'close' : 'menu'}`}
      disabled={disabled}
      onClick={callback}
    >
      <div />
      <div />
      <div />
    </button>
  );
};
