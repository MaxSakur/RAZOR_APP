import React from 'react';
import { LoginContent } from './authContent/LoginContent';
import { RegistrationContent } from './authContent/RegistrationContent';
import { Tab, Tabs, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './styles.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const AuthTabs = () => {
  const state = useSelector((state) => state.user);
  const { t } = useTranslation();
  const [activeTabIndex, changeActiveTabIndex] = React.useState(0);
  const loginTabContent = [
    {
      name: t('auth.login.login'),
      tabContent: <LoginContent />,
    },
    {
      name: t('auth.registration.registration'),
      tabContent: <RegistrationContent />,
    },
  ];

  return (
    <Paper className="loginContainer" elevation={4}>
      {/* TODO: Add modal with close button */}
      <div className="tabContainer">
        <Tabs value={activeTabIndex} aria-label="auth tabs">
          {loginTabContent.map((item, index) => {
            return (
              <Tab
                key={index}
                wrapped
                label={item.name}
                {...a11yProps(index)}
                onClick={() => changeActiveTabIndex(index)}
                className="tabItemHeader"
              />
            );
          })}
        </Tabs>
        <div className="tabBody">
          {loginTabContent[activeTabIndex].tabContent}
        </div>
      </div>
    </Paper>
  );
};
