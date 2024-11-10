import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BaseModal = ({ show, onHide, children, ...props }) => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const [initialLevel, setInitialLevel] = React.useState(null);

  const handleHide = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={handleHide} {...props}>
      {children}
    </Modal>
  );
};

export default BaseModal; 