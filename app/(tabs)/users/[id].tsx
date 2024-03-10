import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function () {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Link href={'/'}>Home</Link>
      <Text>Users page - {id}</Text>
    </View>
  );
}
