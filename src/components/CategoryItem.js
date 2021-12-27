import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;`

const Image = styled.img`
width:100%;
height: 100%;
object-fit:cover;
${mobile({height:"30vh"})};
`

const Info = styled.div`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
display: flex; 
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color:white;
margin: 20px;
font-size: 45px;`

const Button = styled.button`
border:none;
padding: 20px;
background-color:white;
color:gray;
font-weight: 600;
font-size: 16px;
cursor: pointer;`

export default function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}