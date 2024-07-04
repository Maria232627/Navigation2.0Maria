import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalstyle";

export const styles = StyleSheet.create({
    ball:{
        width: 20,
        height: 20,
        backgroundColor: colors.gray,
        borderRadius:15,
        borderWidth: 1,
        borderColor: colors.black
        
    },
    ballPress:{
        width: 20,
        height: 20,
        backgroundColor: colors.green,
        borderRadius:15,
        borderWidth: 1,
        borderColor: colors.black
    }
})