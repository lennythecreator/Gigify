import { StatusBar } from 'expo-status-bar';
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-400" >
      <Text className="text-3xl" >Hello World</Text>
      <Link href="/profile" className='bg-blue-500 p-2 rounded-md'>Go to profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}

