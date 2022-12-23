import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiArrowGoBackFill as ArrowBack } from 'react-icons/ri'
import { RxCross1 as DeleteIcon } from 'react-icons/rx'
import { Form } from 'formik';

export const HomeContainer = styled.div`
    h1{
        text-align: center;
        margin: 1em auto;
        border-radius: 8px;
        display:flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 50%;
        max-width: 800px;
        padding: .5em;
    }
`

export const NavLink = styled(Link)`
    display:flex;
    justify-content: center;
    width: 50%;
    max-width: 200px;
    margin: auto;
    background-color: #d63030;
    text-decoration: none;
    color: white;
    padding: 1em;
    border-radius: 8px;

`

export const BackPage = styled(ArrowBack)`
    background-color: white;
    font-size: 3em;
    margin: 0.5em;
    padding: 0.2em;
    border-radius: 8px;
    cursor: pointer;
`

export const FormStyled = styled(Form)`
    border-radius: 8px;
    background-color: white;
    display: flex;
    flex-flow: column wrap;
    padding: 2em;
    width: 80%;
    margin: auto;
    max-width: 600px;

    h2{
        text-align: center;
    }

    input{
        margin-top: 2em;
        outline: none;
        border-radius: 0px;
        border: 1px grey solid;
        font-size: 1rem;
        padding: 1em;
        width: 100%;
    }

    p{
        color: red;
    }

    button{
        width: 50%;
        padding: 1em;
        border: none;
        margin: auto;
        background-color: #171744;
        color: white;
        border-radius: 4px;
        margin-top: 2em;
        cursor: pointer;
    }
`

export const Card = styled.div`
    background-color: #161515;
    margin: 1em;
    color: white;
    padding: 1em;
    cursor: pointer;
    position: relative;
    width: 30%;

    img{
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    @media (max-width: 768px){
        width: 50%;
    }

    @media (max-width: 768px){
        width: 100%;
    }
`

export const Delete= styled(DeleteIcon)`
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    border-radius: 50%;
    padding: 0.2em;
    font-size: 1.3rem;
    cursor: pointer;
`

export const PostList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
`

export const ButtonToast = styled.button`
    border: none;
    outline: none;
    border-radius: 4px;
    color: white;
    background-color: grey;
    padding: .5em;
    cursor: pointer;

    &.delete{ 
        background-color: #f53838;
    }
`