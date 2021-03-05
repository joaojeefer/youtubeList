import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.xx_small,
    backgroundColor: colors.secondary.lighter,
  },
  searchArea: {
    height: metrics.spacing.large,
    maxWidth: 500,
    marginHorizontal: metrics.spacing.medium,
    marginBottom: metrics.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: metrics.border.medium,
    borderBottomColor: colors.secondary.light,
  },
  searchInput: {
    flex: 1,
    marginRight: metrics.spacing.large,
    padding: 0,
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.large,
    color: colors.secondary.darker,
  },
  searchIconArea: {
    position: 'absolute',
    right: 0,
    bottom: 3,
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listArea: {flex: 1},
  scrolledContent: {flexGrow: 1},
  videoItemArea: {
    marginBottom: metrics.spacing.xx_small,
  },
  emptyListArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fetchErrorText: {
    paddingHorizontal: metrics.spacing.medium,
    textAlign: 'center',
    fontSize: metrics.font_size.x_small,
    lineHeight: metrics.spacing.large,
    color: colors.secondary.default,
    flexWrap: 'wrap',
  },
});

export default styles;
