import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
display: flex;
align-items: center; 
justify-content: center;
`

const Wrapper = styled.div`
width: 20%;
padding: 20px;
background-color: white;
${mobile({width:"75%"})};
`

const Title = styled.h1`
font-weight: 300;
margin-bottom: 20px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex:1;
min-width: 40%;
padding: 20px;
margin: 10px;
`

const Button = styled.button`
width: 40%;
padding: 20px;
margin-top: 20px;
border: none;
background-color: teal;
color: white;
font-size: 16px;
cursor: pointer;
margin-bottom: 5px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`

export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='username'/>
                    <Input placeholder='password'/>
                 <Button>LOGIN IN</Button>
                 <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                 <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
