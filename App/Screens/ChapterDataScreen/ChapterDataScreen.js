import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ExerciseCom from '../../components/ExerciseCom/ExerciseCom';
import appColors from '../../config/appColors';
import appFonts from '../../config/appFonts';
import screenValue from '../../config/screenValue';

const ChapterDataScreen = ({route, navigation}) => {
  const {title, source, subTitle, Exercise} = route.params.items;
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
      <Image
        source={{uri: source}}
        style={{
          width: '100%',
          height: 200,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
      <View style={{paddingVertical: 5}}></View>
      <Text
        style={{
          fontFamily: appFonts.Poppins_Medium,
          color: appColors.white,
          fontSize: 20,
        }}>
        {subTitle}
      </Text>
      <Text
        style={{
          fontFamily: appFonts.Arvo_Regular,
          color: 'grey',
          fontSize: 16,
        }}
        numberOfLines={1}>
        {title}
      </Text>
      <View style={{paddingVertical: 5}}></View>
      <ScrollView>
        {Exercise.map(items => (
          <ExerciseCom
            title={items.title}
            subTitle={items.exercise}
            key={items.key}
            onPress={() =>
              navigation.navigate(screenValue.AnswerScreen, {items})
            }
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default ChapterDataScreen;
