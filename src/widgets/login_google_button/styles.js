import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import AppConfig from '../../core/utils/app_config';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: AppConfig.paddingXL,
    borderWidth: ms(2),
    borderColor: AppConfig.buttonColor,
    paddingHorizontal: AppConfig.padding5XL,
    paddingVertical: AppConfig.paddingL,
    borderRadius: ms(6),
  },
  icon: {
    width: ms(20),
    height: ms(20),
  },
  text: {
    marginLeft: AppConfig.paddingS,
    fontSize: ms(14),
    fontWeight: '700',
    color: 'black',
  },
});
