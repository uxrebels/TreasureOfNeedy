import React from 'react';
import { TouchableOpacity,View, Text , Image } from 'react-native';
import {LOCATION_BLACK , CALL_IMAGE} from '../utility/Images'

const Listitem = props => {
     const {  itemdetails , listItemAction} = props
    const { title , descrption , phno , address , covid , image} = itemdetails
    return (
        <TouchableOpacity style={{width:'100%', height:130, flexDirection:'row'}} onPress={listItemAction} >

            <View style={{width:'25%', backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
             
            <Image style={{width:90, height:90 ,borderRadius:4,borderWidth:1,borderColor: covid === "true" ? 'red' : 'blue'}} source={image} />
       
            </View>
            <View style={{width:'0.5%' ,height:'100%',flexDirection:'column'}}>
               <View style={{height:'25%'}} />
               <View style={{height:'50%', backgroundColor:'darkgray'}} />
               <View style={{height:'25%'}} />
             </View>   
            <View style={{width:'73%',marginLeft:4 ,padding:4 }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold' ,fontSize:14 ,marginLeft:2 }} > {title} </Text>
           
           
            <Text style={{ fontSize: 18, fontWeight: '400' , fontSize:12 ,marginLeft:2 }} numberOfLines={3} ellipsizeMode='clip' > {descrption} </Text>

            <View style={{height:22,flexDirection:'row',width:'100%',marginTop:5}}>

                <Image resizeMode='contain'  style={{width:15,height:15,marginLeft:2 }} source={LOCATION_BLACK}/>
                <Text style={{ fontSize: 10, fontWeight: '300',width:'90%' }} numberOfLines={1}  ellipsizeMode='clip'> {address} </Text>
              
            </View>    

            <View style={{height:22,flexDirection:'row'}}>

                <Image resizeMode='contain'  style={{width:15,height:15,marginLeft:2 }} source={CALL_IMAGE}/>
                <Text style={{ fontSize: 10, fontWeight: '300' }} numberOfLines={1} > {phno} </Text>
              
            </View>   
           
            
            </View>
            
            

            {/* <View  >
                <Text style={{ fontSize: 18, fontWeight: '500' }}  > {title} </Text>
            </View>
            <View style={globalStyles.listItemViewCountViewStyle}>
               
            </View>
            <View style={globalStyles.line} /> */}
        </TouchableOpacity>
    )
}

export default Listitem;