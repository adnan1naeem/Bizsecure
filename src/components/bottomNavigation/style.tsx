import {Platform} from 'react-native';

export const navigationStyles=(shadow?:boolean)=>{
  return{
    container:{
      alignContent:'center',
      alignItems:'center',
      justifyContent:'flex-end'
    },
    image:{
      width:25,
      height:20
    },
    box:{
      marginBottom:Platform.OS=='android'?10:0,
      borderRadius: 20,
      shadowOpacity: 0.80,
      shadowColor: 'rgba(95, 157, 231, 0.48)',
      shadowRadius: 20,
      borderTopColor:'#FFFF',
      borderLeftColor:'transparent',
      borderRightColor:'#FFFFFF',
      borderBottomColor:'transparent',
      borderWidth:4,
      borderTopLeftRadius:28,
      borderTopRightRadius:28,
      borderTopRadius:28,
      borderBottomLeftRadius:28,
      borderBottomRightRadius:28,
      backgroundColor: '#EBF2FA',
      width: 370,
      height: 98,
    },
    rowSyles:{
      marginBottom:60,
      alignContent:'center',
      padding:16,
      justifyContent:'space-between', 
      flexDirection: 'row' 
    },
    buttonStyles:{
      marginTop:5, 
      alignItems:'center', 
      justifyContent:'center',
      borderRadius:40, 
      elevation:6,
      width:57,
      height:57,
      backgroundColor:'#16B1FF'
    },
    labelColumnStyles:{
      marginBottom:60, 
      alignItems:'center', 
      flexDirection:'column',
      color:'transparent'
    },

    headerStyles:{
      padding:20, 
      marginTop:40,
      flexDirection:'row',
      justifyContent:'space-between',   
    },
    neuomorphStyles:{
        width:53.23,
        elevation:6,
        height: 50.39,
        borderRadius: 16,
        marginBottom:5,
        shadowOpacity:0.3,
        shadowRadius: shadow?-3:2,
        backgroundColor: '#EBF2FA',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'red',
    },
    labelStyles:{
      paddingBottom:80,
      color:'#16B1FF',
      elevation:6,
    }
}}


