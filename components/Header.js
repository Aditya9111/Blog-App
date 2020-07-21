import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({title, navigation, name, nav, size, id}) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(nav, {id})}>
        <Icon name={name} size={size} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    marginLeft: '59%',
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default Header;
