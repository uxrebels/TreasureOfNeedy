import React from 'react'
import { View , Text , StyleSheet , Image , TouchableOpacity , Linking , TextInput , ScrollView , Alert}  from 'react-native'

import { Head } from '../../customComponets/Header'
import { connect } from "react-redux";
import { CALL_IMAGE ,RADIO_OFF,RADIO_ON } from '../../utility/Images'
import DateTimePicker from '@react-native-community/datetimepicker';
import { parseDueDate ,parseTimeFromTimeStamp } from '../../utility/Utility'
import  {EmergencyRequired , NeedVolunteerRequired}  from '../../utility/Strings'



class HospitalDetailsPage extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            showTimepicker:false ,
            showDatepicker:false ,
            date : 'Select Date',
            time : 'Choose time',
            emergencyType : EmergencyRequired.NO,
            volunteer:NeedVolunteerRequired.NO
        }

    }
    showTimepicker(){
        this.setState({showTimepicker:true})
    }
    backAction(){
        
        this.props.navigation.goBack();
    }
    callToNumber(phno){
        Linking.openURL(`tel:${phno}`)
    
    }

    onDateChange = ( date) => {

        this.setState({date:parseDueDate(date).day , showDatepicker : false , showTimepicker : false})
    };
    onTimeChange = ( date) => {

        console.log("STATE VALEUE",parseTimeFromTimeStamp(date))
        this.setState({ time : parseTimeFromTimeStamp(date), showDatepicker : false , showTimepicker : false})
    };

    dateandTimePickerValue(date) {
        if(date === 'time'){
        this.setState({showTimepicker:true})
        }else{
            this.setState({showDatepicker:true})
        }
    }

    emergencyChooseAction(genderType){

        this.setState({emergencyType:genderType})

           if(genderType === EmergencyRequired.YES){
            this.callADoctorForAppointement();
           }


    }

    callADoctorForAppointement(){
        const { title  , phno } = this.props.hospitalDetails;
        Alert.alert(
            title,
            "Call to hospital" + `    `+ `${phno}`,
            [
              {
                text: "Cancel",
                onPress: () => this.setState({emergencyType:EmergencyRequired.NO}),
                style: "cancel"
              },
              { text: "OK", onPress: () => this.callToNumber(phno) }
            ],
            { cancelable: false }
          );


    }

    needVolunteerRequiredAction(volunteer){
        this.setState({volunteer :volunteer })
    }
    bookanAppointementAction(){
       
        const { title , descrption , phno , address , covid , image} = this.props.hospitalDetails;

        Alert.alert(
            title,
            "Book an appointement on : " + `${this.state.date}` +'Time slot :' + `${this.state.time}`,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => this.backAction() }
            ],
            { cancelable: false }
          );

        // this.backAction()

    }
    render(){
        const { hospitalDetails } = this.props;
        const { title , descrption , phno , address , covid , image} = hospitalDetails;
        const { showTimepicker ,date , emergencyType ,showDatepicker  , time , volunteer} = this.state;
      
        return(
            <View>
                  <ScrollView>
                {/* <Text style={{textAlign:'center'}}>  HospitalDetailsPage </Text> */}
                <Head title="Hospital Details"  backButtonVisable={true} backAction={() => this.backAction()}  forwardButtonVisable={false} />
                <View style={{width:'100%',height:140, backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
             
             <Image style={{width:"98%", height:130 ,borderRadius:4}} source={image} />
        
             </View>
               
                <View style={styles.controlStyles}>
                  <Text style={styles.label}> Hospital Name </Text>
                  <Text style={styles.textinput}> {title} </Text>
                </View> 
         
                 <View style={styles.hospitalDescriptionView}>
                  <Text style={styles.hospitalDescriptionLabel}> Hospital Description </Text>
                  <Text style={styles.hospitalDescriptiontext}> {descrption} </Text>
                </View> 
               
                <View style={styles.hospitalLocationView}>
                  <Text style={styles.hospitalLocationLabel}> Hospital Location </Text>
                  <Text style={[styles.hositalLocationtext , {}]}> {address} </Text>
                </View> 

                 {/* <View  style={{height:5,backgroundColor:'red',marginTop:8}} /> */}

                <View style={styles.controlStyles}>
                  <Text style={[styles.label,{ height: '35%'}]}> Hospital Number </Text>
                  <TouchableOpacity onPress={() => this.callToNumber(phno)}>
                  <View style={{flexDirection:'row'}}>
                  <Text style={[styles.textinput , {height:'95%'}]}> {phno} </Text>
                 {/* <TouchableOpacity style={{width:24, height:24 ,marginLeft:-30}}> */}
                  <Image  style={{width:24, height:24 ,marginLeft:-30}} source={CALL_IMAGE} />
                  {/* </TouchableOpacity> */}
                  </View>   
                 </TouchableOpacity>
                </View>

                {/* EmergencyRequired */}
               
                <View style={styles.emergencyViewStyle}>
              <Text style={styles.emergencyLabel}> Emergency </Text>
             <View style={[styles.emergencyInnerViewStyle ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.emergencyChooseAction(EmergencyRequired.YES)}>
                        <Image style= {styles.commonImageStyle} source={ emergencyType === EmergencyRequired.YES ? RADIO_ON : RADIO_OFF} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Yes </Text>
                    </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.emergencyChooseAction(EmergencyRequired.NO)}>
                         <Image style= {styles.commonImageStyle} source={ emergencyType === EmergencyRequired.NO ? RADIO_ON : RADIO_OFF} />
                    </TouchableOpacity>    
                     <View style={[styles.commonTextViewStyle,{width:'55%'}]}>
                    <Text style={styles.commonTextStyle}> No </Text>
                    </View>
                </View> 

             </View>    
            </View>


                 <View style={{height:85,width:'100%', backgroundColor:'white',flexDirection:'row',top:5}}>
                    
                    <View style={{height:'100%',width:'50%',backgroundColor:'white'}}>
                    <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Date </Text>
                    <TouchableOpacity
                     style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'60%' , marginLeft:6,width:'90%' }}
                    onPress={() => this.dateandTimePickerValue('date')}
                    // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                    >
                     <Text style={{width:'100%',height:'100%',textAlignVertical:'center'}}> {date}   </Text>
                    </TouchableOpacity>
                    </View>  
                    <View style={{height:'100%',width:'50%',backgroundColor:'white'}}>
                    <Text style={{textAlign:'left',height:'25%',fontWeight:'bold'}}>  Time </Text>
                    <TouchableOpacity
                     style={{backgroundColor:'white',borderColor:'darkgray',borderWidth:1 , height:'60%' , marginLeft:6,width:'90%' }}
                    onPress={() => this.dateandTimePickerValue('time')}
                    // onChangeText={(inputValue) => { this.setState({ username: inputValue }); }}
                    >
                     <Text style={{width:'100%',height:'100%',textAlignVertical:'center'}}> {time}   </Text>
                    </TouchableOpacity>
                    </View>  
    
    
                    </View>
        
                    {showDatepicker ? 
                    <DateTimePicker  
                        value={new Date()} 
                        minimumDate={new Date()}
                        mode={'date'}
                        display="default"
                        onChange={this.onDateChange} 
                        /> : null }

                    {showTimepicker ? 
                    <DateTimePicker  
                        value={new Date()} 
                        minimumDate={new Date()}
                        mode={'time'}
                        display="default"
                        is24Hour={false}
                        onChange={this.onTimeChange} 
                        /> : null }



                       <View style={styles.emergencyViewStyle}>
              <Text style={styles.emergencyLabel}> Would you like to volunteer?  </Text>
              <View style={[styles.emergencyInnerViewStyle ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.needVolunteerRequiredAction(NeedVolunteerRequired.YES)}>
                        <Image style= {styles.commonImageStyle} source={ volunteer === NeedVolunteerRequired.YES ? RADIO_ON : RADIO_OFF} />
                        {/* <View style={{width:20 , height:20 , borderColor:'darkgray', borderRadius:10 , borderWidth:2  , backgroundColor :volunteer === NeedVolunteerRequired.YES ? 'gray' : null }} /> */}
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Yes </Text>
                </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.needVolunteerRequiredAction(NeedVolunteerRequired.NO)}>
                        <Image style= {styles.commonImageStyle} source={ volunteer === NeedVolunteerRequired.NO ? RADIO_ON : RADIO_OFF} />
                        {/* <View style={{width:20 , height:20 , borderColor:'darkgray', borderRadius:10 , borderWidth:2  , backgroundColor :volunteer === NeedVolunteerRequired.NO ? 'gray' : null }} /> */}
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> No </Text>
                    </View>
                </View> 

             </View>         

             </View>  
            {volunteer === NeedVolunteerRequired.YES ? <View> 
                <View style={styles.controlStyles}>
                  <Text style={styles.label}> Volunteer Name  : Name of volunteer </Text>
            </View> 
            <View style={styles.controlStyles}>
                  <Text style={styles.label}> Volunteer Phone Number  : 8989339876 </Text>
            </View> 
                
                 </View> : null}
            


             <View style={styles.emergencyViewStyle}>
            <TouchableOpacity style={styles.submitButtonViewStyle} onPress={() => this.bookanAppointementAction()}>
            <Text style={styles.submitButtonStyle} >  Book an Appointment  </Text>
            </TouchableOpacity>
            </View>

              </ScrollView>
            </View>    
        )
    }
}


