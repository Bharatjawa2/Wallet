import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{color: "green"}}>Edit src/app/index.tsx tdfero edit this screen.</Text>
      <Link href={"/about"}>About</Link>
      <Image source={{ uri : "https://images.unsplash.com/photo-1779896412149-af18f18dbd54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"}}
      style={{width:100,height:100}}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "black",
  },
});
