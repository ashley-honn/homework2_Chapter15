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
       }}></Text><Text>This is homework 2! By: Ashley Honn</Text>

       <View style={styles.box}>
         <Text style={{
           fontSize: 20,
           color: "black",
           fontWeight: "bold"
         }}><Text>Column</Text></Text>

       <View style={styles.anotherbox}><Text>Child</Text></View>
       <View style={styles.anotherbox}><Text>Child</Text></View>
       <View style={styles.anotherbox}><Text>Child</Text></View>
     </View>
     <View style={bottom.container}>
       <Text style={{
         fontSize: 20,
         color: "black",
        fontWeight: "bold",
        margin: 5
       }}><Text>Row</Text></Text>
       <View style={bottom.boxInside}><Text>Child</Text></View>
       <View style={bottom.boxInside}><Text>Child</Text></View>
       <View style={bottom.boxInside}><Text>Child</Text></View> 
       </View>
    </View>       
  );
};

