import React from 'react'
import {View,Text, SafeAreaView} from 'react-native'
import { globalStyle, black } from '../../components/styles'
import Articles from '../../components/articles'
import {useSelector} from 'react-redux'


const Technology =({navigation})=>{
    const data = useSelector(state=>state.posts.filter((i,d)=>{
        return(
        i.category=='Technology'
        )
    }))
    // console.log(data,'ss')
    return(
        <SafeAreaView style={globalStyle.container}>
         <Articles data={data} navigation={navigation}/>
        </SafeAreaView>
    )
}
export default Technology