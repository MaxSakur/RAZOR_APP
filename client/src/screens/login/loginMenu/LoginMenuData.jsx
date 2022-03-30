const Sound = () => {
  return <p style={{ color: 'red' }}>Disable sound</p>;
};
const Music = () => {
  return <p style={{ color: 'red' }}>Disable music</p>;
};
const Lang = () => {
  return <p style={{ color: 'red' }}>Change language</p>;
};

// TABS
const tabs = [
  {
    tabName: 'initial',
    content: [
      { text: 'auth.login.login', navToScreen: 'login' },
      {
        text: 'auth.registration.registration',
        navToScreen: 'registration',
      },
      {
        text: 'auth.options.options',
        navToScreen: '/',
        navToTab: 'options',
      },
      {
        text: 'auth.donate.donate',
        navToScreen: 'donate',
      },
    ],
  },

  {
    tabName: 'options',
    content: [
      {
        text: 'auth.options.disableSound',
        event: () => console.log('donate'),
        component: <Lang />,
      },
      {
        text: 'auth.options.helpProject',
        event: () => console.log('donate'),
        component: <Sound />,
      },
      {
        text: 'auth.options.options',
        event: () => console.log('donate'),
        component: <Music />,
      },
      { text: 'auth.back', navToTab: 'initial' },
    ],
  },
];

export const loginMenuData = (name) => {
  const result = tabs.find((item) => item.tabName === name);
  return result;
};
