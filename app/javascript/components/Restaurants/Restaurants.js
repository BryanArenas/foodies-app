import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import styled from 'styled-components'

const Home = styled.div`
    text-align:center;

`

const Header = styled.div`
    padding:100px 100px 10px 100px;

    h1 {
        font-size:42px;
    }

`

const Subheader = styled.p`
    font-weight:300;
    font-size:26px;

`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding:20px;
`

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect( () => {
        axios.get('/api/v1/restaurants.json')
        .then( resp => setRestaurants(resp.data.data) )
        .catch( resp => console.log(resp) ) 
    }, [])

    console.log(JSON.stringify(restaurants))
    const grid = restaurants.map( (restaurant, index) => {
        return (
            <Restaurant
            key={index}
            attributes={restaurant.attributes}
            />
        )
    })

    return (
        <Home>
            <Header>
                <h1>Foodies</h1>
                <Subheader className="subheader">Honest, unbiased restaurant reviews.</Subheader>
                </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Restaurants