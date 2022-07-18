import { React, useState } from 'react';
import styled from 'styled-components';
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const SidebarContainer = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`

const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`

const SidebarMenu = styled.div`
    margin-bottom: 10px;
`

const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`

const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`

const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    &:hover {
        background-color: rgb(240, 240, 255);
    }

    &.active {
        background-color: rgb(240, 240, 255);
    }

    /* ${props => props.active && `
        background-color: rgb(240, 240, 255);
    `} */
`

const SidebarListItemText = styled.span`
    margin-left: 5px;
`

const SidebarLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Sidebar = () => {
    const [active, setActive] = useState("1");
    const handleClick = (event) => {
        setActive(event.target.id);
    };

    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                        <SidebarLink to="/">
                            <SidebarListItem key={1} className={active === "1" ? "active" : null} id={"1"} onClick={handleClick}>
                                <LineStyle />
                                <SidebarListItemText>Início</SidebarListItemText>
                            </SidebarListItem>
                        </SidebarLink>
                        <SidebarListItem>
                            <Timeline />
                            <SidebarListItemText>Análises</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUp />
                            <SidebarListItemText>Vendas</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Menu Rápido</SidebarTitle>
                    <SidebarList>
                        <SidebarLink to="/users">
                            <SidebarListItem key={2} className={active === "2" ? "active" : undefined} id={"2"} onClick={handleClick}>
                                <PermIdentity />
                                <SidebarListItemText>Usuários</SidebarListItemText>
                            </SidebarListItem>
                        </SidebarLink>
                        <SidebarLink to="/products">
                            <SidebarListItem key={3} className={active === "3" ? "active" : null} id={"3"} onClick={handleClick}>
                                <Storefront />
                                <SidebarListItemText>Produtos</SidebarListItemText>
                            </SidebarListItem>
                        </SidebarLink>
                        <SidebarListItem>
                            <AttachMoney />
                            <SidebarListItemText>Transações</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <BarChart />
                            <SidebarListItemText>Relatórios</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Notificações</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <MailOutline />
                            <SidebarListItemText>E-mail</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <DynamicFeed />
                            <SidebarListItemText>Feedback</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <ChatBubbleOutline />
                            <SidebarListItemText>Mensagens</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Equipe</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <WorkOutline />
                            <SidebarListItemText>Gestão</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Timeline />
                            <SidebarListItemText>Análises</SidebarListItemText>
                        </SidebarListItem>
                        <SidebarListItem>
                            <Report />
                            <SidebarListItemText>Relatórios</SidebarListItemText>
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar