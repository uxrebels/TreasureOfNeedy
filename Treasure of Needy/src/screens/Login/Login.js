import React, { Component } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity , ImageBackground ,Image} from 'react-native';
import globalStyles from '../styleSheet/Stylesheet'
import { SIZE_04, SIZE_25, SIZE_50 } from '../../utility/Constants'
import { LOGIN_SCREEN_TEXT } from '../../utility/Strings'
 
export default class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mobileNumber: '',
      password: '',
    }
  }
  doneAction(){
    console.warn("HHDKJSKAD")
  }

  render() {
    return (
      <View style={[globalStyles.container]}>
         {/* <ImageBackground source={BACKGROUND_IMAGE} style={{ flex: 1,
    width:'100%',
    justifyContent: "center"}}> */}
            <View style={[globalStyles.loginViewStyle,{height:50}]}>  
               <Text style={{fontSize:20,height:'100%', textAlign:'center',textAlignVertical:'center'}}> Treasure of Needy
               </Text> 
            </View>
           <View style={[globalStyles.loginViewStyle,{height:100,top:2}]}>
             <Text style={{fontSize:18}}> {LOGIN_SCREEN_TEXT}
             </Text>  
           </View>  
            <View style={[globalStyles.loginViewStyle,{top:5}]}>
          <TextInput
            style={[globalStyles.loginTextFiledsStyle, { marginTop: SIZE_25 }]}
            placeholder="Mobile Number / User Name"
            onChangeText={(inputValue) => { this.setState({ mobileNumber: inputValue }); }}
          />
          <TextInput
            style={[globalStyles.loginTextFiledsStyle, { marginTop: SIZE_04 }]}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(inputValue) => { this.setState({ password: inputValue }); }}
          />
          <TouchableOpacity style={globalStyles.loginButtonTextStyle} onPress={this.loginButtonAction}>
            <Text style={globalStyles.loginButtonLabelStyle} >  Login   </Text>
          </TouchableOpacity>

          <View style={{ height: SIZE_50 }}>
            {/* <TouchableOpacity
              style={globalStyles.forgotAndSignupStyle}
              onPress={this.forgotPasswordAction}
            >
              <Text style={globalStyles.underLineStyle}> Forgot Password ?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={globalStyles.forgotAndSignupStyle}
              onPress={this.signUpAction}
            >
              <Text style={[globalStyles.underLineStyle,{fontSize:14}]}> Register Here  </Text>
            </TouchableOpacity>
          </View>
        </View>

          {/* </ImageBackground> */}
      </View>
    )
  }

  loginButtonAction = () => {

    
    if(this.state.mobileNumber !== "admin"){
        Alert.alert('Enter Correct Mobile number')
        return;
    }
    if(this.state.password !== "admin"){
        Alert.alert('Enter Correct Password')
        return;
    }
    this.props.navigation.navigate('Tabs')

   
  

  }
  forgotPasswordAction = () => {
    Alert.alert('Forgot password')
  }
  signUpAction = () => {
    this.props.navigation.navigate('Register')
  }


}