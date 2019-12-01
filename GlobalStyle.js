import { StyleSheet, Platform, StatusBar  } from 'react-native';
import { colors } from './String';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 : 0,
        
    },
    title: {
        color: "#0E3150",
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontWeight: "bold",
        color: colors.loginTitleColor,
        fontSize: 15
    },
});