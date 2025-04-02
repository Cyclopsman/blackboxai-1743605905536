import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      {/* Hero Section */}
      <View className="bg-blue-900 py-32 px-6">
        <Text className="text-5xl font-bold text-white mb-4">Green Energy Solutions</Text>
        <Text className="text-xl text-white mb-8">
          Powering a sustainable future with renewable energy
        </Text>
        <View className="flex-row justify-center space-x-4">
          <Link href="/services" asChild>
            <TouchableOpacity className="bg-green-500 px-6 py-3 rounded-full">
              <Text className="text-white font-bold">Explore Services</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity className="bg-white px-6 py-3 rounded-full">
              <Text className="text-blue-900 font-bold">Get a Quote</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Features Section */}
      <View className="py-16 px-6">
        <View className="flex-row flex-wrap justify-between">
          {[
            {icon: 'leaf', title: 'Sustainable', desc: 'Eco-friendly energy solutions'},
            {icon: 'dollar-sign', title: 'Savings', desc: 'Lower your energy bills'},
            {icon: 'shield-alt', title: 'Reliable', desc: 'Industry-leading technology'}
          ].map((feature, i) => (
            <View key={i} className="w-full md:w-1/3 p-4 items-center">
              <Text className="text-blue-500 mb-4 text-4xl">
                {feature.icon}
              </Text>
              <Text className="text-xl font-bold mb-2">{feature.title}</Text>
              <Text className="text-gray-600 text-center">{feature.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}