import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  container: {
    marginTop: AppConfig.padding5XL,
    alignItems: 'center',
  },
  hint: {
    fontSize: AppConfig.heading3Size,
    fontWeight: '700',
  },
  logoContainer: {
    marginTop: AppConfig.paddingM,
    backgroundColor: AppConfig.blackColor,
    padding: AppConfig.paddingM,
    borderRadius: ms(100),
  },
  fingerLogo: {
    tintColor: AppConfig.baseColor,
    height: ms(40),
    width: ms(40),
  },
});
