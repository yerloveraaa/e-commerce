import { StyleSheet} from 'react-native';
import colors from './colors'


export const formStyles  = StyleSheet.create({
    input: {
        marginBottom: 20,
    },
    btnSucces: {
        padding: 5,
        backgroundColor: colors.primary,
    },
    btnText: {
        marginTop: 10,
    },
    btnTextLabel: {
        color: colors.dark
    },
})


export default formStyles;