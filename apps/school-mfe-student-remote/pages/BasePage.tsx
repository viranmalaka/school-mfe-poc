import AddStudentForm from '../Components/AddNew';
import BasicTable from '../Components/AllStudents';
import EditStudentForm from '../Components/EditForm';
import StudentInquiry from '../Components/StudentInquiry';

const BasePage = ({ path }: { path: string[] }) => {
  const url = path ? path.join('/') : '';

  const componentMap = {
    all: BasicTable,
    'add-new': AddStudentForm,
    edit: EditStudentForm,
    inquiry: StudentInquiry,
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
