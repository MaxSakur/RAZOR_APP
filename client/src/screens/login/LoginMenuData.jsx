const TestBox = () => {
  return <p style={{ color: 'red' }}>Yo</p>;
};

// TABS
const tabs = [
  {
    tabName: 'initial',
    content: [
      { text: 'auth.login.login', navToTab: 'login' },
      {
        text: 'auth.registration.registration',
        navToTab: 'registration',
      },
      {
        text: 'auth.options.options',
        navToTab: 'options',
      },
    ],
  },
  {
    tabName: 'login',
    content: [
      { text: 'auth.login.login', component: <TestBox /> },
      { text: 'auth.login.login', component: <TestBox /> },
      { text: 'auth.login.login', component: <TestBox /> },
      { text: 'auth.back', navToTab: 'initial' },
    ],
  },
  {
    tabName: 'registration',
    content: [
      { text: 'auth.registration.registration', component: <TestBox /> },
      { text: 'auth.registration.registration', component: <TestBox /> },
      { text: 'auth.registration.registration', component: <TestBox /> },
      { text: 'auth.back', navToTab: 'initial' },
    ],
  },
  {
    tabName: 'options',
    content: [
      { text: 'auth.options.options', component: <TestBox /> },
      { text: 'auth.options.options', component: <TestBox /> },
      { text: 'auth.options.options', component: <TestBox /> },
      { text: 'auth.back', navToTab: 'initial' },
    ],
  },
];

export const loginMenuData = (name) => {
  const result = tabs.find((item) => item.tabName == name);
  return result;
};
