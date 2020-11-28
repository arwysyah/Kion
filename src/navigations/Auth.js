import React from 'react'
import Index from '../navigations/index'
import fireDB from '../../config/configs'
export default function Auth ({navigation}){
    console.log(fireDB.auth().currentUser)
    return(
<>
</>
    )
}