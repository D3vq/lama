import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;


`

export default function Announcement() {
    return (
        <Container>
            Super deal! Free shippinng deliveryyyy and 50% off.
        </Container>
    )
}
