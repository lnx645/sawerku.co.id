import styled from '@emotion/styled';
import TextParagraph from '@/components/typography/TextParagraf';

import { motion } from 'motion/react';
const DashboardContainer = styled.div`
    padding: 10px 0rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 800;
`;

const MenuGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const Card = styled.button<any>((props) => ({
    backgroundColor: props.bgColor,
    display: 'flex',
    alignItems: 'start',
    border: '2px solid #1a1a1a',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '6px 6px 0px 0px #1a1a1a',
    flexDirection: 'row',
    justifyContent: 'start',
    padding: 24,
    textAlign: 'start',
    borderRadius: 10,
    position: 'relative',
    '&:hover': {
        transform: 'translate(-2px, -2px)',
        boxShadow: '10px 10px 0px 0px #1a1a1a',
    },

    '&:active': {
        transform: 'translate(4px, 4px)',
        boxShadow: '2px 2px 0px 0px #1a1a1a',
    },
    img: {
        width: 100,
        height: 100,
        userSelect: 'none',
        pointerEvents: 'none',
    },
}));

const CardTitle = styled.h4`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #1a1a1a;
`;

const CardDescription = styled.p`
    font-size: 13px;
    line-height: 1.5;
    color: #333;
`;

const Badge = styled.span`
    position: absolute;
    top: -15px;
    left: 15px;
    background: #fff;
    border: 2px solid #1a1a1a;
    padding: 2px 10px;
    font-weight: bold;
    font-size: 0.75rem;
    border-radius: 5px;
    color: #ff4d4d;
    box-shadow: 3px 3px 0px 0px #1a1a1a;
`;

const ImageContainer = styled.div({
    display: 'flex',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'end',
    objectFit: 'cover',
});
const MotionCard = motion.create(Card);
export default function Dashboard() {
    const menuList = [
        {
            id: 1,
            name: 'Overlay',
            img: 'https://www.svgrepo.com/show/232655/capybara.svg',
            desc: 'Kustomisasi tampilan stream kamu agar makin kece dan interaktif.',
            color: '#C3F0FF', // Biru Cerah
        },
        {
            id: 2,
            name: 'Toko Top Up',
            img: 'https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwishlist_raccoon.61793e5c.svg&w=256&q=75',
            desc: 'Jualan diamond dan item game favorit penggemarmu di sini.',
            color: '#FFF08A', // Kuning
            isNew: true,
        },
        {
            id: 3,
            name: 'Dukungan Masuk & Cash Out',
            img: 'https://www.svgrepo.com/show/233859/piggy-bank-save.svg',
            desc: 'Cairkan saldo ke bank pilihanmu tanpa ribet, sat-set langsung masuk.',
            color: '#FFCCF9', // Pink Muda
        },
        {
            id: 4,
            name: 'Inboxes',
            img: 'https://www.svgrepo.com/show/396680/inbox-tray.svg',
            desc: 'Baca pesan hangat dan dukungan finansial dari para supporter setiamu.',
            color: '#C1FFD7', // Hijau Mint
        },
        {
            id: 5,
            name: 'Integration',
            img: 'https://www.svgrepo.com/show/286792/plug.svg',
            desc: 'Hubungkan Discord, YouTube, atau Twitch kamu biar makin gampang.',
            color: '#D4D4D4', // Abu-abu Solid
        },
        {
            id: 6,
            name: 'Goals',
            img: 'https://www.svgrepo.com/show/513331/medal.svg', // Mengganti ikon biar beda dari integration
            desc: 'Set target impianmu dan ajak penonton untuk bantu mewujudkannya.',
            color: '#E0C3FC', // Ungu Muda
        },
    ];

    return (
        <DashboardContainer>
            <Title>Selamat Datang Di Dashboard</Title>
            <TextParagraph>
                Kelola semua fitur integrasi dan pendapatanmu dalam satu layar
                yang simpel.
            </TextParagraph>
            <MenuGrid>
                {menuList.map((item) => (
                    <MotionCard key={item.id} bgColor={item.color}>
                        {item.isNew && <Badge>NEW!</Badge>}
                        <div>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>{item.desc}</CardDescription>
                        </div>
                        <ImageContainer>
                            <img src={item.img} alt="" />
                        </ImageContainer>
                    </MotionCard>
                ))}
            </MenuGrid>
        </DashboardContainer>
    );
}
