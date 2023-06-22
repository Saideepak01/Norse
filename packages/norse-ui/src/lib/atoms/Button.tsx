'use-client';
import { ReactNode, useRef } from 'react';
import { useButton } from '@react-aria/button';
import { useFocusRing } from '@react-aria/focus';
import { styled } from '../defaultTheme';

interface IButton {
  children: ReactNode;
}

const StyledButton = styled('button', {
  WebkitAppearance: 'none',
  appearance: 'none',
  backgroundColor: '$white',
  cursor: 'pointer',
  border: `1px solid $paper`,
  borderRadius: '$md',
  fontSize: '$md',
  padding: '$sm $lg',
  '&:hover': {
    backgroundColor: '$paper',
  },
});

function Button({ children, ...props }: IButton) {
  const ref = useRef(null);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps, isPressed } = useButton(props, ref);

  return (
    <StyledButton
      {...buttonProps}
      {...focusProps}
      ref={ref}
      style={{
        backgroundColor: isPressed ? '$paper' : '$white',
        transform: isPressed ? 'translateY(1px)' : 'none',
        outline: isFocusVisible ? '2px solid dodgerblue' : 'none',
      }}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
