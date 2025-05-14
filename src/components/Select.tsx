import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View, Text } from "react-native";

const Select = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={{ padding: 20 }}>
      <Text>Select a language:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: any) => setSelectedValue(itemValue)}
        style={{ height: 50, width: "100%" }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="python" />
      </Picker>
    </View>
  );
};

export default Select;
