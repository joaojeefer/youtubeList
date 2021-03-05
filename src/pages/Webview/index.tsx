import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Header} from '../../components';
import {WebviewNavigationProp, WebviewRouteProp} from '../../routes/types';
import styles from './styles';

interface WebviewProps {
  navigation: WebviewNavigationProp;
  route: WebviewRouteProp;
}

const Webview: React.FC<WebviewProps> = ({
  navigation: {goBack},
  route: {params},
}: WebviewProps) => {
  const {videoID} = params;

  return (
    <View style={styles.container}>
      <Header onBack={goBack} title="Reprodução" />
      <WebView
        style={styles.fullScreen}
        source={{uri: `https://www.youtube.com/embed/${videoID}`}}
      />
    </View>
  );
};

export default Webview;
