import { View, Text, Pressable } from "react-native";
import { useState } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      className="flex-row items-center space-x-2"
    >
      <View
        className={`w-6 h-6 rounded-md border-2 ${
          checked ? "bg-blue-500 border-blue-500" : "border-gray-400"
        } items-center justify-center`}
      >
        {checked && <Text className="text-white">✓</Text>}
      </View>
    </Pressable>
  );
};

export default Checkbox;
