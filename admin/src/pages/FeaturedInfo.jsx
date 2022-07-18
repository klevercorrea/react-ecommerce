import React from 'react';
import styled from 'styled-components';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';


const FeaturedInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const FeaturedInfoItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const FeaturedInfoTitle = styled.span`
    font-size: 20px;
`

const FeaturedInfoMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

const FeaturedInfoMoney = styled.span`
    font-size: 30px;
    font-weight: 600;
`

const FeaturedInfoMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const ArrowUpwardIcon = styled(ArrowUpward)`
    &.override {
            font-size: 25px;
            margin-left: 5px;
            color: green;
        }
`

const ArrowDownwardIcon = styled(ArrowDownward)`
    &.override {
            font-size: 25px;
            margin-left: 5px;
            color: red;
        }
`


const FeaturedInfoSubtitle = styled.span`
    font-size: 15px;
    color: gray;
`


const FeaturedInfo = () => {
    return (
        <FeaturedInfoContainer>
            <FeaturedInfoItem>
                <FeaturedInfoTitle>Receita</FeaturedInfoTitle>
                <FeaturedInfoMoneyContainer>
                    <FeaturedInfoMoney>R$ 6.320,18</FeaturedInfoMoney>
                    <FeaturedInfoMoneyRate>
                        -11.4
                        <ArrowDownwardIcon className={'override'} />
                    </FeaturedInfoMoneyRate>
                </FeaturedInfoMoneyContainer>
                <FeaturedInfoSubtitle>Comparado ao mês passado</FeaturedInfoSubtitle>
            </FeaturedInfoItem>
            <FeaturedInfoItem>
                <FeaturedInfoTitle>Vendas</FeaturedInfoTitle>
                <FeaturedInfoMoneyContainer>
                    <FeaturedInfoMoney>R$ 3.415,37</FeaturedInfoMoney>
                    <FeaturedInfoMoneyRate>
                        -1.4
                        <ArrowDownwardIcon className={'override'} />
                    </FeaturedInfoMoneyRate>
                </FeaturedInfoMoneyContainer>
                <FeaturedInfoSubtitle>Comparado ao mês passado</FeaturedInfoSubtitle>
            </FeaturedInfoItem>
            <FeaturedInfoItem>
                <FeaturedInfoTitle>Custo</FeaturedInfoTitle>
                <FeaturedInfoMoneyContainer>
                    <FeaturedInfoMoney>R$ 2.225,15</FeaturedInfoMoney>
                    <FeaturedInfoMoneyRate>
                        +2.4
                        <ArrowUpwardIcon className={'override'} />
                    </FeaturedInfoMoneyRate>
                </FeaturedInfoMoneyContainer>
                <FeaturedInfoSubtitle>Comparado ao mês passado</FeaturedInfoSubtitle>
            </FeaturedInfoItem>
        </FeaturedInfoContainer>
    )
}

export default FeaturedInfo