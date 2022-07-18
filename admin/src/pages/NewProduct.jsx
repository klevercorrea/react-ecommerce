import React from 'react';
import styled from 'styled-components';

const NewProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`
const ProductTitle = styled.h1``

const ProductForm = styled.form``

const ProductFormItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const ProductFormLabel = styled.label`
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
`

const ProductFormInput = styled.input`
    padding: 10px;
`

const ProductFormSelect = styled.select`
    padding: 10px;
`

const ProductFormOption = styled.option``

const ProductButton = styled.button`
    margin-top: 10px;
    padding: 7px 10px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const NewProduct = () => {
    return (
        <NewProductContainer>
            <ProductTitle>Novo Produto</ProductTitle>
            <ProductForm>
                <ProductFormItem>
                    <ProductFormLabel>Imagem:</ProductFormLabel>
                    <ProductFormInput type="file" id="file" />
                </ProductFormItem>
                <ProductFormItem>
                    <ProductFormLabel>Nome:</ProductFormLabel>
                    <ProductFormInput type="text" placeholder="Caderno" />
                </ProductFormItem>
                <ProductFormItem>
                    <ProductFormLabel>Estoque:</ProductFormLabel>
                    <ProductFormInput type="text" placeholder="123" />
                </ProductFormItem>
                <ProductFormItem>
                    <ProductFormLabel>Ativo:</ProductFormLabel>
                    <ProductFormSelect>
                        <ProductFormOption value="yes">Sim</ProductFormOption>
                        <ProductFormOption value="no">Não</ProductFormOption>
                    </ProductFormSelect>
                </ProductFormItem>
                <ProductButton>Criar</ProductButton>
            </ProductForm>
        </NewProductContainer>
    )
}

export default NewProduct