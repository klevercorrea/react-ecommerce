import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    position: sticky;
    top: 0;
    z-index: 999;
`

const Announcement = () => {
    return (
        <Container>
            Frete grátis para compras acima de R$ 100,00
        </Container>
    )
}

export default Announcement