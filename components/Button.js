import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({label,theme}){
    
    if (theme === 'primary') {
        return(
            <View style={[styles.buttonContainer,{borderWidth:1,borderColor:"#1b9980",borderRadius:18},{marginTop:40}]}>
                <Pressable
                 style={[styles.button,{backgroundColor:"#fff"}]}
                 onPress={() => alert('Vous avez appuyé un boutton') }>

                  <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                  >
                  </FontAwesome>  
                  <Text style={[styles.buttonLabel,{color:'#25292e'}]}>{label}</Text>    

                </Pressable>
            </View>
        );
    }

    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={()=>alert('Choisir une autre photo')}>
             <Text>{label}</Text>
            </Pressable>
       </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },

    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonIcon: {
        paddingRight: 8,
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },

});