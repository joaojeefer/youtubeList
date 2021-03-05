import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum RootRoutes {
  MAIN = 'Main',
  PLAYER = 'Player',
  WEBVIEW = 'Webview',
}

export type RootStackParamList = {
  Main: undefined;
  Player: {videoID: string; title: string; channel: string};
  Webview: {videoID: string};
};

export type PlayerNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootRoutes.PLAYER
>;

export type PlayerRouteProp = RouteProp<RootStackParamList, RootRoutes.PLAYER>;

export type WebviewNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootRoutes.WEBVIEW
>;

export type WebviewRouteProp = RouteProp<
  RootStackParamList,
  RootRoutes.WEBVIEW
>;
