import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import appColors from '../../config/appColors';
import appFonts from '../../config/appFonts';
import styles from './styles';

const Cards = ({title, source, subTitle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{uri: source}}
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: 100,
            borderRadius: 10,
          }}
        />
        <View style={{paddingVertical: 5}}></View>
        <Text
          style={{
            fontFamily: appFonts.Poppins_Medium,
            color: appColors.white,
            fontSize: 15,
          }}
          numberOfLines={1}>
          {subTitle}
        </Text>
        <Text
          style={{
            fontFamily: appFonts.Arvo_BoldItalic,
            color: 'grey',
            fontSize: 12,
          }}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
