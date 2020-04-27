import React from 'react'
import { View , Text , Image}  from 'react-native'
import {BACKGROUND_IMAGE} from '../../utility/Images'
import Onboarding from 'react-native-onboarding-swiper';

import * as Images from '../../utility/Images'

class OnBoardingPage extends React.Component{


    constructor(props){
        super(props)

    }
    doneAction(){
        this.props.navigation.navigate('Login')
    }
   
    render(){
        return(
            <View style={{flex: 1,
                justifyContent: 'center',
                // alignItems: 'center',
                width:'100%'}}>
                <Onboarding
               onDone ={()=>this.doneAction()}
               onSkip ={()=>this.doneAction()}
               pages={[
                    {
                    backgroundColor: '#fff',
                    title: 'Covid-19 Symptoms',
                    subtitle :'',
                    image: <Image  source={Images.COVID1} />,
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={Images.COVID3} />,
                        title: 'Covid-19 Symptoms',
                        subtitle :''
                    },
                    {
                    backgroundColor: '#fff',
                    image: <Image source={Images.COVID2} />,
                    title: 'Covid-19 Prenvention',
                    subtitle :'',
                    },
                    {
                    backgroundColor: '#fff',
                    image: <Image source={Images.COVID4} />,
                    title: 'Covid-19 Prenvention',
                    subtitle :'',
                    },

                    {
                    backgroundColor: '#fff',
                    image: <Image source={Images.COVID5} />,
                    title: 'Covid-19 Prenvention',
                    subtitle :'',
                    },
   
                 ]}
              />
            </View>    
        )
    }
}

 
export default OnBoardingPage;