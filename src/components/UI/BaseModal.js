import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BaseModal = ({ show, onHide, children, ...props }) => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const [initialLevel, setInitialLevel] = React.useState(null);

  useEffect(() => {
    if (show) {
      setInitialLevel(currentLevel);
    }
  }, [show, currentLevel]);

  useEffect(() => {
    if (initialLevel && currentLevel !== initialLevel) {
      onHide();
      setInitialLevel(null);
    }
  }, [currentLevel, initialLevel, onHide]);

  return (
    <Modal show={show} onHide={onHide} {...props}>
      {children}
    </Modal>
  );
};

export default BaseModal; 