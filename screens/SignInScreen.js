import React from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    View,
} from "react-native";
import { Button, Image, Input } from "react-native-elements";

const SignInScreen = () => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <View style={styles.bodyContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri:
                                "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                        }}
                    />

                    <View style={styles.inputContainer}>
                        <Input placeholder="Email" autoFocus />
                        <Input placeholder="Password" />
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sign In"
                            type="outline"
                            buttonStyle={styles.button}
                        />
                        <Button
                            title="Sign Up"
                            loading
                            type="outline"
                            buttonStyle={styles.button}
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
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: "#fff",
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
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        width: 80,
    },
});
