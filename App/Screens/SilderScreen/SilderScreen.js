import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import appColors from '../../config/appColors';
import CardsData from '../../data/CardsData';

const SilderScreen = () => {
  const [dotActive, setDotActive] = useState(0);

  const OnDotChange = ({nativeEvent}) => {
    console.log(nativeEvent);
    const ValueOfInd = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    setDotActive(ValueOfInd);
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={OnDotChange}>
        {CardsData.map(items => (
          <View key={items.key} style={styles.Imagecontainer}>
            <Image style={styles.images} source={{uri: items.source}} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {CardsData.map((items, index) => (
          <Text
            key={items.key}
            style={dotActive == index ? styles.Activedot : styles.dot}>
            {'⦿'}
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Imagecontainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.28,
  },
  images: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  Activedot: {margin: 5},
  dotContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 5,
  },
  dot: {
    color: appColors.secondary,
    margin: 5,
  },
});

export default SilderScreen;
