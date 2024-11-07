import React, { useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BaseModal = ({ show, onHide, children, ...props }) => {
  const currentLevel = useSelector((state) => state.game.currentLevel);
  const [initialLevel, setInitialLevel] = React.useState(null);
  const [isClosing, setIsClosing] = React.useState(false);
  const scrollRef = useRef(0);

  // Capture scroll position before any state updates
  if (show && !document.body.classList.contains('modal-open')) {
    scrollRef.current = window.pageYOffset || document.documentElement.scrollTop;
    console.log('[SCROLL] Initial capture:', scrollRef.current);
  }

  useEffect(() => {
    if (show) {
      console.log('[MODAL] Opening modal');
      console.log('[SCROLL] Current position:', scrollRef.current);
    } else if (isClosing) {
      console.log('[EVENT] Closing sequence started');
      console.log('[SCROLL] Attempting to restore to:', scrollRef.current);
      const scrollPosition = scrollRef.current;
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
      console.log('[SCROLL] Restoration complete');
      setIsClosing(false);
    }
  }, [show, isClosing]);

  const wrappedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    if (child.props.onClick || child.type === 'button' || child.type?.name === 'Button') {
      return React.cloneElement(child, {
        onClick: (e) => {
          console.log('[EVENT] Button clicked');
          console.log('[EVENT] Original onClick present:', !!child.props.onClick);
          setIsClosing(true);
          if (child.props.onClick) {
            child.props.onClick(e);
          }
        }
      });
    }
    return child;
  });

  const handleHide = () => {
    console.log('[EVENT] Hide triggered');
    setIsClosing(true);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleHide} {...props}>
      {wrappedChildren}
    </Modal>
  );
};

export default BaseModal; 