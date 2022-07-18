import { Visibility } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const WidgetSmContainer = styled.div`
    flex: 1;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
    margin-right: 20px;
`

const WidgetSmTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`

const WidgetSmList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const WidgetSmListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const WidgetSmListImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const WidgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const WidgetSmUsername = styled.span`
    font-weight: 600;
`

const WidgetSmUserTitle = styled.span`
    font-weight: 300;
`

const WidgetSmButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
`

const VisibilityIcon = styled(Visibility)`
    &.override {
            font-size: 16px;
            margin-right: 5px;
        }
`


const WidgetSm = () => {
    return (
        <WidgetSmContainer>
            <WidgetSmTitle>Novos membros</WidgetSmTitle>
            <WidgetSmList>
                <WidgetSmListItem>
                    <WidgetSmListImg src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                    <WidgetSmUser>
                        <WidgetSmUsername>Lucas Alvim</WidgetSmUsername>
                        <WidgetSmUserTitle>Jornalista</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <WidgetSmButton>
                        <VisibilityIcon className={'override'} />
                        Mostrar
                    </WidgetSmButton>
                </WidgetSmListItem>
                <WidgetSmListItem>
                    <WidgetSmListImg src="https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?cs=srgb&dl=pexels-david-gonzales-2406949.jpg&fm=jpg" alt="" />
                    <WidgetSmUser>
                        <WidgetSmUsername>Marcelo Tavares</WidgetSmUsername>
                        <WidgetSmUserTitle>Desenvolvedor</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <WidgetSmButton>
                        <VisibilityIcon className={'override'} />
                        Mostrar
                    </WidgetSmButton>
                </WidgetSmListItem>
                <WidgetSmListItem>
                    <WidgetSmListImg src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
                    <WidgetSmUser>
                        <WidgetSmUsername>Matheus Oliveira</WidgetSmUsername>
                        <WidgetSmUserTitle>Engenheiro Civil</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <WidgetSmButton>
                        <VisibilityIcon className={'override'} />
                        Mostrar
                    </WidgetSmButton>
                </WidgetSmListItem>
                <WidgetSmListItem>
                    <WidgetSmListImg src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <WidgetSmUser>
                        <WidgetSmUsername>Igor Guimarães</WidgetSmUsername>
                        <WidgetSmUserTitle>Advogado</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <WidgetSmButton>
                        <VisibilityIcon className={'override'} />
                        Mostrar
                    </WidgetSmButton>
                </WidgetSmListItem>
                <WidgetSmListItem>
                    <WidgetSmListImg src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <WidgetSmUser>
                        <WidgetSmUsername>Anna Amélia</WidgetSmUsername>
                        <WidgetSmUserTitle>Publicitária</WidgetSmUserTitle>
                    </WidgetSmUser>
                    <WidgetSmButton>
                        <VisibilityIcon className={'override'} />
                        Mostrar
                    </WidgetSmButton>
                </WidgetSmListItem>
            </WidgetSmList>
        </WidgetSmContainer>
    )
}

export default WidgetSm