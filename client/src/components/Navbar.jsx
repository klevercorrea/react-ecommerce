import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Logo from '../logo.svg';
import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 70px;
    position: sticky;
    top: 30px;
    z-index: 998;
    background-color: white;
    ${mobile({ height: '70px' })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: '10px 0px' })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`


const Center = styled.div`
    flex: 1;
    text-align: center;
`

const NavLogo = styled.img`
    height: 60px;
    width: 100%;
    cursor: pointer;
    ${mobile({ height: '40px', marginLeft: '12px', marginTop: '5px' })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    console.log(quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>PT</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/">
                        <NavLogo src={Logo} alt="Logo da Entrelinhas" />
                    </Link>
                </Center>
                <Right>
                    <MenuItem>REGISTRAR</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar