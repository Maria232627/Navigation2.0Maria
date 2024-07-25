import {StyleSheet} from 'react-native';
import {colors} from '../../styles/globalstyle';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.green,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.ligthgreen,
        borderRadius: 5,
        margin: 10,
    },
    buttonThird: {
        backgroundColor: colors.gray,
        borderRadius: 5,
        margin: 10,
    },
    text:{
        color: colors.white,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center",
    }
})

