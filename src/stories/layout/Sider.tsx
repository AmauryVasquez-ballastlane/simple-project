import { MouseEvent, useState } from 'react';

import { SiderMenu } from './SiderMenu';
import '../../styles/layout/sider.scss';
import { ToggleButton } from './ToggleButton';

export const Sider = () => {
  // State
  const [isHidden, setHide] = useState(true);

  const callback = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    setHide(() => !isHidden);
  };

  return (
    <div className="sider">
      <ToggleButton callback={callback} isMenuOpen={!isHidden} />
      {!isHidden && <SiderMenu isHidden={isHidden} />}
    </div>
  );
};
