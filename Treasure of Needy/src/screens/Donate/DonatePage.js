import React from 'react'
import { View , Text ,StyleSheet,TouchableOpacity }  from 'react-native'
import { Head } from '../../customComponets/Header'



class DonatePage extends React.Component{


    constructor(props){
        super(props)

    }
   
    render(){
        return(
            <View>
                <Head title="Donation page" backAction={() => this.backAction()} forwardText="Add" backButtonVisable={false}  forwardButtonVisable={false} forwardAction={() => this.navigateToAddDonation()} />
                <View style={{width:'100%',height:130, padding:6}}>
                <Text style={{textAlign:'left',fontSize:20}}>  we started an initiative to help the needy to commute
                to hospital and go get their medicines delivered to their home.</Text>
 
                <Text style={{textAlign:'left',fontSize:20,marginLeft:3}}> Please consider donating so that we can spend those money for fuel expenses </Text>
                 </View>   

               <View style={{height:18,width:'100%'  }} />  
              
              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> Organizer Name : Cognizant </Text>
                 
              </View>    
              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> Google Pay : 1234567890 </Text>
                 
              </View>    
              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> Paytm : 1234567890 </Text>
                 
              </View>
              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> Addess : Chennai </Text>
                 
              </View>
              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> Bank Ac No : 126552715471522 </Text>
                 
              </View>

              <View style={{width:'100%',height:50,justifyContent:'center'}}>
                  <Text style={{fontSize:18,height:'95%'}}> IFSC Code : SBIN091929 </Text>
                 
              </View>
                
            </View>    
        )
    }
}
const styles = StyleSheet.create({
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
  });

 
export default DonatePage;