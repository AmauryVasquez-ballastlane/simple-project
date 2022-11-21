import '../../styles/layout/siderMenu.scss';

export const SiderMenu = (props: { isHidden: boolean }) => {
  const { isHidden } = props;

  const menuItems = Array.from({ length: 5 }).map((t, i) => `Option ${i + 1}`);

  return (
    <div className={`siderMenu ${isHidden && 'isHidden'} `}>
      {menuItems.map((option, i) => (
        <a href="/" key={'sider-menu-option' + i}>
          {option}
        </a>
      ))}
    </div>
  );
};
