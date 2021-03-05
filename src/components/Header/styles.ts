import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.spacing.xx_large,
    paddingHorizontal: metrics.spacing.medium,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary.lighter,
    elevation: 5,
  },
  iconBackArea: {
    position: 'absolute',
    left: metrics.spacing.x_small,
  },
  headerTitleText: {
    fontSize: metrics.font_size.xx_small,
    textTransform: 'uppercase',
    color: colors.secondary.darker,
    textAlign: 'center',
  },
});

export default styles;
