import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cards from '../../components/Cards/Cards';
import appColors from '../../config/appColors';
import appFonts from '../../config/appFonts';
import screenValue from '../../config/screenValue';
import CardsData from '../../data/CardsData';

const Home = ({navigation}) => {
  return (
    <>
      <LinearGradient
        colors={[appColors.darkOne, appColors.darkTwo]}
        start={{x: 0.0, y: 0}}
        end={{x: 0.5, y: 1.0}}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: appColors.white,
            fontFamily: appFonts.Poppins_Medium,
          }}>
          Class 10th Mathematics Solutions
        </Text>
      </LinearGradient>
      <ScrollView>
        <LinearGradient
          colors={[appColors.darkOne, appColors.darkTwo]}
          style={styles.Home_Data_container}
          start={{x: 0.0, y: 0}}
          end={{x: 0.5, y: 1.0}}>
          {CardsData.map(items => {
            const {key, source, title, subTitle} = items;
            return (
              <Cards
                title={title}
                source={source}
                key={key}
                subTitle={subTitle}
                onPress={() =>
                  navigation.navigate(screenValue.ChapterDataScreen, {items})
                }
              />
            );
          })}
        </LinearGradient>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Home_Data_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default Home;
