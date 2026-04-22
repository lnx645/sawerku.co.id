import styled from '@emotion/styled';
import mq from '@/lib/breakpoints';
import { Link } from '@inertiajs/react';

// --- Styled Components ---

const FooterWrapper = styled.footer({
    backgroundColor: '#fff',
    marginTop: '3rem',
    paddingBottom: '1.5rem',
});

const FooterContent = styled.div(
    mq({
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'space-between',
        alignItems: ['flex-start', 'center'],
        paddingTop: '2rem',
        paddingInline: [10, 8, 9, 92],
        gap: [20, 0],
    })
);

const FooterBrand = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    'a': {
        fontWeight: 800,
        fontSize: 14, // Small font
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#1a1a1a',
        letterSpacing: '0.5px'
    },
    'span': {
        fontSize: 11, // Extra small
        color: '#666',
        fontFamily: "'Courier New', Courier, monospace",
    }
});

const FooterLinks = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    'a': {
        fontWeight: 700,
        fontSize: 12, // Small font untuk link
        color: '#1a1a1a',
        textDecoration: 'none',
        '&:hover': {
            color: '#ff4d4d',
        }
    }
});

const BottomBar = styled.div(
    mq({
        margin: '1.5rem auto 0',
        paddingInline: [20, 20, 20, 92],
        paddingTop: '1rem',
        borderTop: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 10, // Font terkecil untuk copyright
        fontWeight: 600,
        color: '#999',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    })
);

// --- Main Component ---

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterBrand>
                    <Link href="/">
                        SAWERKU.CO
                    </Link>
                    <span>Dibuat dengan ❤️ di sumedang.</span>
                </FooterBrand>

                <FooterLinks>
                    <Link href="/terms">Terms</Link>
                    <Link href="/privacy">Privacy</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/contact">Hubungi Kami</Link>
                </FooterLinks>
            </FooterContent>

            <BottomBar>
                <div>© 2026 Sawerku.com - Dadan Hidayat</div>
                <div style={{ fontWeight: 800, color: '#ccc' }}>BETA 1.0</div>
            </BottomBar>
        </FooterWrapper>
    );
}
