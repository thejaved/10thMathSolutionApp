import {StyleSheet} from 'react-native';
import appFonts from '../../config/appFonts';
const styles = StyleSheet.create({
  Sbtn_container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  button_text: {
    fontFamily: appFonts.ZillaSlab_BoldItalic,
    color: '#fff',
    fontSize: 20,
  },
});
export default styles;
