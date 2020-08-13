import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Review from './Review'
import ReviewForm from './ReviewForm'


const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
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

const Header = styled.div`
    padding:100px 100px 10px 100px;
    font-size:30px;
    text-align:center;
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

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').Content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const restaurant_id = restaurant.data.id
        axios.post('api/v1/reviews', {review, restaurant_id})
        .then( resp => {
            const included = [...restaurant.included, resp.data.data]
            setRestaurant({...restaurant, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch( resp => {

        })
    }
    //problem area below
        
    let reviews
        if ( length > 0)  {
            reviews = restaurants.included.map( (review, index) => {
            return (
                <Review 
                key={index}
                title={review.attributes.title}
                description={review.attributes.description}
                score={review.attributes.score}
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
                        <div className="reviews">
                            {reviews}
                        </div>
                    </Main>
                </Column>
                <Column>
                    <ReviewForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    attributes={restaurant.data.attributes}
                    review={review}
                    />
                </Column>
            </Fragment>
               }
        </Wrapper>
    )
}

export default Restaurant