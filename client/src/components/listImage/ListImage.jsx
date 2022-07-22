import React from 'react';
import {
  CardImage,
  CardRoleImage,
  CardImageContainer,
  CardLabel,
  CardCenterWrapper,
} from '../../components/common/styled_components';

export const ListImage = ({ src, alt, isIcon, isActive, onClick, type }) => {
  return (
    <CardImageContainer isActive={isActive} isIcon={isIcon} onClick={onClick}>
      {alt && <CardLabel>{alt}</CardLabel>}
      <CardCenterWrapper isIcon={isIcon}>
        {type === 'role' ? (
          <CardRoleImage src={src} alt={alt} icon={isIcon} />
        ) : (
          <CardImage src={src} alt={alt} icon={isIcon} />
        )}
      </CardCenterWrapper>
    </CardImageContainer>
  );
};
