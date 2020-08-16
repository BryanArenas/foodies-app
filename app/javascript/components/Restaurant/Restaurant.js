import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Review from './Review'
import ReviewForm from './ReviewForm'
import Header from './Header'
import FetchCsrf from '../FetchCsrf/FetchCsrf'


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    max-width: 50%;
    width: 50%;
    float: left;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: scroll;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    padding-left: 50px;
`



const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/restaurants/${slug}`
        
        axios.get(url)
        .then( resp => {
            setRestaurant(resp.data)
            setLoaded(true)

        })
        .catch( resp => console.log(resp))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        //Object spreading (...) es6 
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        FetchCsrf()

        const restaurant_id = parseInt(restaurant.data.id)
        axios.post('api/v1/reviews', {review, restaurant_id})
        .then( resp => {
            const included = [...restaurant.included, resp.data.data]
            setRestaurant({...restaurant, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch( resp => console.log(resp))
    }

    const setRating = (score, e) => {
        

        setReview({ ...review, score})
    }
    //problem area below
        
    let reviews 
    if (loaded && restaurant.included) {
        reviews = restaurant.included.map( (item, index) => {
        return (
            <Review
            key={index}
            attributes={item.attributes}
            />
         )
        })  
    }
    return (
        <Wrapper>
            {
            loaded &&
            <Fragment>
                <Column>
                    <Main>
                        <Header
                        attributes={restaurant.data.attributes}
                        reviews={restaurant.included}
                        /> 
                            {reviews}
                    </Main>
                </Column>
                <Column>
                    <ReviewForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setRating={setRating}
                    review={review}
                    attributes={restaurant.data.attributes}
                    />
                </Column>
            </Fragment>
               }
        </Wrapper>
    )
}

export default Restaurant