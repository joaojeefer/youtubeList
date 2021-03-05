import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Video} from '../../models/video';
import {RootRoutes} from '../../routes/types';
import styles from './styles';

const VideoItem: React.FC<Video> = ({id, title, channel, thumbnail}: Video) => {
  const navigation = useNavigation();

  const handleOpenVideo = useCallback(
    // () => navigation.navigate(RootRoutes.PLAYER, {videoID: id, title, channel}),
    () => navigation.navigate(RootRoutes.WEBVIEW, {videoID: id}),
    [id, navigation],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpenVideo}>
      <Image style={styles.image} source={{uri: thumbnail}} />
      <View style={styles.descriptionArea}>
        <Text style={styles.titleText} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.channelText} numberOfLines={1}>
          {channel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VideoItem;
