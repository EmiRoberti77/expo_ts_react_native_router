import { Link, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href={'/users/1'}>Go to Users Page 1</Link>
      <Pressable
        onPress={() => {
          router.push({
            pathname: '/users/[id]',
            params: { id: 2 },
          });
        }}
      >
        <Text>Go to Users Page 2</Text>
      </Pressable>
    </View>
  );
}
