import React from 'react';
import styled from 'styled-components';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const TopbarContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 999;
`

const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopbarLeft = styled.div``

const TopbarRight = styled.div`
    display: flex;
    align-items: center;
`

const TopbarLogo = styled.span`
    font-weight: bold;
    font-size: 25px;
    color: darkblue;
`

const TopbarIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`

const TopbarIconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const TopbarAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
`

const Topbar = () => {
    return (
        <TopbarContainer>
            <TopbarWrapper>
                <TopbarLeft>
                    <TopbarLogo>admindashboard</TopbarLogo>
                </TopbarLeft>
                <TopbarRight>
                    <TopbarIconContainer>
                        <NotificationsNone />
                        <TopbarIconBadge>2</TopbarIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <Language />
                        <TopbarIconBadge>2</TopbarIconBadge>
                    </TopbarIconContainer>
                    <TopbarIconContainer>
                        <Settings />
                    </TopbarIconContainer>
                    <TopbarAvatar src="https://i.ibb.co/Z17dhJR/289634118-725915565319911-295505865703485587-n.png" alt="Avatar Luísa Brum" />
                </TopbarRight>
            </TopbarWrapper>
        </TopbarContainer>

    )
}

export default Topbar