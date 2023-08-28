import { useRouter } from 'next/router';

import SchoolAdminBasePage from 'school-admin-remote/base-page';
import SchoolStudentBasePage from 'school-student-remote/base-page';
import SchoolTeacherBasePage from 'school-teacher-remote/base-page';

const RemoteMap = {
  admin: SchoolAdminBasePage,
  student: SchoolStudentBasePage,
  teacher: SchoolTeacherBasePage,
};

const BaseRouteHandler = () => {
  const router = useRouter();

  const { slug } = router.query;

  let root = '',
    restPath;
  if (slug && Array.isArray(slug)) {
    [root, ...restPath] = slug as string[];
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Comp = RemoteMap[root];

  if (Comp) {
    return <Comp path={restPath} />;
  }
  return <div> 404</div>;
};

export default BaseRouteHandler;
