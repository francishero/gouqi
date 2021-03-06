import * as React from 'react'
import {
  View,
  Dimensions
} from 'react-native'

const { height } = Dimensions.get('window')

import {Scene, Router, Actions} from 'react-native-router-flux'
import Home from '../containers/HomeScene'
import Login from '../containers/LoginScene'
import Search from '../containers/SearchScene'
import PlayList from '../containers/PlaylistDetailScene'
import Comment from '../containers/CommentScene'
import Siblings from '../containers/SiblingsContainer'
import DetailModal from '../components/DetailModal'
import CreatePlaylist from '../containers/CreatePlaylistScene'
import DownloadPlaylistScene from '../containers/DownloadPlaylistScene'
import PersonalPlaylistScene from '../containers/PersonalPlaylistScene'
import HistoryScene from '../containers/HistoryPlaylistScene'
import DailyRecommend from '../containers/DailyRecommend'
import AlbumsScene from '../containers/AlbumsScene'
import ArtistsScene from '../containers/ArtistsScene'
import AlbumDetail from '../containers/AlbumDetailScene'
import ArtistsDetail from '../containers/ArtistDetailScene'
import FavoriteArtists from '../containers/FavoriteArtistScene'
import Downloading from '../containers/DownloadingScene'
import DownloadBall from '../components/DownloadBall'
import Player from '../containers/PlayerContainer'
import Lyrics from '../containers/LyricContainer'

const scenes = Actions.create(
  <Scene key='root' sceneStyle={{ height }}>
    <Scene key='home' component={Home} hideNavBar={true} initial={true} sceneStyle={{ minHeight: height, flex: 1}}/>
    <Scene key='login' component={Login} title='登录' direction='vertical'/>
    <Scene key='playlist' component={PlayList}/>
    <Scene key='search' component={Search} direction='vertical' hideNavBar={true} panHandlers={null}/>
    <Scene key='comment' component={Comment} title='评论'/>
    <Scene key='DownloadPlaylistScene' component={DownloadPlaylistScene}/>
    <Scene key='PersonalPlaylistScene' component={PersonalPlaylistScene}/>
    <Scene key='DailyRecommend' component={DailyRecommend}/>
    <Scene key='HistoryScene' component={HistoryScene}/>
    <Scene key='AlbumsScene' component={AlbumsScene}/>
    <Scene key='ArtistsScene' component={ArtistsScene}/>
    <Scene key='AlbumDetail' component={AlbumDetail}/>
    <Scene key='ArtistsDetail' component={ArtistsDetail}/>
    <Scene key='Downloading' component={Downloading}/>
    <Scene key='FavoriteArtists' component={FavoriteArtists}/>
    <Scene key='playlistDetail' component={DetailModal} direction='fade'/>
    <Scene key='createPlaylist' component={CreatePlaylist} direction='vertical'/>
  </Scene>
)

const Routers = () => (
  <View style={{flex: 1}}>
    <Lyrics />
    <DownloadBall />
    <Router scenes={scenes}/>
    <Siblings />
    <Player />
  </View>
)

export default Routers
