import {Dimensions, StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.lighter,
  },
  playerArea: {
    height: 200, // width * 0.6
    width,
    backgroundColor: colors.secondary.darkest,
  },
  overlay: {...StyleSheet.absoluteFillObject},
  controlsArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.spacing.medium,
    backgroundColor: colors.darkestOpacity,
  },
  fullArea: {flex: 1},
  sliderArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.spacing.xxx_small,
    paddingBottom: metrics.spacing.xxx_small,
  },
  sliderTimeText: {
    fontSize: metrics.font_size.xx_small,
    color: colors.secondary.lightest,
  },
  descriptionArea: {flex: 1},
  separator: {
    borderBottomWidth: metrics.border.small,
    borderBottomColor: colors.secondary.light,
  },
  titleText: {
    paddingVertical: metrics.spacing.xx_small,
    paddingHorizontal: metrics.spacing.small,
    textTransform: 'capitalize',
    fontSize: metrics.font_size.small,
    color: colors.secondary.darker,
    flexWrap: 'wrap',
  },
  channelText: {
    paddingVertical: metrics.spacing.xxx_small,
    paddingHorizontal: metrics.spacing.small,
    fontSize: metrics.font_size.xxx_small,
    color: colors.secondary.darker,
    flexWrap: 'wrap',
  },
});

export default styles;
