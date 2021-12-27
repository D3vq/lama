import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
background-color: #edf2fb;
${mobile({ padding: "10px"})}

`

const Title = styled.h1`
font-weight: 300;
text-align: center;

`

const Top = styled.div`
margin: 20px 0px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ justifyContent: "center"})}
`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
background-color: white;
font-size: 16px;
border: ${(props)=>props.type==='filled' && 'none'};
background-color: ${(props)=>props.type==='filled' && 'black'};
color: ${(props)=>props.type==='filled' && 'white'};
${mobile({ margin:"0px 10px " ,width: "40%" })}

`

const TopTexts = styled.span``

const TopText = styled.span`
margin: 0px 10px;
text-decoration: underline;
cursor: pointer;
${mobile({ display: "none" })}
`


const Bottom = styled.div`
display: flex;
justify-content:space-between;
${mobile({ flexDirection: "column" , justifyContent:"center"})}

`

const Info = styled.div`
flex: 3;
`

const Product = styled.div`
display: flex;
${mobile({ flexDirection: "column"})}

`

const ProductDetail = styled.div`
display: flex;
flex: 2;
`

const Image = styled.img`
width: 300px;
`

const Detail = styled.div`
display: flex;
padding: 30px;
flex-direction: column;
justify-content: space-around;
font-size: 18px;

`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
`

const Amount = styled.span`margin: 10px;`

const PriceContainer = styled.span`
margin: 10px;
font-size: 30px;
`

const Hr = styled.hr`
background-color: #eee;
  border: none;
  height: 1px;`

const Summary = styled.div` 
border: .5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
flex:1;
`
const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 50px 0px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: ${(props)=>props.type==='total' && '30px'};
font-weight: 500;
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
margin: 20px 20px 10px  3px;
padding: 20px;
border:none;
background-color: black;
color: white;
font-weight: 500;
cursor: pointer;
`


export default function Cart() {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping bag(2)</TopText>
                        <TopText>Your wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Detail>
                                    <ProductName>
                                    <b>Product:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                    <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color='black'/>
                                    
                                    <ProductSize>
                                    <b>Size:</b> 37.5
                                     </ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <AddContainer>
                                    <Remove/>
                                    <Amount>1</Amount>
                                    <Add/>
                                </AddContainer>
                                <PriceContainer>$ 30</PriceContainer>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                                <Detail>
                                    <ProductName>
                                    <b>Product:</b> HAKURA T-SHIRT
                                    </ProductName>
                                    <ProductId>
                                    <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor color="gray" />
                                    
                                    <ProductSize>
                                    <b>Size:</b> M
                                     </ProductSize>
                                </Detail>
                            </ProductDetail>
                            <PriceDetail>
                                <AddContainer>
                                    <Remove/>
                                    <Amount>1</Amount>
                                    <Add/>
                                </AddContainer>
                                <PriceContainer>$ 20</PriceContainer>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$-5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}
