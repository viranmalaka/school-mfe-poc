import SchoolAdminNavigation from 'school-admin-remote/nav-config';
import SchoolStudentNavigation from 'school-student-remote/nav-config';
import SchoolTeacherNavigation from 'school-teacher-remote/nav-config';

export const getFullMenu = () => {
  return [
    SchoolAdminNavigation,
    SchoolStudentNavigation,
    SchoolTeacherNavigation,
  ]
    .map(({ menu }) => menu)
    .reduce((fullMenu, current) => {
      if (Array.isArray(current)) {
        return [...fullMenu, ...current];
      }
      return fullMenu;
    }, []);
};
