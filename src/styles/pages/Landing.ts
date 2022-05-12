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

    @media (max-width: 576px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 18px Roboto, sans-serif;
        }
        .home-content .text-2 {
            font: 700 50px Roboto, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 28px Roboto, sans-serif;
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
    border: 2px solid #191927;
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

    @media (max-width: 576px) {
        padding: 8px 20px;
        font: 500 18px Roboto, sans-serif;
    }
`
export const About = styled.section`
    padding: 100px;
    font-family: Roboto, sans-serif;

    .about-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .title {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 60px;
        padding-bottom: 20px;
        position: relative;
        color: #191927;
    }

    .title::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 180px;
        height: 3px;
        background: #191927;
        transform: translateX(-50%);
    }

    .title::after {
        content: 'Quem sou eu';
        position: absolute;
        bottom: -12px;
        left: 50%;
        font-size: 20px;
        background: #fff;
        color: #5aa9e6;
        padding: 5px;
        transform: translateX(-50%);
    }

    .about-content .left {
        width: 45%;
    }

    .about-content .right {
        width: 55%;
    }

    .about-content .right .text {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 10px;
        color: #191927;
    }

    .about-content .right .text span {
        color: #5aa9e6;
    }

    .about-content .right p {
        text-align: justify;
        color: #191927;
    }

    .about-content .right a {
        display: inline-block;
        background: #5aa9e6;
        color: #f9f9f9;
        font-size: 20px;
        font-weight: 500;
        padding: 10px 30px;
        margin-top: 20px;
        border-radius: 6px;
        border: 2px solid #5aa9e6;
        transition: all 0.3s ease;
    }

    .about-content .column .right {
        flex: 100%;
    }

    .about-content .right a:hover {
        color: #5aa9e6;
        background: none;
    }

    .about-content .left img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 6px;
    }

    .about-content .column {
        width: 50%;
    }

    .about-content .column .left {
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }

    @media (max-width: 768px) {
        .about-content .column {
            width: 50%;
        }

        .about-content .left {
            display: flex;
            justify-content: center;
            margin: 0 auto 60px;
        }

        .about-content .right {
            flex: 100%;
        }
    }

    @media (max-width: 1104px) {
        .about-content .left img {
            width: 250px;
            height: 250px;
        }
    }
`
