import TextParagraph from '@/components/typography/TextParagraf';
import styled from '@emotion/styled';
import { Link } from '@inertiajs/react';
const Wrapper = styled.div({
    display: 'grid',
    background:"white",
    minHeight:'100vh',
    gridTemplateColumns: '200px 1fr',
    marginTop: 24,
    gap: 1,
});
const MenuAside = styled.aside({
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    gap: 10,
});
const MenuItem = styled(Link)({
    all: 'unset',
    width: '100%',
    display: 'flex',
    fontSize: 14,
    cursor: 'pointer',
    borderRadius: 10,
    alignItems: 'centerr',
    '.icon': {
        marginRight: 3,
    },
    ':hover': {
        textDecoration: 'underline',
    },
    fontWeight: 600,
});
export default function Overlay() {
    const menus = [
        { id: 'alert', label: 'Notification Box', icon: '🔔' },
        { id: 'sub', label: 'QrCode', icon: '🎯' },
        { id: 'chat', label: 'Sound Board', icon: '💬' },
        { id: 'labels', label: 'Media Share', icon: '🏷️' },
        { id: 'settings', label: 'Leaderboard', icon: '⚙️' },
        { id: 'settingss', label: 'Running Text', icon: '⚙️' },
    ];
    return (
        <div>
            <div>
                <h2>Overlay</h2>
                <TextParagraph>
                    Kelola Overlay Untuk menerima notifkasi saat stream
                </TextParagraph>
            </div>
            <Wrapper>
                <MenuAside>
                    {menus.map((e) => {
                        return (
                            <MenuItem>
                                <div className="icon">{e.icon}</div>
                                <span>{e.label}</span>
                            </MenuItem>
                        );
                    })}
                </MenuAside>
                <div>
                <h3>Notification Box</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora distinctio ullam necessitatibus. Veritatis doloremque explicabo alias dolor consectetur expedita commodi perferendis consequatur mollitia consequuntur, ut illum aliquid. Cupiditate, explicabo!
                </p>
                </div>
            </Wrapper>
        </div>
    );
}
