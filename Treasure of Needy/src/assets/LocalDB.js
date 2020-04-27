import {APOLLO_HOSPITAL ,RAJIVGANDHI_HOSPITAL , MIOT_HOSPITAL } from '../utility/Images';


const  localDataBase = () =>{
    
     return {
         "status":" ok",
         "responseData": {
            "hospitalsList": [
                {"title" : "Rajiv Gandhi Government General Hospital" , 
                "descrption":"Rajiv Gandhi Government General Hospital is a major state-owned hospital situated in Chennai, India. The hospital with 3,000 beds is funded and managed by the state government of Tamil Nadu.The hospital with 3,000 beds is funded and managed by the state government of Tamil Nadu.They have state of the art facilities for various health ailments and disorders" , 
                'phno':'044 2530 5000' , 
                'address' :'Poonamallee High Rd, Park Town, Chennai, Tamil Nadu 600003' ,
                "hours":'24 hours', 
                "covid" : "true",
                "image" : RAJIVGANDHI_HOSPITAL},
                {"title" : "Apollo Hospital" , 
                "descrption":"The hospital has created a name for itself in the healthcare sector through cutting-edge innovation in medical procedures and technological advancements. It has over 60 departments, spearheaded by internationally trained and skillful medical experts who are supported by dedicated patient care personnel. They have state of the art facilities for various health ailments and disorders." , 
                'phno':'044 2829 3333' ,
                'address' :'21 Greams Lane, Off, Greams Road, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006' ,
                "hours":'24 hours' ,
                 "covid" : "true" ,
                 "image" : APOLLO_HOSPITAL},
                 {"title" : "MIOT International Hospital"  , 
                "descrption":"The Madras Institute of Orthopaedics and Traumatology, known in short as the MIOT International hospital, is a multi-specialty hospital in Manapakkam, Chennai, India. It is a specialty hospital in the field of joint replacement surgeries, Interventional Cardiology, orthopaedics and trauma.They have state of the art facilities for various health ailments and disorders" , 
                'phno':'044 4200 2288' ,
                'address' :'4/112, Mount Poonamalle High Rd, Sathya Nagar, Manapakkam, Chennai, Tamil Nadu 600089' ,
                "hours":'24 hours' ,
                 "covid" : "flase" ,
                 "image" : MIOT_HOSPITAL}

                
            ],
           
       

        }
     }

// MIOT International

}

export default localDataBase