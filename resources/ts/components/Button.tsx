import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
type Props = {
    children: ReactNode;
    variant?: 'warning' | 'primary' | 'success' | 'white';
    size?: 'sm' | 'lg' | 'icon' | 'md';
} & ButtonHTMLAttributes<HTMLButtonElement>;
const BaseButton = styled.button({});
const Button = ({ children, ...rest }: Props) => {
    return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
