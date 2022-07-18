import { React, useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 4;
`

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const DeleteOutlineIcon = styled(DeleteOutline)`
    &.override {
            color: red;
            cursor: pointer;
        }
`
const ProductListItem = styled.div`
    display: flex;
    align-items: center;
`

const ProductListLink = styled(Link)``

const ProductListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Produto",
            width: 200,
            renderCell: (params) => {
                return (
                    <ProductListItem>
                        <ProductListImg src={params.row.img} alt="" />
                        {params.row.name}
                    </ProductListItem>
                );
            },
        },
        { field: "stock", headerName: "Estoque", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "price",
            headerName: "Preço",
            width: 160,
        },
        {
            field: "action",
            headerName: "Ação",
            width: 150,
            renderCell: (params) => {

                return (
                    <>
                        <ProductListLink to={"/product/" + params.row.id}>
                            <Button>Editar</Button>
                        </ProductListLink>
                        <DeleteOutlineIcon
                            className={'override'}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <Container>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </Container>
    );
}

export default ProductList