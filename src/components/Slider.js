import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
width: 100%; 
height: 100vh; 
display: flex;
position: relative;
overflow:hidden;
${mobile({display:"none"})};
`

const Arrow = styled.div`
display: flex; 
justify-content: center;    
align-items: center;
width: 70px;
height: 70px;
background-color: white;
border-radius:50%;
position:absolute;
top:0;
bottom:0;
left:${props=>props.direction ==="left" && "10px"};
right:${props=>props.direction ==="right" && "10px"};
margin:auto;
cursor: pointer;
opacity:0.5;
z-index:2`

const Wrapper= styled.div`
display: flex;
height: 100%;
transition: all 1s ease;
transform: translateX(${props=>props.slideIndex * -100}vw);`

const Slide=styled.div`
display: flex;
 align-items: center;
 width:100vw;
 height:100vh;
 background-color: #${props=>props.bg}`

const ImgContainer=styled.div`flex:1; height:100%; `
const Image=styled.img`height:80%; margin:30px 80px;`
const InfoContainer=styled.div`flex:1;`

const Heading= styled.h1`font-size: 90px;  `
const Desc= styled.p`
margin:50px 0px;
font-size: 25px; 
font-weight: 500;
letter-spacing:3px`

const Button= styled.button`
padding:20px;
font-size: 20px;
background-color:transparent; `

export default function Slider() {
    const[slideIndex , setslideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction==="left"){
            setslideIndex(slideIndex>0 ? slideIndex-1:3)
        }else{
            setslideIndex(slideIndex<3 ? slideIndex+1 :0)
        }
    }
    return (
        <Container>
            <Arrow direction = "left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item=>(


                    <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                    <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                    <Heading>{item.title}</Heading>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                    </InfoContainer>
                    </Slide>
                    ))}
                    </Wrapper>
            <Arrow direction = "right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}
