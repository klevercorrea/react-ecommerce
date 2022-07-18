import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Logo from '../logo.svg';
import { mobile } from '../Responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const FooterLogo = styled.img`
    height: 60px;
    width: 100%;
    cursor: pointer;
`

const Desc = styled.p`
    margin: 20px 0px;

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${[props => props.color]};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <FooterLogo src={Logo} alt='Logo da Entrelinhas' />
                <Desc>Entrelinhas nas redes sociais:</Desc>
                <SocialContainer>
                    <SocialIcon color='385999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links Úteis</Title>
                <List>
                    <ListItem>Página Inicial</ListItem>
                    <ListItem>Carrinho</ListItem>
                    <ListItem>Cadernetas</ListItem>
                    <ListItem>Caderninhos</ListItem>
                    <ListItem>Cadernos</ListItem>
                    <ListItem>Scrapbook</ListItem>
                    <ListItem>Agenda</ListItem>
                    <ListItem>Planner</ListItem>
                    <ListItem>Lista de Desejos</ListItem>
                    <ListItem>Termos de Uso</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contato</Title>
                <ContactItem><Room style={{ marginRight: '10px' }} /> Rua Antônio da Rocha Almeida, 12, bairro São José, Canoas/RS, CEP: 92425-030</ContactItem>
                <ContactItem><Phone style={{ marginRight: '10px' }} /> &#40;51&#41; 99281-6296</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: '10px' }} /> contato@entrelinhasecapas.com.br</ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer