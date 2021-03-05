import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import keys from '../../config/keys';
import {VideoItem} from '../../components';
import {colors} from '../../styles';
import styles from './styles';
import {Video} from '../../models/video';

//youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=react%20native&type=video&key=[YOUR_API_KEY]

const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [fetchErrorMessage, setFetchErrorMessage] = useState('');

  useEffect(() => {
    handleFetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetchVideos = async () => {
    setLoading(true);
    try {
      const {data} = await api.get(
        `/search?part=snippet&maxResults=25&q=${inputSearch}&type=video&key=${keys.API.youtube}`,
      );
      console.log('response: ', data);
      const fetchedViedeos: Video[] = data.items.map((item: any) => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.default.url,
        };
      });
      setVideos(fetchedViedeos);
    } catch (error) {
      console.log('error');
      setVideos([]);
      setFetchErrorMessage('Ocorreu um erro com a consulta.');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor={colors.secondary.light}
          value={inputSearch}
          onChangeText={setInputSearch}
          onSubmitEditing={handleFetchVideos}
          autoCapitalize="none"
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.searchIconArea}
          onPress={handleFetchVideos}>
          <Icon name="search" size={20} color={colors.secondary.light} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color={colors.secondary.light} />
        </View>
      ) : videos.length > 0 ? (
        <View style={styles.listArea}>
          <FlatList
            data={videos}
            contentContainerStyle={styles.scrolledContent}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={styles.videoItemArea}>
                <VideoItem
                  id={item.id}
                  title={item.title}
                  channel={item.channel}
                  thumbnail={item.thumbnail}
                />
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.emptyListArea}>
          <Icon
            name="sentiment-very-dissatisfied"
            size={150}
            color={colors.secondary.light}
          />
          <Text style={styles.fetchErrorText}>{fetchErrorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default Main;
