import React from 'react';
import { LoginContent } from './authContent/LoginContent';
import { RegistrationContent } from './authContent/RegistrationContent';
// import { Tab, Tabs, Box, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './styles.css';

export const AuthTabs = ({ isAuthShown, isAuthOpenChange }) => {
  const { t } = useTranslation();
  const [activeTabIndex, changeActiveTabIndex] = React.useState(0);
  const loginTabContent = [
    {
      name: t('auth.login.login'),
      tabContent: <LoginContent isAuthOpenChange={isAuthOpenChange} />,
    },
    {
      name: t('auth.registration.registration'),
      tabContent: <RegistrationContent isAuthOpenChange={isAuthOpenChange} />,
    },
  ];

  return (
    <div
      open={isAuthShown}
      onClose={() => isAuthOpenChange()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div>
        <div className="tabContainer" id="modal-modal-title">
          <div value={activeTabIndex} aria-label="auth tabs">
            {loginTabContent.map((item, index) => {
              return (
                <div
                  key={index}
                  wrapped
                  label={item.name}
                  onClick={() => changeActiveTabIndex(index)}
                  className="tabItemHeader"
                />
              );
            })}
          </div>
        </div>

        <div className="tabBody" id="modal-modal-description">
          {loginTabContent[activeTabIndex].tabContent}
        </div>
      </div>
    </div>
  );
};
