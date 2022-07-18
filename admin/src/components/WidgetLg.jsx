import React from 'react';
import styled from 'styled-components';

const WidgetLgContainer = styled.div`
    flex: 2;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    padding: 20px;
`

const WidgetLgTitle = styled.span`
    font-size: 22px;
    font-weight: 600;
`

const WidgetLgTable = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const WidgetLgTr = styled.tr``

const WidgetLgTh = styled.th`
    text-align: left;
`

const WidgetLgUser = styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`

const WidgetLgImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const WidgetLgUsername = styled.span``

const WidgetLgDate = styled.td`
    font-weight: 300;
`

const WidgetLgAmount = styled.td`
    font-weight: 300;
`

const WidgetLgStatus = styled.td``

const WidgetLgButton = styled.button`
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
    background-color: ${({ primary, secondary, tertiary }) =>
        primary ? "#e5faf2" : secondary ? "#fff0f1" : tertiary ? "#ebf1fe" : "transparent"};
    color: ${({ primary, secondary, tertiary }) =>
        primary ? "#3bb077" : secondary ? "#d95087" : tertiary ? "#2a7ade" : "transparent"};
`


const WidgetLg = () => {

    return (
        <WidgetLgContainer>
            <WidgetLgTitle>Últimas transações</WidgetLgTitle>
            <WidgetLgTable>
                <WidgetLgTr>
                    <WidgetLgTh>Cliente</WidgetLgTh>
                    <WidgetLgTh>Data</WidgetLgTh>
                    <WidgetLgTh>Quantia</WidgetLgTh>
                    <WidgetLgTh>Status</WidgetLgTh>
                </WidgetLgTr>
                <WidgetLgTr>
                    <WidgetLgUser>
                        <WidgetLgImg src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        <WidgetLgUsername>Bárbara Fortunato</WidgetLgUsername>
                    </WidgetLgUser>
                    <WidgetLgDate>14 Jul 2022</WidgetLgDate>
                    <WidgetLgAmount>R$ 98,00</WidgetLgAmount>
                    <WidgetLgStatus><WidgetLgButton primary>Aprovada</WidgetLgButton></WidgetLgStatus>
                </WidgetLgTr>
                <WidgetLgTr>
                    <WidgetLgUser>
                        <WidgetLgImg src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <WidgetLgUsername>Alana Bivar</WidgetLgUsername>
                    </WidgetLgUser>
                    <WidgetLgDate>14 Jul 2022</WidgetLgDate>
                    <WidgetLgAmount>R$ 112,00</WidgetLgAmount>
                    <WidgetLgStatus><WidgetLgButton secondary>Recusada</WidgetLgButton></WidgetLgStatus>
                </WidgetLgTr>
                <WidgetLgTr>
                    <WidgetLgUser>
                        <WidgetLgImg src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        <WidgetLgUsername>Amanda Muniz</WidgetLgUsername>
                    </WidgetLgUser>
                    <WidgetLgDate>14 Jul 2022</WidgetLgDate>
                    <WidgetLgAmount>R$ 87,00</WidgetLgAmount>
                    <WidgetLgStatus><WidgetLgButton tertiary>Pendente</WidgetLgButton></WidgetLgStatus>
                </WidgetLgTr>
                <WidgetLgTr>
                    <WidgetLgUser>
                        <WidgetLgImg src="https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        <WidgetLgUsername>Gustavo Mendes</WidgetLgUsername>
                    </WidgetLgUser>
                    <WidgetLgDate>14 Jul 2022</WidgetLgDate>
                    <WidgetLgAmount>R$ 244,00</WidgetLgAmount>
                    <WidgetLgStatus><WidgetLgButton primary>Aprovada</WidgetLgButton></WidgetLgStatus>
                </WidgetLgTr>
                <WidgetLgTr>
                    <WidgetLgUser>
                        <WidgetLgImg src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                        <WidgetLgUsername>Gilberto Quintana</WidgetLgUsername>
                    </WidgetLgUser>
                    <WidgetLgDate>14 Jul 2022</WidgetLgDate>
                    <WidgetLgAmount>R$ 122,00</WidgetLgAmount>
                    <WidgetLgStatus><WidgetLgButton primary>Aprovada</WidgetLgButton></WidgetLgStatus>
                </WidgetLgTr>
            </WidgetLgTable>
        </WidgetLgContainer>
    )
}

export default WidgetLg