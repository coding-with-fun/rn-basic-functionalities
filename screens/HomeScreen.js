import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios
            .get("https://api.quotable.io/random")
            .then((res) => {
                setTitle(res.data.content);
            })
            .catch(() => {
                console.log("Error while fetching data");
            });
    }, []);

    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
