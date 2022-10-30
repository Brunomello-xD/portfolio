import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
    background: #fff;
`

export const Home = styled.section`
    display: flex;
    height: 100vh;
    /* width: 100vw; */
    min-height: 500px;

    .max-width {
        margin: auto 0 auto 60px;
    }

    .home-content .text-1 {
        font: 27px monospace, sans-serif;
        color: #191927;
    }
    .home-content .text-2 {
        font: 600 75px monospace, sans-serif;
        color: #191927;

        margin-left: -3px;
    }
    .home-content .text-3 {
        font: 40px monospace, sans-serif;
        color: #191927;

        margin: 5px 0;
    }
    .home-content .text-3 span {
        color: #5aa9e6;
        font: 700 40px monospace, sans-serif;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 20px monospace, sans-serif;
        }
        .home-content .text-2 {
            font: 700 55px monospace, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 30px monospace, sans-serif;
            margin: 5px 0;
        }
        .home-content .text-3 span {
            color: #5aa9e6;
            font: 700 30px monospace, sans-serif;
        }
    }

    @media (max-width: 576px) {
        padding: 0 1rem;

        .home-content .text-1 {
            font: 18px monospace, sans-serif;
        }
        .home-content .text-2 {
            font: 700 50px monospace, sans-serif;
            margin-left: -3px;
        }
        .home-content .text-3 {
            font: 28px monospace, sans-serif;
            margin: 5px 0;
        }
        .home-content .text-3 span {
            color: #5aa9e6;
            font: 700 30px monospace, sans-serif;
        }
    }
`

export const Button = styled.div`
    .typing-demo {
        width: 22ch ;
        animation: typing 2s steps(22),
        blink .5s step-end infinite alternate ;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 3em;
        color: #191927;
    }

    @keyframes typing {
        from {
            width: 0;
        }   
    }

    @keyframes blink {
        50% {
            border-color: transparent;
        } 
    }

    @media (max-width: 768px) {
        padding: 10px 25px;
        font: 500 10px monospace;
    }

    @media (max-width: 576px) {
        padding: 8px 20px;
        font: 500 8px monospace;
    }
`
export const About = styled.section`
    padding: 100px;
    font-family: monospace, sans-serif;

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
        margin-bottom: 20px;
    }

    .about-content .right a {
        display: inline-block;
        background: #191927;
        color: #f9f9f9;
        font-size: 20px;
        font-weight: 500;
        padding: 12px 32px;
        margin-top: 20px;
        /* border-radius: 6px; */
        border: 2px solid #191927;
        transition: all 0.3s ease;
    }

    .about-content .column .right {
        flex: 100%;
    }

    .about-content .right a:hover {
        color: #191927;
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

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 10px;
    padding: 100px;

    .card {
        width: auto;
        max-width: 300px;

        height: 150px;

        border-radius: 6px;
        background: ${lighten(0.3, '#5aa9e6')};

        padding: 1rem 0.8rem;
    }

    .title {
        font: 25px monospace, sans-serif;
        color: #191927;
        text-overflow: ellipsis;
        overflow: hidden;
        
    }

    .description {
        font: 15px monospace, sans-serif;
        color: #191927;
        text-align: justify;
        margin-top: 1.2rem;
    }

    @media (max-width: 600px) {
        flex-direction: column;

        .title {
            font: 20px monospace, sans-serif;
        }

        .description {
            font: 18px monospace, sans-serif;
        }
    }

    @media (max-width: 576px) {
        .title {
            font: 18px monospace, sans-serif;
        }

        .description {
            font: 16px monospace, sans-serif;
        }
        
    }
`
