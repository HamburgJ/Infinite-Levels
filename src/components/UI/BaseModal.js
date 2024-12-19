import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledModal = styled(Modal)``;

const BaseModal = ({ show, onHide, children, theme, ...props }) => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const [initialLevel, setInitialLevel] = React.useState(null);

  const handleHide = () => {
    onHide();
  };

  return (
    <StyledModal show={show} onHide={handleHide} theme={theme} {...props}>
      {children}
    </StyledModal>
  );
};

export default BaseModal; 