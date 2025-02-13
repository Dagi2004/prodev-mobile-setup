import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
  container:{
    backgroundColor:"#90caf9"
  },
  largeText:{
    color:"#f44336",
    fontSize:30,
    marginBottom:5,
    fontVariant:["small-caps"]
  },
  mediumText:{
    color:"#9c27b0",
    fontSize:20,
    marginBottom:10,
    fontWeight:700,
    textAlign:"right",
    fontVariant:["small-caps"]
  },
  smallText:{
    color:"#2196f3",
    marginBottom:10,
    fontWeight:"400",
    fontSize:15,
    textAlign:"center"

  }
})
export default function Index() {
  return (
    <View
      style={styles.container}
        
    >
        <Text>Entry Screen-Awesome</Text>
    
      <Text style={styles.largeText}>TYPESCRIPT IS GREAT IF YOU PRACTICE MORE</Text>
      <Text style={styles.mediumText}>React Native Provides you single code base for cross platforms</Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
    </View>
  );
}
