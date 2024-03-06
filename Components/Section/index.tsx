import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { navigationItems } from "../../data";
interface Props{
    selectCountry:(countryId:number)=>void
}
export const Section = ({selectCountry}:Props)=>{
    return (
        <View style={style.container} >
            {navigationItems.map((item)=>(
                <TouchableOpacity onPress={()=>selectCountry(item.id)}  key={item.id} style={(item?.isActive?[style.countryBox , style.trendingBox,style.selectedBox]:style.countryBox )}>
                    <Text style={style.text}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        marginBottom:10,
        paddingBottom:8,
        paddingTop:8
    },
    trendingBox:{
        backgroundColor:'#E78895',
    },
    countryBox:{
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:'#FFC1C9',
        borderRadius:10,
    },
    selectedBox:{
        elevation: 20
    },
    text:{
        color:'black',
        textTransform:'capitalize'
    }
})
