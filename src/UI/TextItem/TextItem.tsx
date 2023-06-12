import { ComponentProps, ElementType } from 'react';

type TextOwnProps<E extends ElementType = ElementType> = {
  children: string | number | React.ReactElement;
  as?: E;
};

const defaultElement = 'div';

type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>;

function TextItem<E extends ElementType = typeof defaultElement>({
  children,
  as,
  ...otherProps
}: TextProps<E>) {
  const TagName = as || defaultElement;
  return <TagName {...otherProps}>{children}</TagName>;
}

export default TextItem;
