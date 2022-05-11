import { StyleSheet } from 'react-native';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  title: {
    // position: 'absolute',
    backgroundColor: AppConfig.baseColor,
    textAlign: 'center',
    paddingBottom: AppConfig.paddingM,
    fontSize: AppConfig.heading2Size,
    fontWeight: 'bold',
    // margin: AppConfig.padding2XL,
  },
});
