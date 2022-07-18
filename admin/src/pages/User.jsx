import React from 'react';
import styled from 'styled-components';
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const UserTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserTitle = styled.h1``

const UserAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    font-size: 16px;
`

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const UserShow = styled.div`
    flex: 1;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const UserUpdate = styled.div`
    flex: 2;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    margin-left: 20px;
`

const UserShowTop = styled.div`
    display: flex;
    align-items: center;
`

const UserShowBottom = styled.div`
    margin-top: 20px;
`

const UserShowImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const UserShowTopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const UserShowUsername = styled.span`
    font-weight: 600;
`

const UserShowUserTitle = styled.span`
    font-weight: 300;
`

const UserShowBottomTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`

const UserShowBottomInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`

const UserShowBottomInfoTitle = styled.span`
    margin-left: 10px;
`

const PermIdentityIcon = styled(PermIdentity)`
    &.override {
        font-size: 16px;
    }
`

const UserShowInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0px;
    color: #444;
`

const CalendarTodayIcon = styled(CalendarToday)`
    &.override {
        font-size: 16px;
    }
`

const UserShowInfoTitle = styled.span`
    margin-left: 10px;
`

const UserShowTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`

const PhoneAndroidIcon = styled(PhoneAndroid)`
    &.override {
        font-size: 16px;
    }
`

const MailOutlineIcon = styled(MailOutline)`
    &.override {
        font-size: 16px;
    }
`

const LocationSearchingIcon = styled(LocationSearching)`
    &.override {
            font-size: 16px;
        }
`

const UserUpdateTitle = styled.span`
    font-size: 24px;
    font-weight: 600;
`

const UserUpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const UserUpdateLeft = styled.div``

const UserUpdateItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`

const UserUpdateLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`

const UserUpdateInput = styled.input`
    border: none;
    width: 250px;
    height: 30px;
    border-bottom: 1px solid gray;
`

const UserUpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UserUpdateUpload = styled.div`
    display: flex;
    align-items: center;
`

const UserUpdateImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const UserUpdateUploadLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
`

const PublishIcon = styled(Publish)`
    &.override {
        cursor: pointer;
    }
`

const UserUpdateImgInput = styled.input``

const UserUpdateImgButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
`


const User = () => {
    return (
        <Container>
            <UserTitleContainer>
                <UserTitle>Editar Usuário</UserTitle>
                <Link to="/newUser">
                    <UserAddButton>Criar</UserAddButton>
                </Link>
            </UserTitleContainer>
            <UserContainer>
                <UserShow>
                    <UserShowTop>
                        <UserShowImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        <UserShowTopTitle>
                            <UserShowUsername>Bárbara Fortunato</UserShowUsername>
                            <UserShowUserTitle>Advogada</UserShowUserTitle>
                        </UserShowTopTitle>
                    </UserShowTop>
                    <UserShowBottom>
                        <UserShowBottomTitle>Detalhes da Conta</UserShowBottomTitle>
                        <UserShowBottomInfo>
                            <PermIdentityIcon className={'override'} />
                            <UserShowBottomInfoTitle>barbara.fortunato</UserShowBottomInfoTitle>
                        </UserShowBottomInfo>
                    </UserShowBottom>
                    <UserShowInfo>
                        <CalendarTodayIcon className={'override'} />
                        <UserShowInfoTitle>13&#47;04&#47;1989</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowTitle>Dados de Contato</UserShowTitle>
                    <UserShowInfo>
                        <PhoneAndroidIcon className={'override'} />
                        <UserShowInfoTitle>&#40;51&#41; 99999-9999</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                        <MailOutlineIcon className={'override'} />
                        <UserShowInfoTitle>barbara.fortunato@gmail.com</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                        <LocationSearchingIcon className={'override'} />
                        <UserShowInfoTitle>Porto Alegre | Brasil</UserShowInfoTitle>
                    </UserShowInfo>
                </UserShow>
                <UserUpdate>
                    <UserUpdateTitle>
                        <UserUpdateForm>
                            <UserUpdateLeft>
                                <UserUpdateItem>
                                    <UserUpdateLabel>Nome de usuário</UserUpdateLabel>
                                    <UserUpdateInput type="text" placeholder="barbara.fortunato" />
                                </UserUpdateItem>
                                <UserUpdateItem>
                                    <UserUpdateLabel>Nome completo</UserUpdateLabel>
                                    <UserUpdateInput type="text" placeholder="Bárbara Fortunato" />
                                </UserUpdateItem>
                                <UserUpdateItem>
                                    <UserUpdateLabel>E-mail</UserUpdateLabel>
                                    <UserUpdateInput type="text" placeholder="barbara.fortunato@gmail.com" />
                                </UserUpdateItem>
                                <UserUpdateItem>
                                    <UserUpdateLabel>Telefone</UserUpdateLabel>
                                    <UserUpdateInput type="text" placeholder="&#40;51&#41; 99999-9999" />
                                </UserUpdateItem>
                                <UserUpdateItem>
                                    <UserUpdateLabel>Endereço</UserUpdateLabel>
                                    <UserUpdateInput type="text" placeholder="Porto Alegre | Brasil" />
                                </UserUpdateItem>
                            </UserUpdateLeft>
                            <UserUpdateRight>
                                <UserUpdateUpload>
                                    <UserUpdateImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                    <UserUpdateUploadLabel htmlFor="file">
                                        <PublishIcon className={'override'} />
                                    </UserUpdateUploadLabel>
                                    <UserUpdateImgInput type="file" id="file" style={{ display: "none" }} />
                                </UserUpdateUpload>
                                <UserUpdateImgButton>Update</UserUpdateImgButton>
                            </UserUpdateRight>
                        </UserUpdateForm>
                    </UserUpdateTitle>
                </UserUpdate>
            </UserContainer>
        </Container>
    )
}

export default User