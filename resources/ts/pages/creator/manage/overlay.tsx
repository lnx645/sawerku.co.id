/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';
const ButtonMenu = styled.button({
    padding: '7px 4px',
    boxShadow: '5px 5px 0px 0px #1a1a1a',
    border: '1px solid #1a1a1a',
    background: '#8bd3dd',
    cursor: 'pointer',
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 600,
    '&:active': {
        transform: 'translate(4px, 4px)',
        boxShadow: '2px 2px 0px 0px #1a1a1a',
    },
});
const ActionButton = styled.button<any>((props) => ({
    all: 'unset',
    padding: '6px 12px',
    fontSize: 9,
    fontWeight: 700,
    cursor: 'pointer',
    border: '2px solid #1a1a1a',
    borderRadius: 4,
    background: props.variant === 'primary' ? '#1a1a1a' : 'white',
    color: props.variant === 'primary' ? 'white' : '#1a1a1a',
    boxShadow: '3px 3px 0px 0px #1a1a1a',
    transition: 'all 0.1s ease',

    '&:hover': {
        transform: 'translate(-1px, -1px)',
        boxShadow: '4px 4px 0px 0px #1a1a1a',
    },

    '&:active': {
        transform: 'translate(2px, 2px)',
        boxShadow: '1px 1px 0px 0px #1a1a1a',
    },
}));

const ButtonGroup = styled.div({
    display: 'flex',
    gap: 12,
    marginTop: 10,
});
export default function Overlay() {
    return (
        <React.Fragment>
            <div>
                <h2 css={css({ fontSize: 24, fontWeight: 600 })}>Overlay</h2>
                <p css={css({ fontSize: 12, fontWeight: 400 })}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas tempora aperiam maiores? Corrupti inventore modi dicta
                    numquam exercitationem dolorem, molestiae laborum cum
                    recusandae, voluptatibus sit nihil quae! Rem, quibusdam.
                    Unde!
                </p>
            </div>
            <div
                css={css({
                    marginTop: 24,
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 32,
                })}
            >
                <div
                    css={css({
                        display: 'flex',
                        gap: 10,
                        flexDirection: 'column',
                    })}
                >
                    <ButtonMenu>Notification Box</ButtonMenu>
                    <ButtonMenu>Soundboard</ButtonMenu>
                    <ButtonMenu>Target/Goal</ButtonMenu>
                    <ButtonMenu>Running Text</ButtonMenu>
                    <ButtonMenu>Qr Code</ButtonMenu>
                </div>
                <div>
                    <h2 css={css({ fontSize: 16 })}>Notification Box</h2>
                    <p css={css({ fontSize: 12 })}>
                        Interaksi dengan widget lebih praktis menggunakan Stream
                        Controls
                    </p>
                    <div>
                        <div
                            css={css({
                                background: '#dedede',
                                padding: 3,
                                fontSize: 13,
                                fontWeight: 'bold',
                            })}
                        >
                            <span>
                                https://sawerku.com/widget/notification?skey=23nouewiru837423874923
                            </span>
                        </div>
                        <ButtonGroup>
                            <ActionButton>
                                Copy URL
                            </ActionButton>
                            <ActionButton>Open In Tab</ActionButton>
                        </ButtonGroup>
                        <i
                            css={css({
                                fontSize: 11,
                                color: 'red',
                                fontWeight: 500,
                            })}
                        >
                            ⚠️ Jangan lupa refresh browser source OBS setiap
                            membuat perubahan
                        </i>
                    </div>
                    <h2 css={css({ fontSize: 16, marginBlock: 10 })}>
                        Settings
                    </h2>
                </div>
            </div>
        </React.Fragment>
    );
}
