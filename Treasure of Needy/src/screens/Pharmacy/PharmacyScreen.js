import React from 'react'
import { View , Text , FlatList , StyleSheet, TouchableOpacity , Image}  from 'react-native'

import { BACK_BUTTON , CAMERA} from '../../utility/Images'
import { Head } from '../../customComponets/Header'
import { Listitem } from '../../customComponets/ListItem'



import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';

class PharmacyPage extends React.Component{


    constructor(props){
        super(props)
        this.state={
            filePath:'',
            accessLib:false,
            donatinData : [
                {"donationType" : "Bread" , "description": "10 packets of bread is availble with me" , "qty" : "10"},
                {"donationType" : "Milk" , "description": "I have additional liters of milk" , "qty" : "5"}
            ]
        }

    }
   
    backAction(){
        this.props.navigation.goBack();
    }
    navigateToAddDonation(){
        console.log("NAVIGATE")
        this.props.navigation.navigate("AddDonationPage");
    }

    loginAction(){
        this.props.navigation.navigate("AddDonationPage");
    }
    toptabBar(){
        return(
            <>
            <View style={headerStyle.headViewStyle}>
            <View style={headerStyle.headViewFirstPortion}>
                <TouchableOpacity onPress={() => this.backAction()} >
                <View>
                    <Image style={{ width: 30, height: 30 }} source={BACK_BUTTON} />
                </View>
                </TouchableOpacity>
            </View>
            <View style={headerStyle.headViewSecondPortion}>
                <Text style={{fontSize : 18}} > My Donations </Text>
            </View>
            <View style={headerStyle.headViewThirdPortion} >
                <TouchableOpacity onPress={() => this.navigateToAddDonation()} >
                 <Text style={{textAlign:'right',width:'90%',fontSize:18,color:'lightblue',fontWeight:'bold'}} > Add </Text> 
                </TouchableOpacity>
            </View>
            </View>
            <View style={{width:'100%',height:1 , backgroundColor:'gray'}}/>
            </>
        )
   }
  
  
     renderOrderItem(item){
         return(
             <View style={{width:"100%", height:60}}>
                <View style={{flexDirection:'row'}}>
                 <Text style={{width:'50%' ,fontSize:25,fontWeight:'bold', backgroundColor:'white',marginLeft:4}}> {item.donationType} </Text>
                 <Text style={{width:'45%', textAlign:'right',top:9}}> ( {item.qty} ) </Text>
                 </View>   
                <Text style={{color:'gray',marginLeft:5}}> {item.description} </Text>
             </View>
              
         )
     }

     launchImageLibrary(){


        let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              const source = { uri: response.uri };
              console.log('response', JSON.stringify(response));
              this.setState({
                filePath: response,
                fileData: response.data,
                fileUri: response.uri,
                accessLib : true
              });
            }
          });



     }

     uploadPrescriptionAction(){
         if(!this.state.accessLib){ 
         Toast.show('Upload Prescription from your gallery');
        
         }else{
         this.backAction();
            setTimeout(function(){
                Toast.show('your prescription uploaded to server');
            }, 1000);

         }


          

     }


    render(){
        const{ accessLib , filePath } = this.state;
        return(
            <View>
                
                <Head title="Pharmacy" backAction={() => this.backAction()} forwardText="Add" backButtonVisable={false}  forwardButtonVisable={false} forwardAction={() => this.navigateToAddDonation()} />

                {/* {this.renderUIElement()} */}

                {/* <FlatList
                     data={this.state.donatinData}
                     style ={{backgroundColor:'white'}}
                     ItemSeparatorComponent={() => <View style={{height:1 , backgroundColor:'black'}} />}
                     ListFooterComponent={() => <View style={{height:1 , backgroundColor:'black'}} />}
                     
                    renderItem={({ item }) => this.renderOrderItem(item) }
                    />  */}
                 {/* ItemSeparatorComponent={() => <View style={styles.line} />} */}
                
                 <View style={{width:'100%',height:250, backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
             
                  <Image style={{width:200, height:200 ,borderRadius:4}} source={accessLib ? filePath : CAMERA} />
        
                  </View>
                
                  <View style={[headerStyle.controlStyles,{height:20}]}/>
            <View style={headerStyle.controlStyles}>
            <TouchableOpacity style={headerStyle.submitButtonViewStyle} onPress={() =>this.launchImageLibrary()} >
            <Text style={headerStyle.submitButtonStyle} >  Get Image From Library  </Text>
            </TouchableOpacity>
            </View>

            <View style={[headerStyle.controlStyles,{height:20}]}/>
            <View style={headerStyle.controlStyles}>
            <TouchableOpacity style={headerStyle.submitButtonViewStyle} onPress={() =>this.uploadPrescriptionAction()}>
            <Text style={headerStyle.submitButtonStyle} > Upload Prescription  </Text>
            </TouchableOpacity>
            </View>
            
            </View>    
        )
    }
}


const headerStyle = StyleSheet.create({
    headViewStyle: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      headViewFirstPortion: {
        width: '33%',
        flexDirection: 'row'
      },
      headViewSecondPortion: {
        width: '33%',
        height: 30,
        alignContent: 'center',
        justifyContent: 'center'
      },
      headViewThirdPortion: {
        width: '33%',
        height: 45,
        justifyContent: 'center',
      },

      controlStyles: {
        height: 85,
        width: '100%',
        backgroundColor: 'white',
        top: 10,
      },
    
      submitButtonViewStyle :{
        
          alignItems: 'center',
          height: 50,
          justifyContent: 'center',
          display: 'flex'
  
      },
      submitButtonStyle:{
          position:'relative',
          height: '100%',
          width: '50%',
          textAlign: 'center',
          backgroundColor: '#0088cc',
          textAlignVertical: 'center',
         color:'white',
         fontWeight:'bold',
         fontSize:14
      }


      
})




 
export default PharmacyPage;