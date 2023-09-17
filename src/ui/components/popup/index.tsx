import React, { ReactElement, ReactNode, useEffect } from 'react';
import { Text } from '@ui';
import FocusLock from 'react-focus-lock';
import { AiOutlineClose } from "react-icons/ai";
import { StyledCloseButton, StyledPopup, StyledPopupBackground, StyledPopupHeader } from './styles';

export type PopupProps = {
  handleClose: () => void;
  title?: string | ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Popup = ({ handleClose, title, children, className }: PopupProps): ReactElement => {
  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <FocusLock>
      <StyledPopupBackground>
        <StyledPopup>
          <StyledPopupHeader>
            <Text color="#fff" size={20}>{title}</Text>
            <StyledCloseButton onClick={handleClose}>
              <AiOutlineClose color='#fff' size={20} />
            </StyledCloseButton>
          </StyledPopupHeader>
          {children}
        </StyledPopup>
      </StyledPopupBackground>
    </FocusLock>
  );
};
