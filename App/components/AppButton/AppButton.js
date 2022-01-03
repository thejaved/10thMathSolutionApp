import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AppButton = ({title, style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn_Container, style]} onPress={onPress}>
      <Text style={styles.button_Text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
