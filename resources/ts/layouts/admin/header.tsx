import mq from '@/lib/breakpoints';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
import Avatar from 'react-avatar';
const Wrapper = styled.header({
    height: 72,
    position: 'sticky',
    top: 0,
    zIndex: 99,
    background: 'white',
});

const HeaderContent = styled.div(
    mq({
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingInline: [10, 8, 9, 92],
    }),
);
const HeaderLogo = styled.div({
    display: 'flex',
    alignItems: 'center',
    gap: 3,
    height: '100%',
    a: {
        fontWeight: 600,
        fontSize: 15,
        textTransform: 'uppercase',
        span: {
            ':last-child': {
                fontSize: 7,
                color: 'red',
            },
        },
    },
    img: {
        width: 32,
        height: 32,
    },
});
const HeaderUserInfo = styled.div({
    marginLeft: 'auto',
});

export default function Header() {
    return (
        <Wrapper>
            <HeaderContent>
                <HeaderLogo>
                    <img
                        src="https://www.svgrepo.com/show/232655/capybara.svg"
                        alt=""
                    />
                    <Link href={'/menu'}>
                        <span>Sawerku.co</span>
                        <span>beta</span>
                    </Link>
                </HeaderLogo>
                <HeaderUserInfo>
                    <Avatar name="Mohamad Ilham" size="32" round />
                </HeaderUserInfo>
            </HeaderContent>
        </Wrapper>
    );
}
