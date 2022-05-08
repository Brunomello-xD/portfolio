import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
    background: #fff;
`

export const Home = styled.section`
    display: flex;
    height: 100vh;
    min-height: 500px;

    .max-width {
        margin: auto 0 auto 60px;
    }

    .home-content .text-1 {
        font: 27px Roboto, sans-serif;
        color: #191927;
    }
    .home-content .text-2 {
        font: 700 75px Roboto, sans-serif;
        color: #191927;

        margin-left: -3px;
    }
    .home-content .text-3 {
        font: 40px Roboto, sans-serif;
        color: #191927;

        margin: 5px 0;
    }
    .home-content .text-3 span {
        color: #5aa9e6;
        font: 700 40px Roboto, sans-serif;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 20px Roboto, sans-serif;
        }
        .home-content .text-2 {
            font: 700 55px Roboto, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 30px Roboto, sans-serif;
            margin: 5px 0;
        }
        .home-content .text-3 span {
            color: #5aa9e6;
            font: 700 30px Roboto, sans-serif;
        }
    }
`
export const Button = styled(Link)`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color: #191927;
    text-decoration: none;
    padding: 15px 30px;
    border: 1px solid #191927;
    border-radius: 5px;
    font: 500 25px Roboto, sans-serif;

    &::before {
        content: '#';
        display: inline-block;
        width: 0.75em;

        color: #191927;

        opacity: 0;
        transition: opacity 300ms;
    }

    &:hover {
        transform: none;
        animation: pulsate 0.9s ease-in-out;
    }

    &:hover::before {
        opacity: 1;
        color: ${lighten(0.3, '#1b1b1b')};
    }

    @media (max-width: 768px) {
        padding: 10px 25px;
        font: 500 20px Roboto, sans-serif;
    }
`
export const About = styled.section`
    display: flex;
    height: 100vh;
    min-height: 500px;

    .about-content .img .left {
        width: 400px;
        height: 400px;
        background-color: #333;
    }

    .title {
        font: 500 20px Roboto, sans-serif;
        color: #000;
    }
`
