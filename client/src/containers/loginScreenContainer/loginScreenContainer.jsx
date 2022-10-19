import React from "react";
import { useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Screen,
  LoginMonitor,
} from "../../components/common/styled_components";
import { textCapitalize } from "../../utils/textCapitalize";
import { LoginContent } from "../../screens/login/authContent/LoginContent";
import { RegistrationContent } from "../../screens/login/authContent/RegistrationContent";
import CommonModal from "../../components/commonModal";
import LoginScreenLayout from "../../screens/login/loginMenu";
import BG from "../../assets/images/screens_bg/login_screen_bg-min.jpeg";

const LoginModal = () => {
  const { t } = useTranslation();
  return (
    <LoginMonitor>
      <CommonModal
        headerText={textCapitalize(t("auth.login.login"))}
        body={<LoginContent />}
      />
    </LoginMonitor>
  );
};

const RegistrationModal = () => {
  const { t } = useTranslation();
  return (
    <LoginMonitor>
      <CommonModal
        headerText={textCapitalize(t("auth.registration.registration"))}
        body={<RegistrationContent />}
      />
    </LoginMonitor>
  );
};

export function LoginScreenData() {
  let routes = [
    {
      path: "/",
      element: <LoginScreenLayout />,
      children: [
        { index: true, path: "/", element: <LoginMonitor /> },
        { path: "/login", element: <LoginModal /> },
        {
          path: "/registration",
          element: <RegistrationModal />,
        },
      ],
    },
  ];

  let flow = useRoutes(routes);
  return <div>{flow}</div>;
}

export const LoginScreenContainer = () => {
  return (
    <Screen bg={BG} className="fullHeigth" spaceBetween>
      <LoginScreenData />
    </Screen>
  );
};
