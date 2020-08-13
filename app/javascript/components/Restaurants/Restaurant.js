import React from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div `
    border: 1px solid #FAFAFA;
    background: #FAFAFA;
    font-family: sans-serif;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
`

const RestaurantLogo = styled.div `
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 50px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`

const RestaurantName = styled.div `
    padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div `
    margin: 20px 0;

    a {
    color: #fff;
    background-color: #F5A045;
    border-radius: 4px;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #F5A045;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    }
`
const Restaurant = (props) => {
    const {name, image_url, slug, avg_score} = props.attributes

    return (
        <Card> 
            <RestaurantLogo>
                <img src={image_url} alt={name} width="50"/>
            </RestaurantLogo>
            <RestaurantName>
                {name}
            </RestaurantName>
            <Rating score={avg_score} />
            <LinkWrapper>
                <Link to={"/" + slug}>View Restaurant</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Restaurant