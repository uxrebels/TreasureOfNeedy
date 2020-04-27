import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
//   import { RadioButton, Checkbox } from 'react-native-paper';
import {Head} from '../../customComponets/Header'
import * as Images from '../../utility/Images'
import {GenderTypes , HealthCareRequired , MedicalServiceRequired , PharmacyServiceRequired , NeedVolunteerRequired} from '../../utility/Strings'


class RegisterPage extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            userName: '',
            phoneNumber: '',
            age: '',
            genderType: GenderTypes.MALE,
            description: '',
            criticalCare: HealthCareRequired.NO,
            cricatcalCareDesc: '',
            medical: MedicalServiceRequired.YES,
            pharmacy: PharmacyServiceRequired.NO,
            volunteer: NeedVolunteerRequired.NO,
          };

    }
    genderChooseAction(genderType){

        this.setState({genderType:genderType})

    }

    criticalHealthcareRequiredAction(healthcareOption){

        this.setState({criticalCare:healthcareOption})


    }
    medicalServiceAction(){

        this.setState({medical: !this.state.medical })

    }
    pharmacyServiceAction(){
        this.setState({pharmacy: !this.state.pharmacy })
    }
    needVolunteerRequiredAction(volunteer){
        this.setState({volunteer :volunteer })
    }
    loginButtonAction =() =>{
        this.props.navigation.navigate('Tabs')
    }
   
    render() {
        const { genderType , criticalCare , medical , pharmacy , volunteer } = this.state;
        // const { criticalCare } = this.state;
        return (
          <View style={{ backgroundColor: 'white'}} >
          <Head title="Registration"  backButtonVisable={false}  forwardButtonVisable={false} />
          <ScrollView >
          <View style={styles.controlStyles}>
              <Text style={styles.label}> Name </Text>
              <TextInput
                style={styles.textinput}
                placeholder="Enter your name"
                // onChangeText={(inputValue) => { this.setState({ userName: inputValue }); }}
              />
          </View>
          <View style={styles.controlStyles}>
              <Text style={styles.label}> Phone Number </Text>
              <TextInput
               keyboardType="phone-pad"
                style={styles.textinput}
                maxLength={10}
                placeholder="Enter your phone number"
                // onChangeText={(inputValue) => { this.setState({ phoneNumber: inputValue }); }}
              />
            </View>
            <View style={styles.controlStyles}>
              <Text style={styles.label}> Age </Text>
              <TextInput
                style={styles.textinput}
                maxLength={2}
                keyboardType="numeric"
                placeholder="Enter your age"
                // onChangeText={(inputValue) => { this.setState({ age: inputValue }); }}
              />
            </View>

            <View style={styles.controlStyles}>
              <Text style={styles.label}> Gender </Text>
             <View style={[styles.textinput ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.genderChooseAction(GenderTypes.MALE)}>
                        <Image style= {styles.commonImageStyle} source={ genderType === GenderTypes.MALE ? Images.RADIO_ON : Images.RADIO_OFF} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Male </Text>
                    </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.genderChooseAction(GenderTypes.FEMALE)}>
                        <Image style= {styles.commonImageStyle} source={ genderType === GenderTypes.FEMALE ? Images.RADIO_ON : Images.RADIO_OFF} />
                    </TouchableOpacity>    
                     <View style={[styles.commonTextViewStyle,{width:'55%'}]}>
                    <Text style={styles.commonTextStyle}> Female </Text>
                    </View>
                </View> 

             </View>    
            </View>


            <View style={[styles.controlStyles,{height:120}]}>
              <Text style={[styles.label,{height:25}]}> Health issue description </Text>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                style={[styles.textinput,{height:75}]}
                placeholder="Enter your health issues in detail"
                // onChangeText={(inputValue) => { this.setState({ description: inputValue }); }}
              />
            </View>

            <View style={styles.controlStyles}>
              <Text style={styles.label}> Critical healthcare required? </Text>
             <View style={[styles.textinput ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.criticalHealthcareRequiredAction(HealthCareRequired.YES)}>
                        <Image style= {styles.commonImageStyle} source={ criticalCare === HealthCareRequired.YES ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Yes </Text>
                    </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.criticalHealthcareRequiredAction(HealthCareRequired.NO)}>
                        <Image style= {styles.commonImageStyle} source={ criticalCare === HealthCareRequired.NO ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> No </Text>
                    </View>
                </View> 

             </View>    
            </View>
             {criticalCare === HealthCareRequired.YES ? <View style={styles.controlStyles}>
                <Text style={styles.label}> Critical care description </Text>
                <TextInput
                
                  style={styles.textinput}
                  placeholder="E.g Pregnant/ heart attack history"
                  // onChangeText={(inputValue) => { this.setState({ cricatcalCareDesc: inputValue }); }}
                />
              </View> : null }

              <View style={[styles.controlStyles,{height:120}]}>
              <Text style={[styles.label,{height:25}]}> Services </Text>
             
              <View style={{width:'90%',flexDirection:'row',height:40}}>
                    <TouchableOpacity style={{width:'14%',justifyContent:'center',alignItems:'center'}} onPress={() => this.medicalServiceAction()}>
                        <Image style= {styles.commonImageStyle} source={ medical === MedicalServiceRequired.YES ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={{width:'80%',justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{height:'60%',fontSize:18}}> Medical Service </Text>
                    </View>
                </View>    


                <View style={{width:'90%',flexDirection:'row',height:40}}>
                    <TouchableOpacity style={{width:'14%',justifyContent:'center',alignItems:'center'}} onPress={() => this.pharmacyServiceAction()}>
                        <Image style= {styles.commonImageStyle} source={ pharmacy === PharmacyServiceRequired.YES ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={{width:'80%',justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{height:'60%',fontSize:18}}> Pharmacy Service </Text>
                    </View>
                </View> 
              </View>



              <View style={styles.controlStyles}>
              <Text style={styles.label}> Would you like to volunteer?  </Text>
              <View style={[styles.textinput ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.needVolunteerRequiredAction(NeedVolunteerRequired.YES)}>
                        <Image style= {styles.commonImageStyle} source={ volunteer === NeedVolunteerRequired.YES ? Images.RADIO_ON : Images.RADIO_OFF} />
                        {/* <View style={{width:20 , height:20 , borderColor:'darkgray', borderRadius:10 , borderWidth:2  , backgroundColor :volunteer === NeedVolunteerRequired.YES ? 'gray' : null }} /> */}
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Yes </Text>
                </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.needVolunteerRequiredAction(NeedVolunteerRequired.NO)}>
                        <Image style= {styles.commonImageStyle} source={ volunteer === NeedVolunteerRequired.NO ? Images.RADIO_ON : Images.RADIO_OFF} />
                        {/* <View style={{width:20 , height:20 , borderColor:'darkgray', borderRadius:10 , borderWidth:2  , backgroundColor :volunteer === NeedVolunteerRequired.NO ? 'gray' : null }} /> */}
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> No </Text>
                    </View>
                </View> 

             </View>           
            {volunteer === NeedVolunteerRequired.YES ? <Text style={[styles.label,{fontWeight:'300',fontSize:12,marginLeft:8,color:'gray'}]} > Help people to get to hospital or get their medicine </Text>   : null}
            </View>
            <View style={[styles.controlStyles,{height:20}]}/>
            <View style={styles.controlStyles}>
            <TouchableOpacity style={styles.submitButtonViewStyle} onPress={this.loginButtonAction}>
            <Text style={styles.submitButtonStyle} >  Click Me For Register   </Text>
            </TouchableOpacity>
            </View>
           
            <View style={[styles.submitButtonViewStyle ,{backgroundColor:'red'}]}>
              <Text style = {{width:'100%',backgroundColor:'red',height:'100%',textAlign:'center',textAlignVertical:'center',fontSize:18,fontWeight:'bold',color:'white'}}>  STAY SAFE . STAY HOME </Text>
            </View>
            <View style={styles.controlStyles}/>
            
          </ScrollView>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    controlStyles: {
      height: 85,
      width: '100%',
      backgroundColor: 'white',
      top: 10,
    },
   
    label: {
      fontFamily: 'Roboto-Medium',
      marginLeft: 4,
      textAlign: 'left',
      height: '25%',
      fontWeight: 'bold',
    },
  
  
    root: {
      width: 360,
      height: 640,
      backgroundColor: 'white',
      borderColor: '#D0E2FF',
      borderWidth: 2,
    },
    textinput: {
      backgroundColor: 'white',
      borderColor: 'darkgray',
      borderWidth: 2,
      height: '55%',
      marginLeft: 6,
      width: '95%',
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
    },
    commonImageStyle :{
        width:24 , height:24
    },
    commonImageViewStyle:{
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    commonTextStyle:{
        height:'50%',
        fontSize:18
    },
    commonTextViewStyle:{
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    width30:{
        width:'30%',
        flexDirection:'row'
    }
  });
  

 
export default RegisterPage;