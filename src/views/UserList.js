import React from 'react';
import {Text, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';

const UserList = ({navigation}) => {
  return (
    <View>
      <Text>OI</Text>
      <Button
        type="clear"
        icon={<Icon name="add" size={25} color="green" />}
        onPress={() => navigation.navigate('UserForm')}
      />
    </View>
  );
};
export default UserList;
