import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
  },
  image: {
    width: '45%',
    maxWidth: 120,
  },
  descriptionArea: {
    flex: 1,
    marginLeft: metrics.spacing.xx_small,
    justifyContent: 'space-between',
  },
  titleText: {
    flexWrap: 'wrap',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.medium,
    color: colors.secondary.darker,
  },
  channelText: {
    flexWrap: 'wrap',
    fontSize: metrics.font_size.xxx_small,
    lineHeight: metrics.spacing.small,
    color: colors.secondary.darker,
  },
});

export default styles;
