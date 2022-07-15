import * as React from 'react';
import { Outlet, useRoutes, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CommonModal from '../../../components/commonModal';
import ListItem from '../../../components/listItem';
import { LoginContent } from './../authContent/LoginContent';
import { textCapitalize } from '../../../utils/textCapitalize';
import { RegistrationContent } from './../authContent/RegistrationContent';
import { AnimatedDiv } from '../../../components/common/styled_components';

const LoginNavMenuItem = ({ navLink, text }) => {
  const navigate = useNavigate();
  return (
    <ListItem
      isFading={true}
      // onAnimationEnd={() => setFading(false)}
      onClick={() => navigate(navLink)}>
      {text}
    </ListItem>
  );
};

const LoginModal = () => {
  const { t } = useTranslation();
  return (
    <CommonModal
      headerText={textCapitalize(t('auth.login.login'))}
      body={<LoginContent />}
    />
  );
};

const RegistrationModal = () => {
  const { t } = useTranslation();
  return (
    <CommonModal
      headerText={textCapitalize(t('auth.registration.registration'))}
      body={<RegistrationContent />}
    />
  );
};

export function LoginScreenData() {
  let routes = [
    {
      path: '/',
      element: <LoginScreenLayout />,
      children: [
        { index: true, path: '/login', element: <LoginModal /> },
        {
          path: '/registration',
          element: <RegistrationModal />,
        },
        // { path: '*', element: <LoginModal /> },
      ],
    },
  ];

  let flow = useRoutes(routes);
  return <div>{flow}</div>;
}

function LoginScreenLayout() {
  return (
    <div>
      <Outlet />
      <AnimatedDiv>
        <LoginNavMenuItem navLink={'login'} text={'login'} />
        <LoginNavMenuItem navLink={'registration'} text={'registration'} />
      </AnimatedDiv>
    </div>
  );
}
