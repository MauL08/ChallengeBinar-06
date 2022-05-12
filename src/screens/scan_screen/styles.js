import { StyleSheet, Dimensions } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cameraContainer: {
    width: width,
  },
  title: {
    // position: 'absolute',
    width: width,
    backgroundColor: AppConfig.baseColor,
    textAlign: 'center',
    paddingVertical: AppConfig.paddingL,
    fontSize: AppConfig.heading2Size,
    fontWeight: 'bold',
    // margin: AppConfig.padding2XL,
  },
  button: {
    padding: AppConfig.paddingXL,
    borderRadius: ms(8),
    marginTop: ms(500),
    backgroundColor: AppConfig.buttonColor,
  },
  buttonText: {
    fontSize: AppConfig.heading3Size,
    fontWeight: 'bold',
    color: 'white',
  },
});