const styles = StyleSheet.create({
    controlStyles: {
      height: 60,
      width: '100%',
      backgroundColor: 'white',
      top: 10,
    },  
   
    label: {
      fontFamily: 'Roboto-Medium',
      marginLeft: 4,
      textAlign: 'left',
      height: '35%',
      fontWeight: 'bold',
      fontSize:16,
   
    },
    textinput :{
        height: '70%',
        marginLeft: 6,
        width: '95%',
        fontSize:18,
        textAlign: 'left',
      
    },
    hospitalDescriptionView:{
      height: 180,
      width: '100%',
      backgroundColor: 'white',
      top: 10,
    },
    hospitalDescriptionLabel:{
        fontFamily: 'Roboto-Medium',
        marginLeft: 4,
        textAlign: 'left',
        height: '15%',
        fontWeight: 'bold',
        fontSize:16,
    },
    hospitalDescriptiontext:{
        height: '75%',
        marginLeft: 6,
        fontSize:16,textAlign:'left'
    },
    hospitalLocationView:{
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        top: 10,
    },
    hospitalLocationLabel:{
        fontFamily: 'Roboto-Medium',
        marginLeft: 4,
        textAlign: 'left',
        height: '25%',
        fontWeight: 'bold',
        fontSize:16,
    },
    hositalLocationtext:{
        height: '75%',
        marginLeft: 6,
        fontSize:16,textAlign:'left'
    },
    hospitalPhnumberView:{
        height: 80,
        width: '100%',
        backgroundColor: 'white',
        top: 10,
    },
    hospitalPhnumberLabel:{
        fontFamily: 'Roboto-Medium',
        marginLeft: 4,
        textAlign: 'left',
        height: '35%',
        fontWeight: 'bold',
        fontSize:16,
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
    },
    emergencyViewStyle :{
        height: 85,
        width: '100%',
        backgroundColor: 'white',
        top: 10,
    },
    emergencyLabel :{
        fontFamily: 'Roboto-Medium',
        marginLeft: 4,
        textAlign: 'left',
        height: '25%',
        fontWeight: 'bold',
    },
    emergencyInnerViewStyle:{
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
    }
  });
  

  const mapStateToProps = state => ({
   
    hospitalDetails : state.HospitalDetailsReducer
});

const mapDispatchToProps = dispatch => ({


    saveHospitalDeatilsInReducer:(data)=> dispatch({type:SAVE_HOSPITAL_DETAILS, value:data})

});

 
export default connect(mapStateToProps , mapDispatchToProps)(HospitalDetailsPage)




