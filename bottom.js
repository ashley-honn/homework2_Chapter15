import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 10,
    borderStyle: "solid",
    borderColor: "yellow",
    ...Platform.select({
      ios: {paddingTop: 20} ,
      android: {paddingTop: StatusBar.currentHeight}
    })
  },

  boxInside: {
    width: 150,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    margin: 10,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "white",
  },

  bottombox: {
    width: 400,
    height: 600,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "hotpink",
    margin: 10,
    borderWidth: 30,
    borderStyle: "solid",
    borderColor: "white"
  }
});