import { MouseEvent, useState } from 'react';

import { SiderMenu } from './SiderMenu';
import '../../styles/layout/sider.scss';
import { ToggleButton } from './ToggleButton';

export const Sider = () => {
  // State
  const [isHidden, setHide] = useState(true);
  const [willFade, setFade] = useState(false);

  const callback = (e: MouseEvent<HTMLButtonElement>) => {
    // Callback functions for toggle button
    const openMenu = () => setHide(false);
    const closeMenu = () => {
      setFade(true);
      setTimeout(() => {
        setHide(true);
        setFade(false);
      }, 500);
    };

    if (isHidden) openMenu();
    else closeMenu();
  };

  return (
    <div className="sider">
      <ToggleButton
        callback={callback}
        disabled={willFade}
        isMenuOpen={!isHidden}
      />
      <SiderMenu isHidden={isHidden} willFade={willFade} />
    </div>
  );
};
