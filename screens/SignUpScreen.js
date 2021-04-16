import React, { useRef } from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Button, Image, Input } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
    const ref_input2 = useRef();

    const handleSignUp = () => {
        navigation.replace("Home");
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
                            autoFocus
                            returnKeyType="next"
                            onSubmitEditing={() => ref_input2.current.focus()}
                        />
                        <Input
                            placeholder="Password"
                            ref={ref_input2}
                            onSubmitEditing={() => handleSignUp()}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sign Up"
                            type="outline"
                            buttonStyle={styles.button}
                            onPress={() => handleSignUp()}
                        />
                        <Button
                            title="Sign In"
                            type="outline"
                            buttonStyle={styles.button}
                            onPress={() => navigation.navigate("Sign In")}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;

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
