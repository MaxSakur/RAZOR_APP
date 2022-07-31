import React from 'react';
import {
  CardRoleImage,
  CardImageContainer,
  CardLabel,
  CardLabelContainer,
  CardCenterWrapper,
} from '../../components/common/styled_components';

export const ListImage = ({ src, alt, isIcon, isActive, onClick, type }) => {
  return (
    <CardImageContainer isActive={isActive} isIcon={isIcon} onClick={onClick}>
      {alt && (
        <CardLabelContainer>
          <CardLabel>{alt}</CardLabel>
        </CardLabelContainer>
      )}

      <CardCenterWrapper isIcon={isIcon}>
        <CardRoleImage src={src} alt={alt} icon={isIcon} />
      </CardCenterWrapper>
    </CardImageContainer>
  );
};
