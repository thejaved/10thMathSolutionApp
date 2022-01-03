import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#9C67F8', '#F79193']}
        style={styles.Sbtn_container}
        start={{x: 0.0, y: 0}}
        end={{x: 0.5, y: 1.0}}>
        {icon && (
          <FontAwesome5
            size={20}
            color={'#fff'}
            name={icon}
            style={styles.icon}
          />
        )}
        <Text style={styles.button_text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
