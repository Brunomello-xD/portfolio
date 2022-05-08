import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { lighten } from 'polished'

type MenuProps = {
    open: boolean
}

export const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: sticky;

    top: 0px;
    padding: 0 4rem;

    background: #f9f9f9;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`

export const Hamburguer = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #191927;
        margin-bottom: 5px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const Menu = styled.div<MenuProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ open }) => (open ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
    }
`

export const MenuLink = styled(Link)`
    display: inline-block;
    position: relative;
    /**
    1rem = top and bottom 
    1.3rem = left and right 
    */
    padding: 1rem 1.3rem;
    cursor: pointer;
    text-align: center;

    color: #191927;

    font: 500 1rem Roboto, sans-serif;

    transition: all 0.3s ease-in;

    &:hover {
        color: ${lighten(0.3, '#1b1b1b')};
    }
`

export const Logo = styled(Link)`
    padding: 1rem;
    color: #191927;

    font: 700 1.6rem Roboto, sans-serif;

    span {
        font: 500 1.6rem Roboto, sans-serif;
        color: #5aa9e6;
    }
`
