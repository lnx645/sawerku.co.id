import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

type InputVariant = 'primary' | 'success' | 'warning' | 'white';
type InputSize = 'sm' | 'md' | 'lg';

interface StyledProps {
    $variant?: InputVariant;
    $size?: InputSize;
}

const StyledInput = styled.input<StyledProps>`
    ${(props) => {
        return `
       padding-inline:5px;
        height:19px;
       `;
    }}
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    inputSize?: InputSize;
}

export default function Input({
    variant = 'white',
    inputSize = 'md',
    ...rest
}: Props) {
    return <StyledInput $variant={variant} $size={inputSize} {...rest} />;
}
