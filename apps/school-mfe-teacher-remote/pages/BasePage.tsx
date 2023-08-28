import AddNew from "../Components/AddNew";
import AllTeachers from "../Components/AllTeachers";
import EditForm from "../Components/EditForm";


const BasePage = ({ path }: { path: string[] }) => {
  const url = path ? path.join('/') : '';

  const componentMap = {
    all: AllTeachers,
    'add-new': AddNew,
    edit: EditForm,
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
