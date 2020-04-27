import { StyleSheet } from 'react-native';
import { SIZE_01, SIZE_05, SIZE_10, SIZE_20, SIZE_30, SIZE_40, SIZE_50, SIZE_60 } from '../../utility/Constants'


const globalStyles = StyleSheet.create({

    container: {
      flex: SIZE_01,
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%'
    },
    center: {
      flex: SIZE_01,
      justifyContent: 'center',
    },
    loginViewStyle: {
      width: 350,
      height: 220,
      backgroundColor: '#c2c2d6',
      borderRadius:8
    },
    loginTextFiledsStyle: {
      height: SIZE_40,
      borderColor: 'black',
      borderWidth: SIZE_01,
      marginLeft: SIZE_10,
      marginRight: SIZE_10,
    },
    loginButtonTextStyle: {
      flexDirection: 'column',
      alignItems: 'center',
      height: SIZE_50,
      justifyContent: 'center',
      display: 'flex'
    },
    loginButtonLabelStyle: {
      height: '70%',
      width: '50%',
      textAlign: 'center',
      backgroundColor: '#0088cc',
      justifyContent: 'center',
      textAlignVertical: 'center'
    },
    forgotAndSignupStyle: {
      height: 25,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginRight: SIZE_10
    },
    underLineStyle: {
      color: 'red',
      textDecorationLine: 'underline'
    },
    line: {
      height: 6,
      backgroundColor: "red"
    },
  
    //HEADER VIEW COMPONENT
  
    headViewStyle: {
      height: SIZE_60,
      backgroundColor: '#4374c4',
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
      height: SIZE_30,
      alignContent: 'center',
      justifyContent: 'center'
    },
    headViewThirdPortion: {
      width: '33%',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headViewThirdPortionCountStyle: {
      width: SIZE_40,
      height: SIZE_40,
      backgroundColor: '#CD179B',
      borderRadius: SIZE_20,
      justifyContent: 'center', alignItems: 'center'
    },
  
    //LISTITEM COMPONENT
  
    listItemViewStyle: {
      height: SIZE_60,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'red',
      borderBottomWidth: 1
    },
    listItemViewImageViewStyle: {
      width: '15%',
      height: SIZE_40,
      padding: SIZE_05
    },
    listItemViewImageTSyle: {
      width: SIZE_30,
      height: SIZE_30,
      marginLeft: SIZE_10
    },
    listItemViewTextViewStyle: {
      width: '65%',
      height: SIZE_30,
      alignContent: 'center',
      justifyContent: 'center'
    },
    listItemViewCountViewStyle: {
  
      width: '20%',
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    listItemViewCountTextStyle: {
      width: SIZE_30,
      height: SIZE_30,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
  
  
  export default globalStyles;