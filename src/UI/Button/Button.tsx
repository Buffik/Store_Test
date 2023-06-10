import React, { ComponentProps, ElementType } from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: React.ReactElement | string;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

function Button<E extends ElementType = typeof defaultElement>({
  children,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;
  return <TagName {...otherProps}>{children}</TagName>;
}

export default Button;
