import { Text, TouchableOpacity, View, Image} from "react-native";

export default function Settings() {
  return (
    <View className="flex-1 items-center justify-center bg-dark">
      {/* Profielfoto */}
      <Image
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        }}
        className="mb-6 h-32 w-32 rounded-full"
      />

      {/* Naam */}
      <Text className="mb-2 text-2xl font-bold text-white-smoke">
        Yorgi De Schrijver
      </Text>

      {/* E-mailadres */}
      <Text className="mb-6 text-lg text-dark-light">
        yorgi.deschrijver@student.ap.be
      </Text>

      {/* Bewerken knop */}
      <TouchableOpacity className="rounded-2xl bg-primary px-12 py-4 shadow-md active:bg-blue-600">
        <Text className="text-lg font-semibold text-white">Bewerken</Text>
      </TouchableOpacity>
    </View>
  );
}
