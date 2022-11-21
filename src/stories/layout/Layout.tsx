import { Sider } from './Sider';
import { Header } from './Header';

export const Layout = (props: { children?: JSX.Element }) => {
  const { children } = props;

  return (
    <div className="layout">
      <Header fill />
      <Sider />
      {children}
    </div>
  );
};
