import { TextInput, View, Text } from "react-native";

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  style?: object;
}

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  style,
}: FormInputProps) {
  return (
    <View className="mb-3">
      <Text className="mb-2.5 text-xl font-semibold text-white font-varela">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        className="w-full bg-[#141921] pl-8 py-2.5 text-lg text-white placeholder:text-secondary rounded-3xl overflow-hidden"
        style={style}
      />
    </View>
  );
}
