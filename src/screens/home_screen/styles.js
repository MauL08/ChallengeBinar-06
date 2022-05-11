import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppConfig.primaryColor,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: AppConfig.padding2XL,
    padding: AppConfig.paddingXL,
    backgroundColor: AppConfig.baseColor,
    borderRadius: ms(8),
  },
  greetText: {
    fontSize: AppConfig.heading2Size,
    marginBottom: AppConfig.paddingM,
    fontWeight: 'bold',
    color: AppConfig.blackColor,
  },
  locationIcon: {
    marginRight: AppConfig.paddingXS,
    height: ms(18),
    width: ms(14),
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
