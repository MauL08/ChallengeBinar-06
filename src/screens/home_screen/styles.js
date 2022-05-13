import { StyleSheet, Dimensions } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppConfig.primaryColor,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  userContainer: {
    elevation: ms(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height - ms(250),
    marginHorizontal: AppConfig.padding2XL,
    padding: AppConfig.paddingXL,
    backgroundColor: AppConfig.baseColor,
    borderRadius: ms(8),
  },
  greetText: {
    fontSize: AppConfig.heading2Size,
    fontWeight: 'bold',
    color: AppConfig.blackColor,
  },
  locationIcon: {
    marginRight: AppConfig.paddingXS,
    height: ms(11),
    width: ms(9),
  },
  locationText: {
    fontSize: AppConfig.normalFontSize,
    color: AppConfig.blackColor,
  },
  refreshIcon: {
    marginLeft: AppConfig.paddingS,
    height: ms(17),
    width: ms(14),
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exitIcon: {
    height: ms(30),
    width: ms(30),
  },
});
