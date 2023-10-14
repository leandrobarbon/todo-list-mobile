import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D0D0D",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    paddingBottom: 71,
    position: "relative",
    zIndex: 1,
  },

  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    position: "absolute",
    bottom: -25,
  },

  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 54,
    paddingHorizontal: 16,

    color: "#F2F2F2",
    fontSize: 16,
    fontStyle: "normal",
    borderRadius: 6,

    // onfocus: {
    //   borderWidth: 1,
    //   borderColor: "#1E6F9F",
    // },
  },

  buttonAdd: {
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    marginLeft: 4,
  },

  imgPlus: {
    width: 16,
    height: 16,
  },
});
