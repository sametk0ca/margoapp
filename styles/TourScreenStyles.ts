import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#127F86",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 20
  },
  carouselItem: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#CCCCCC",
    marginHorizontal: 5
  },
  activeIndicator: {
    backgroundColor: "#FF0000"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default styles;
