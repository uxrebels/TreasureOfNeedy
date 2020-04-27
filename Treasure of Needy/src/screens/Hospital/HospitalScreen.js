import React from 'react'
import { View , Text ,Picker  , Switch ,FlatList ,StyleSheet , TouchableOpacity , Image}  from 'react-native'
import { connect } from "react-redux";

import { Head } from '../../customComponets/Header';
import  Listitem  from '../../customComponets/ListItem';

import localDataBase from '../../assets/LocalDB';
import { SAVE_HOSPITAL_DETAILS , CHANGE_SUCEESS_STATE } from '../../redux/action/locationType';
import * as Images from '../../utility/Images'
import { Covid19Symptoms } from '../../utility/Strings'

class HospitalScreen extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
             donatinData : localDataBase().responseData.hospitalsList,
             covid19Symptoms : Covid19Symptoms.NO

        }

    }
    componentDidUpdate(prevProps) {
        const { getHospitalDetailsSuccess , changeSucessState } = this.props;
        if (getHospitalDetailsSuccess === true) {
            this.props.navigation.navigate('Hospitaldetails');
            changeSucessState();
        }

    }
   
    renderHosptialList = (item)=>{
        return(
            <Listitem title={item.hospital} itemdetails={item}  listItemAction={() => this.listItemAction(item)} />
        )
     }

    listItemAction = (item) =>{
        console.log("ITEM CLICK", item)
        const {saveHospitalDeatilsInReducer} = this.props
        // store.dispatch({type:SAVE_HOSPITAL_DETAILS , value : item});
        saveHospitalDeatilsInReducer(item);
    }
    covid19SymptomsAction(symptoms){

        this.setState({covid19Symptoms : symptoms})

    }
   
    render(){
        const { covid19Symptoms } = this.state;
        return(
            <View  onTouchStart={console.log("EVENT CAKLLED") }
            onTouchEnd={ () => {} }  >
                <Head title="Hospital"  backButtonVisable={false}  forwardButtonVisable={false} />

                <View style={styles.controlStyles}>
              <Text style={styles.label}> Critical healthcare required? </Text>
             <View style={[styles.textinput ,{borderWidth:0,flexDirection:'row'}]}>
                <View style={styles.width30}>
                    <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.covid19SymptomsAction(Covid19Symptoms.YES)}>
                        <Image style= {styles.commonImageStyle} source={ covid19Symptoms === Covid19Symptoms.YES ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> Yes </Text>
                    </View>
                </View>    
                <View style={styles.width30}>
                <TouchableOpacity style={styles.commonImageViewStyle} onPress={() => this.covid19SymptomsAction(Covid19Symptoms.NO)}>
                        <Image style= {styles.commonImageStyle} source={ covid19Symptoms === Covid19Symptoms.NO ? Images.CHECKED : Images.UN_CHECKED} />
                    </TouchableOpacity>    
                     <View style={styles.commonTextViewStyle}>
                    <Text style={styles.commonTextStyle}> No </Text>
                    </View>
                </View> 

             </View>    
            </View>
            <View style={{height:2,backgroundColor:'gray'}}  />


                <FlatList
                     data={this.state.donatinData}
                     style ={{backgroundColor:'white'}}
                     ItemSeparatorComponent={() => <View style={{height:0.75 , backgroundColor:'black'}} />}
                     ListFooterComponent={() => <View style={{height:1 , backgroundColor:'black'}} />}
                     renderItem={({ item }) =>  this.renderHosptialList(item) }
                    /> 

                   
                {/* <Text> {this.props.latitude} </Text>
                <Text> {this.props.longitude} </Text> */}
               
            </View>    
        )
    }
}




const mapStateToProps = state => ({
    latitude: state.LocationReducer.latitude,
    longitude: state.LocationReducer.longitude,
    getHospitalDetailsSuccess : state.HospitalDetailsReducer.getHospitalDetailsSuccess
});

const mapDispatchToProps = dispatch => ({


    saveHospitalDeatilsInReducer:(data)=> dispatch({type:SAVE_HOSPITAL_DETAILS, value:data}),
    changeSucessState : () => dispatch({type :CHANGE_SUCEESS_STATE})

});


const styles = StyleSheet.create({
    controlStyles: {
      height: 40,
      width: '100%',
      backgroundColor: 'white',
      top: 10,
      flexDirection:'row'
    },
   
    label: {
      fontFamily: 'Roboto-Medium',
      marginLeft: 4,
      textAlign: 'left',
      height: 24,
      fontWeight: 'bold',
      fontSize:15
    },
    textinput: {
      backgroundColor: 'white',
      borderColor: 'darkgray',
      borderWidth: 2,
      height: 24,
      marginLeft: 6,
      width: '95%',
    },
    commonImageStyle :{
        width:24 , height:24
    },
    commonImageViewStyle:{
        width:'30%',
        justifyContent:'center',
        alignItems:'center',
         height:24
    },
    commonTextStyle:{
        height:'50%',
        fontSize:18,
        height:24
    },
    commonTextViewStyle:{
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start',
    },
    width30:{
        width:'30%',
        flexDirection:'row',
       
    }
  });
  


 
export default connect(mapStateToProps , mapDispatchToProps)(HospitalScreen)
