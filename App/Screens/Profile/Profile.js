import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../../config/appColors';
import styles from './styles';

const Profile = () => {
  return (
    <LinearGradient
      colors={[appColors.darkOne, appColors.darkTwo]}
      style={styles.container}
      start={{x: 0.0, y: 0}}
      end={{x: 0.5, y: 1.0}}>
      <Text style={{color: '#fff'}}>This Is Profile Page</Text>
    </LinearGradient>
  );
};

export default Profile;
