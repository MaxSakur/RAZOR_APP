import React from 'react';
import { LoginContent } from './authContent/LoginContent';
import { RegistrationContent } from './authContent/RegistrationContent';
import { Tab, Tabs, Box, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';
import './styles.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
    <Modal
      open={isAuthShown}
      onClose={() => isAuthOpenChange()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <div className="tabContainer" id="modal-modal-title">
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
        </div>

        <div className="tabBody" id="modal-modal-description">
          {loginTabContent[activeTabIndex].tabContent}
        </div>
      </Box>
    </Modal>
  );
};
