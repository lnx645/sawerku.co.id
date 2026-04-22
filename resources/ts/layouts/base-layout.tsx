import AppServiceProvider from '@/providers/AppServiceProvider';
import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
};
export default function BaseLayout(props: Props) {
    return <AppServiceProvider>{props.children}</AppServiceProvider>;
}
