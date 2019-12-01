import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native'
import TextFieldSignIn from '../components/TextFieldSignIn'
import { colors } from '../../String'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SignInBtn from '../components/SignInBtn'
import Space from '../components/Space'
import FacebookSocialBtn from '../components/FacebookSocialBtn'
import GoogleSocialBtn from '../components/GoogleSocialBtn'


const SignIn = ({navigation}) => {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
            
            <Image style={styles.headerImage} source={require('../../assets/header.jpg')} />
                <Text style={styles.title}>Email</Text>
                <TextFieldSignIn />
                <Text style={styles.title}>Password</Text>
                <TextFieldSignIn />

                <Space height="30" />
                <SignInBtn navigation={navigation} />
                <Space height="10" />
                <Text style={{color: colors.loginTitleColor, fontWeight: "bold"}}>Don't have an account ? Sign UP</Text>

                <Space height = "15" />
                <Text style={{color: colors.loginTitleColor, fontWeight: "bold"}}>OR CONTINUE WITH</Text>
                <Space height="5" />
                <View style={styles.socialBox}>
                    <FacebookSocialBtn />
                    <Space width="10" />
                    <GoogleSocialBtn />
                </View>
                
            
            
        </KeyboardAwareScrollView>
            
    )
}

SignIn.navigationOptions = {
    header: null
  };

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: "center"
    },
    headerImage: {
        height: 300,
        width: 360
    },
    title: {
        color: "#0E3150",
        alignSelf: 'flex-start',
        marginLeft: 20, 
        marginBottom: 5,
        fontWeight: "bold",
        color: colors.loginTitleColor,
        paddingLeft: 5
    },
    socialBox: {
        flexDirection: "row",
        
    }
})

export default SignIn
