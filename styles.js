import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  container: {
    width: "50%",
    height: 300,
    padding: 7,
  },

  box: {
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 30,
    flexDirection: "column",
  },

  productimg: {
    borderRadius: 20,
    height: "70%",
    width: "100%",
  },

  bottomBox: {
    flexDirection: "row",
    paddingTop: 4,
  },

  textBox: {
    flexDirection: "column",
    width: "70%",
    padding: 5,
  },

  productname: {
    fontSize: 18,
  },

  productprice: {
    fontSize: 17,
  },

  likeIcon: { width: 30, height: 30, tintColor: "red" },
});

export default styles;
