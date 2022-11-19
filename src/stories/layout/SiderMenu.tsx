import '../../styles/layout/siderMenu.scss';

export const SiderMenu = (props: { isHidden: boolean; willFade: boolean }) => {
  const { isHidden, willFade } = props;

  const menuItems = Array.from({ length: 5 }).map((t, i) => `Option ${i + 1}`);

  return (
    <div
      className={`siderMenu ${isHidden && 'isHidden'} ${
        willFade && 'willFade'
      } `}
    >
      {menuItems.map((option, i) => (
        <a href="/" key={'sider-menu-option' + i}>
          {option}
        </a>
      ))}
    </div>
  );
};
