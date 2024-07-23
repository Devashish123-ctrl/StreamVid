import { StyleSheet } from "react-native";
import { FULLVIEW_HEIGHT, FULLVIEW_WIDTH } from "../../Utils/Helper";
import { Colors } from "../../assets/Colors";

export const AuthStyleSheet = StyleSheet.create({
    container:{
        height:FULLVIEW_HEIGHT,
        width:FULLVIEW_WIDTH,
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },
    bgImg:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        zIndex:-2
    },
    bgView:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        backgroundColor:'#000',
        zIndex:-1,
        opacity:.6
    },
    content:{
        justifyContent:'center',
        alignItems:'center',
        width:.9*FULLVIEW_WIDTH,
        gap:20
    },
    logo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
        width:'100%'
    },
    logoImg:{
        width:70,
        height:70
    },
    logoText:{
        fontFamily:'ExtraBold',
        color:Colors.secColor,
        fontSize:32
    },
    text:(fontSize,color)=>{return{
        textAlign:'center',
        fontFamily:'Bold',
        fontSize,
        color,
        marginBottom:-10
    }},
    btn:(backgroundColor)=>{return{
        paddingHorizontal:15,
        paddingVertical:7,
        borderRadius:5,
        backgroundColor,
        borderWidth:2,
        borderColor:Colors.secColor
    }},
    btnText:(color)=>{return{
        textAlign:'center',
        fontFamily:'Bold',
        fontSize:14,
        color,
    }},
    btns:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:20,
        marginTop:20
    },
    headerText:{
        fontFamily:'Bold',
        color:Colors.secColor,
        fontSize:20,
        width:'100%',
        textAlign:'center'
    },
    form:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        gap:15
    },
    input:{
        padding:5,
        color:Colors.textColor,
        fontSize:16,
        backgroundColor:'rgba(0,0,0,.5)',
        width:'100%',
        borderRadius:5,
        elevation:50,
        shadowRadius:20,
        shadowColor:'rgba(0,0,0,0.4)',
        shadowOffset:{width:2,height:2},
        fontFamily:'Medium',
        fontSize:14,
    }
})