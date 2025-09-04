
import { Text, View, FlatList } from "react-native";
export default function Historia({route}) {

const {history} = route.params;
return(

<View style={{flex: 1, alignItems: 'center'}}>
   <Text>History:</Text>
<FlatList 
data={history}
renderItem={({item}) => <Text>{item.key}</Text>} 
/>
      </View>
);


}