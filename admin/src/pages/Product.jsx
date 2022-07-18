import React from 'react';
import styled from 'styled-components';
import Chart from "../components/Chart";
import { Link } from "react-router-dom";
import { productData } from "../dummyData";
import { Publish } from "@material-ui/icons";

const ProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1``

const ProductLink = styled(Link)``

const ProductTop = styled.div`
    display: flex;
`

const ProductTopLeft = styled.div`
    flex: 1;
`

const ProductTopRight = styled.div`
    flex: 1;
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`

const ProductInfoTop = styled.div`
    display: flex;
    align-items: center;
`

const ProductInfoTopImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`

const ProductName = styled.span`
    font-weight: 600;
`

const ProductInfoBottom = styled.div`
    margin-top: 10px;
`

const ProductInfoItem = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const ProductInfoKey = styled.span``

const ProductInfoValue = styled.span`
    font-weight: 300;
`

const ProductBottom = styled.div`
    padding: 20px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`


const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`


const ProductLabel = styled.label`
    margin-bottom: 10px;
    color: gray;
`


const ProductInput = styled.input`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
`

const ProductSelect = styled.select`
    margin-bottom: 10px;
`

const ProductOption = styled.option``

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductUpload = styled.div`
    display: flex;
    align-items: center;
`

const ProductUploadImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`

const ProductAddButton = styled.button`
    width: 80px;
    border: none;
    padding: 5px;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
`

const ProductButton = styled.button`
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: darkblue;
    color:white;
    font-weight: 600;
    cursor: pointer;
`



const Product = () => {
    return (
        <ProductContainer>
            <TitleContainer>
                <Title>Produto</Title>
                <ProductLink to="/newproduct">
                    <ProductAddButton>Criar</ProductAddButton>
                </ProductLink>
            </TitleContainer>
            <ProductTop>
                <ProductTopLeft>
                    <Chart data={productData} dataKey="Sales" title="Desempenho das Vendas" />
                </ProductTopLeft>
                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoTopImg src="https://i.ibb.co/HtyZb9y/produto-01.jpg" alt="" />
                        <ProductName>Caderno</ProductName>
                    </ProductInfoTop>
                    <ProductInfoBottom>
                        <ProductInfoItem>
                            <ProductInfoKey>ID:</ProductInfoKey>
                            <ProductInfoValue>123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>Vendas:</ProductInfoKey>
                            <ProductInfoValue>5123</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>Ativo:</ProductInfoKey>
                            <ProductInfoValue>Sim</ProductInfoValue>
                        </ProductInfoItem>
                        <ProductInfoItem>
                            <ProductInfoKey>Em estoque:</ProductInfoKey>
                            <ProductInfoValue>Sim</ProductInfoValue>
                        </ProductInfoItem>
                    </ProductInfoBottom>
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <ProductLabel>Nome do Produto</ProductLabel>
                        <ProductInput type="text" placeholder="Caderno" />
                        <ProductLabel>Em Stoque</ProductLabel>
                        <ProductSelect name="inStock" id="idStock">
                            <ProductOption value="yes">Sim</ProductOption>
                            <ProductOption value="no">Não</ProductOption>
                        </ProductSelect>
                        <ProductLabel>Active</ProductLabel>
                        <ProductSelect name="active" id="active">
                            <ProductOption value="yes">Sim</ProductOption>
                            <ProductOption value="no">Não</ProductOption>
                        </ProductSelect>
                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImg src="https://i.ibb.co/HtyZb9y/produto-01.jpg" alt="" />
                            <ProductLabel for="file">
                                <Publish />
                            </ProductLabel>
                            <ProductInput type="file" id="file" style={{ display: "none" }} />
                        </ProductUpload>
                        <ProductButton>Atualizar</ProductButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </ProductContainer>
    )
}

export default Product