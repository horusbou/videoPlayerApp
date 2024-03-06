import { useRef, useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, View,Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { CloseButton, SearchButton } from "../../assets/icons";

const Search = ()=>{
    const [text,setText] = useState("");

    const onSubmit = ()=>{
        if(text.length>0){
            setText('')
            console.log(text)
        }
    }

    return (<View
        style={style.container}
    >
        <TextInput
        style={style.TextInput}
        onChangeText={setText}
        value={text}
        placeholder="Search ..."
        onSubmitEditing={onSubmit}
        placeholderTextColor="black"
        />
        <Text style={style.TextButton}>
            {text.length>0?
            <TouchableOpacity style={style.Icon} onPress={()=>setText('')}>
                <CloseButton fill="black" width={30} height={30}  />
            </TouchableOpacity>
            :
            <TouchableOpacity style={style.Icon} onPress={onSubmit}>
                <SearchButton fill="black" width={30} height={30}/>
            </TouchableOpacity>
            }
        </Text>

    </View>)
}

const style = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10
    },
    TextInput:{
        flex:1,
        color:'black',
        backgroundColor:'#e5e5e5',
        height:40,
        borderRadius:50,
        borderColor:'#eee',
        paddingHorizontal:10
    },
    TextButton:{
        marginLeft:10,
        marginRight:10,
    },
    Icon:{
        // borderColor:'red',
        // borderWidth:4
    }
})

export default Search;
