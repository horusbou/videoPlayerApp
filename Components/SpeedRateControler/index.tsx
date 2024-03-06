import { StyleSheet, TouchableOpacity } from "react-native"
import { Text } from "react-native";
interface Props{
    handleSpeedRate:(el:number)=>void
}
const SpeedRateControler = ({handleSpeedRate}:Props)=>{
    const rateLists = [0.5,1,1.5,2];

    return <TouchableOpacity style={styles.container}>
        {rateLists.map((el,i)=>(
            <TouchableOpacity key={i} style={styles.textContainer} onPress={()=>handleSpeedRate(el)}>
                <Text style={styles.text}>{el}</Text>
            </TouchableOpacity>
        ))}
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:50,
        paddingLeft:10,
        paddingRight:10,
        display:'flex',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textContainer:{
        width:35,
        height:35,
        marginLeft:10,
        marginRight:10,
        padding:5,
        borderWidth:1,
        borderColor:'#ebebeb',
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

    text:{

        color:'#ebebeb',
    }
});
export default SpeedRateControler;
