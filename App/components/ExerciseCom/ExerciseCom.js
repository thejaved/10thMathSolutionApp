import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import appColors from '../../config/appColors';
import appFonts from '../../config/appFonts';

const ExerciseCom = ({title, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.TextStyle_title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.TextStyle} numberOfLines={1}>
          {subTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: appColors.CradsColor,
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  TextStyle_title: {
    color: appColors.white,
    fontFamily: appFonts.Arvo_Regular,
  },
  TextStyle: {
    color: appColors.white,
    fontFamily: appFonts.Ubuntu_Medium,
  },
});

export default ExerciseCom;
