import { Tabs } from 'expo-router';

const TableLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="users/[id]"
        options={{
          headerTitle: 'Users',
          title: 'Users',
        }}
      />
    </Tabs>
  );
};

export default TableLayout;
