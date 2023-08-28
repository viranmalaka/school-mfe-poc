import UpdatePassword from '../Components/UpdatePassword';

const BasePage = ({ path }: { path: string[] }) => {
  const url = path ? path.join('/') : '';

  const componentMap = {
    'update-passwords': UpdatePassword,
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Component = componentMap[url];

  if (Component) {
    return <Component />;
  }
  return <div>Not Found 404</div>;
};

export default BasePage;
