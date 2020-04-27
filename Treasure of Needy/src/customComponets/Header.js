import React from 'react';
import { View, Text, TouchableOpacity, Image , StyleSheet } from 'react-native';
import { BACK_BUTTON} from '../utility/Images'

const Head = props => {
    const { title, backAction, forwardText, backButtonVisable , forwardButtonVisable , forwardAction } = props
    return (
        <>
        <View style={headerStyle.headViewStyle}>
            <View style={headerStyle.headViewFirstPortion}>
                {backButtonVisable ?
                    <View>
                        <TouchableOpacity onPress={backAction} >
                            <View style={{ marginLeft:15}}>
                                <Image style={{ width: 25, height: 25 }} source={BACK_BUTTON} />
                            </View>
                        </TouchableOpacity>
                    </View> : null}
            </View>
            <View style={headerStyle.headViewSecondPortion}>
                <Text style={{fontSize : 18}} > {title} </Text>
            </View>
            <View style={headerStyle.headViewThirdPortion} >

                <TouchableOpacity onPress={forwardAction} >
                  {forwardButtonVisable ? <Text style={{textAlign:'right',width:'90%',fontSize:18,color:'#4d90bd',fontWeight:'bold'}} > {forwardText} </Text> : null}
                </TouchableOpacity>

            </View>

        </View>
        <View style={{width:'100%',height:1 , backgroundColor:'gray'}}/>
        </>
    )
}


const headerStyle = StyleSheet.create({
    headViewStyle: {
        height: 50,
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
        justifyContent: 'center'
      },
      
})



export { Head }