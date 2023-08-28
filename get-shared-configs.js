const getRemote = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    'school-host': `school-host@${process.env.HOST_URL}/_next/static/${location}/remoteEntry.js`,
    'school-student-remote': `school-student-remote@${process.env.REMOTE_STUDENT_URL}/_next/static/${location}/remoteEntry.js`,
    'school-teacher-remote': `school-teacher-remote@${process.env.REMOTE_TEACHER_URL}/_next/static/${location}/remoteEntry.js`,
    'school-admin-remote': `school-admin-remote@${process.env.REMOTE_ADMIN_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const getShareModules = (rest = {}) => ({
  '@mui/material': {
    singleton: true,
  },
});

const getCommonExposes = (rest = {}) => ({
  './base-page': './pages/BasePage.tsx',
  './nav-config': './config/navigation.tsx',
  ...rest,
});

module.exports = { getRemote, getShareModules, getCommonExposes };
