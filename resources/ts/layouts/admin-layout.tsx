import { ReactNode } from 'react';
import BaseLayout from './base-layout';
import Header from './admin/header';
import styled from '@emotion/styled';
import mq from '@/lib/breakpoints';
import Footer from './admin/footer';
type Props = {
    children: ReactNode;
};
const Content = styled.div(
    mq({
        minHeight:"100vh",
        paddingInline: [10, 8, 9, 92],
    }),
);
export default function AdminLayout(props: Props) {
    return (
        <BaseLayout>
            <Header />
            <Content>{props.children}</Content>
            <Footer/>
        </BaseLayout>
    );
}
