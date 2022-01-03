import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import appColors from '../../config/appColors';
import appFonts from '../../config/appFonts';

const AnswerScreen = ({route}) => {
  const {title} = route.params.items;
  return (
    <LinearGradient
      colors={[appColors.darkOne, appColors.darkTwo]}
      start={{x: 0.0, y: 0}}
      end={{x: 0.5, y: 1.0}}
      style={{
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <View
        style={{
          padding: 20,
          backgroundColor: appColors.CradsColor,
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontFamily: appFonts.ZillaSlab_BoldItalic,
            color: appColors.white,
            fontSize: 20,
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default AnswerScreen;
