import React from 'react'
import { View , Text , TextInput , ScrollView, TouchableOpacity ,Image }  from 'react-native'

import { UN_CHECKED , CHECKED} from '../../utility/Images'


class MyDonationPage extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            locationCheck : false
        }

    }
    backAction(){
        this.setState({locationCheck : !this.state.locationCheck});
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:'white'}}>

                <View style={{height:85,width:'100%', backgroundColor:'red',flexDirection:'row',top:5}}>
                    
                <View style={{height:'100%',width:'50%',backgroundColor:'white'}}>
                <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Type </Text>
                <TextInput
                 style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'60%' , marginLeft:6,width:'90%'}}
                 placeholder="Type of product"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View>  
                <View style={{height:'100%',width:'50%',backgroundColor:'white'}}>
                <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Quantity </Text>
                <TextInput
                 style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'60%' , marginLeft:6,width:'90%'}}
                 placeholder="Eg : Quantity  4"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View>  


                </View>    
                
                <View style={{height:85,width:'100%',backgroundColor:'white',top:10}}>
                <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Name </Text>
                <TextInput
                 style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'55%' , marginLeft:6,width:'95%'}}
                 placeholder="Enter product Name"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View>   

                <View style={{height:85,width:'100%',backgroundColor:'white',top:10}}>
                <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Contact </Text>
                <TextInput
                 style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'55%' , marginLeft:6,width:'95%'}}
                 placeholder="Enter contact info"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View>  
                <View style={{height:85,width:'100%',backgroundColor:'white',top:10}}>
                <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Description </Text>
                <TextInput
                 style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'55%' , marginLeft:6,width:'95%'}}
                 placeholder="Enter Description"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View> 

                <View style={{height:100,width:'100%',backgroundColor:'gray',top:10}}>
                <Text style={{textAlign:'left',height:'22%',fontWeight:'bold'}}>  Location </Text>
                <TouchableOpacity style={{ marginLeft : 5,backgroundColor:'yellow',textAlign:'left',height:'20%',fontWeight:'bold' ,flexDirection:'row'}} onPress={() => this.backAction()} >  
                     <Image style={{ width: 18, height: 18 }} source={ this.state.locationCheck ? CHECKED : UN_CHECKED} />
                     <Text style={{color:'gray'}} > Use my current location </Text>
                </TouchableOpacity>
                <TextInput
                
                 style={{backgroundColor:'red',borderColor:'darkgray',borderWidth:1 , height:'50%' , marginLeft:6,width:'95%'}}
                 placeholder="Enter Description"
                // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                />
                </View> 




            </ScrollView>    
        )
    }
}


 
export default MyDonationPage;