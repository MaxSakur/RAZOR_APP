import * as React from 'react';
import { Outlet } from 'react-router-dom';
import NavLink from '../../../components/commonLink';
import {
  AnimatedDiv,
  FlexVertical,
} from '../../../components/common/styled_components';

export function LoginScreenLayout() {
  return (
    <FlexVertical>
      <Outlet />
      <AnimatedDiv>
        <NavLink navLink={'login'} text={'Login'} />
        <NavLink navLink={'registration'} text={'Registrate account'} />
      </AnimatedDiv>
    </FlexVertical>
  );
}
