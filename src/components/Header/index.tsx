import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles';
import styles from './styles';

interface HeaderProps {
  onBack?: () => void;
  title: string;
}

const Header: React.FC<HeaderProps> = ({onBack, title}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Icon
          style={styles.iconBackArea}
          name="arrow-back"
          size={30}
          color={colors.secondary.darker}
          onPress={onBack}
        />
        <Text style={styles.headerTitleText}>{title}</Text>
      </View>
    </>
  );
};

export default Header;
