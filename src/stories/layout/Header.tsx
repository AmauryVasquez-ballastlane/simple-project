import '../../styles/layout/header.scss';

export const Header = (props: { fill?: boolean }) => {
  const { fill } = props;

  return (
    <header className={`header ${fill && 'fill'}`}>
      <span> storybook learning</span>
    </header>
  );
};
