import { useTranslation } from 'react-i18next';
import CommonModal from '../../components/commonModal';
import { LoginContent } from './authContent/LoginContent';
import { Route, Routes, Navigate } from 'react-router-dom';
import { textCapitalize } from '../../utils/textCapitalize';
import { RegistrationContent } from './authContent/RegistrationContent';

const LoginModal = () => {
  const { t } = useTranslation();
  return (
    <CommonModal
      headerText={textCapitalize(t('auth.login.login'))}
      body={<LoginContent isAuthShown={true} />}
    />
  );
};
const RegistrationModal = () => {
  const { t } = useTranslation();
  return (
    <CommonModal
      headerText={textCapitalize(t('auth.registration.registration'))}
      body={<RegistrationContent isAuthShown={true} />}
    />
  );
};

const DonateModal = () => {
  const { t } = useTranslation();
  return (
    <CommonModal
      headerText={textCapitalize(t('auth.donate.donate'))}
      body={
        <p
          style={{
            textAlign: 'center',
            textTransform: 'capitalize',
            color: '#fff',
          }}>
          here you can donate me a bit =)
        </p>
      }
    />
  );
};

export const TopSectionRoutes = () => {
  return (
    <Routes>
      <Route exact index path="/" element={<div />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/registration" element={<RegistrationModal />} />
      <Route path="/donate" element={<DonateModal />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
