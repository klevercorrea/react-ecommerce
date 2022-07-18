import { React, useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummyData";
import { Link } from "react-router-dom";

const UserListGrid = styled.div`
    flex: 4;
`

const UserListUser = styled.div`
    display: flex;
    align-items: center;
`

const UserListImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const UserListEdit = styled.button`
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


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "Usuário",
            width: 200,
            renderCell: (params) => {
                return (
                    <UserListUser>
                        <UserListImg src={params.row.avatar} alt="" />
                        {params.row.username}
                    </UserListUser>
                );
            },
        },
        { field: "email", headerName: "E-mail", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transação",
            width: 160,
        },
        {
            field: "action",
            headerName: "Ação",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <UserListEdit>Editar</UserListEdit>
                        </Link>
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
        <UserListGrid>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </UserListGrid>
    )
}

export default UserList