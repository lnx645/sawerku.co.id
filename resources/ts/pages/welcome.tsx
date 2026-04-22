import Button from '@/components/Button';
import Input from '@/components/Input';
import { home } from '@js/routes/index';
import styled from '@emotion/styled';

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    background-color: #f2f7f5;
    border: 2px solid #000;
    box-shadow: 8px 8px 0px #000;
    padding: 42px;
    border-radius: 10px;
    max-width: 420px;
    width: 100%;
    flex-direction: column;
    gap: 20px;
`;

const TitleGroup = styled.div`
    margin-bottom: 10px;
`;

const WelcomeTitle = styled.h1`
    font-size: 32px;
    font-weight: 900;
    margin: 0;
    text-transform: uppercase;
    line-height: 1;
`;

const SubText = styled.p`
    font-weight: 600;
    margin: 8px 0 0 0;
    font-size: 14px;
    opacity: 0.8;
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Label = styled.label`
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const Buttons = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    margin-top: 10px;
`;

export default function Welcome() {
    return (
        <PageWrapper>
            <Container>
                <TitleGroup>
                    <WelcomeTitle>Halo Lagi!</WelcomeTitle>
                    <SubText>Silahkan masuk untuk melanjutkan!</SubText>
                </TitleGroup>
                <FieldGroup>
                    <Label>Email Pengguna</Label>
                    <Input
                        placeholder="masukkan email..."
                        inputSize="md"
                        variant="white"
                    />
                </FieldGroup>
                <FieldGroup>
                    <Label>Kata Sandi</Label>
                    <Input
                        placeholder="••••••••"
                        type="password"
                        inputSize="md"
                        variant="white"
                    />
                </FieldGroup>
                <Buttons>
                    <Button size="md" variant="success" style={{ width: '100%' }}>
                        MASUK KE AKUN
                    </Button>
                    <Button size="md" variant="white" style={{ width: '100%' }}>
                        Daftar Akun
                    </Button>
                </Buttons>
            </Container>
        </PageWrapper>
    );
}
