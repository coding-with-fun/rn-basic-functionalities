import React, { useRef } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Button, Image, Input } from "react-native-elements";

const SignInScreen = ({ navigation }) => {
    const ref_input2 = useRef();

    const handleSignIn = () => {
        navigation.replace("Home");
    };

    const handleTextChange = (text, id) => {
        console.log(text, id);
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={"handled"}>
                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri:
                                "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                        }}
                    />

                    <View style={styles.inputContainer}>
                        <Input
                            placeholder="Email"
                            name="email"
                            autoFocus
                            keyboardType="email-address"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            autoCapitalize="none"
                            returnKeyType="next"
                            onSubmitEditing={() => ref_input2.current.focus()}
                            onChangeText={(text) =>
                                handleTextChange(text, "email")
                            }
                        />
                        <Input
                            placeholder="Password"
                            secureTextEntry
                            autoCompleteType="password"
                            textContentType="password"
                            autoCapitalize="none"
                            ref={ref_input2}
                            onChangeText={(text) =>
                                handleTextChange(text, "password")
                            }
                            onSubmitEditing={() => handleSignIn()}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sign In"
                            type="outline"
                            buttonStyle={styles.button}
                            onPress={() => handleSignIn()}
                        />
                        <Button
                            title="Sign Up"
                            type="outline"
                            buttonStyle={styles.button}
                            onPress={() => navigation.replace("Sign Up")}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
    },
    bodyContainer: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    inputContainer: {
        width: 400,
        paddingHorizontal: 55,
        marginTop: 40,
    },
    buttonContainer: {
        flex: 1,
        width: 260,
        // flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button: {
        width: 130,
    },
});
