/* eslint-disable no-return-assign */
import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import {PlayerNavigationProp, PlayerRouteProp} from '../../routes/types';
import styles from './styles';
import {colors} from '../../styles';
import {formatTime} from '../../utils/functions/formatting';
import {Header} from '../../components';

interface PlayerProps {
  navigation: PlayerNavigationProp;
  route: PlayerRouteProp;
}

const Player: React.FC<PlayerProps> = ({
  navigation: {goBack},
  route: {params},
}: PlayerProps) => {
  const {videoID, title, channel} = params;

  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurationTime] = useState(0.1);
  const [paused, setPaused] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const videoRef = useRef<Video | null>();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (overlay) {
      timer = setTimeout(() => setOverlay(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [overlay]);

  const onLoadVideo = ({duration}: OnLoadData) => setDurationTime(duration);

  const onProgressVideo = ({currentTime}: OnProgressData) =>
    setCurrentTime(currentTime);

  const onFastBackward = () => {
    videoRef.current?.seek(currentTime - 10);
    const timer = setTimeout(() => setOverlay(false), 3000);
    clearTimeout(timer);
  };

  const onFastForward = () => {
    videoRef.current?.seek(currentTime + 10);
    const timer = setTimeout(() => setOverlay(false), 3000);
    clearTimeout(timer);
  };

  const onSlide = (slide: number) => {
    videoRef.current?.seek(slide * durationTime);
    const timer = setTimeout(() => setOverlay(false), 3000);
    clearTimeout(timer);
  };

  return (
    <View style={styles.container}>
      <Header onBack={goBack} title="Reprodução" />
      <View style={styles.playerArea}>
        <Video
          ref={(ref) => (videoRef.current = ref)}
          style={styles.overlay}
          source={'video_qualquer.mp4'}
          paused={paused}
          onLoad={onLoadVideo}
          onProgress={onProgressVideo}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          {overlay ? (
            <View style={styles.controlsArea}>
              <Icon
                name="fast-rewind"
                size={30}
                color={colors.secondary.lightest}
                onPress={onFastBackward}
              />
              <Icon
                name={paused ? 'play-arrow' : 'pause'}
                size={50}
                color={colors.secondary.lightest}
                onPress={() => setPaused((oldValue) => !oldValue)}
              />
              <Icon
                name="fast-forward"
                size={30}
                color={colors.secondary.lightest}
                onPress={onFastForward}
              />
              <View style={styles.sliderArea}>
                <Text style={styles.sliderTimeText}>
                  {formatTime(currentTime)}
                </Text>
                <Slider
                  value={currentTime / durationTime}
                  onValueChange={onSlide}
                  maximumTrackTintColor={colors.secondary.lightest}
                  minimumTrackTintColor={colors.secondary.lightest}
                  thumbTintColor={colors.secondary.lightest}
                  style={styles.fullArea}
                />
                <Text style={styles.sliderTimeText}>
                  {formatTime(durationTime)}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableWithoutFeedback onPress={() => setOverlay(true)}>
              <View style={styles.fullArea} />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      <View style={styles.descriptionArea}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.separator} />
        <Text style={styles.channelText}>{channel}</Text>
        <View style={styles.separator} />
      </View>
    </View>
  );
};

export default Player;
