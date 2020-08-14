import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'

const User = () => {
   const [users, setUsers] = useState([]);

   useEffect( () => {
    axios.get('/api/v1/users.json')
    .then( resp => setUsers(resp.data.data) )
    .catch( resp => console.log(resp) ) 
}, [])



}