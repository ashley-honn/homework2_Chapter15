import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import bottom from "./bottom";


export default function App() {
   return (
     <View style={styles.container}>
       <Text style={{
        fontSize: 20,
        color: "white",
        textDecoration: "underline",
        margin: 15,
        fontWeight: "bold"
       }}></Text><text>This is homework 2! By: Ashley Honn</text>

       <View style={styles.box}>
         <Text style={{
           fontSize: 20,
           color: "black",
           fontWeight: "bold"
         }}><text>Column</text></Text>

       <View style={styles.anotherbox}><text>Child</text></View>
       <View style={styles.anotherbox}><text>Child</text></View>
       <View style={styles.anotherbox}><text>Child</text></View>
     </View>
     <View style={bottom.container}>
       <Text style={{
         fontSize: 20,
         color: "black",
        fontWeight: "bold",
        margin: 5
       }}><text>Row</text></Text>
       <View style={bottom.boxInside}><text>Child</text></View>
       <View style={bottom.boxInside}><text>Child</text></View>
       <View style={bottom.boxInside}><text>Child</text></View> 
       </View>
    </View>       
  );
};

