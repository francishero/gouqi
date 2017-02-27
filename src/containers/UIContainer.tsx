import * as React from 'react'
import {
  View
} from 'react-native'
import TrackPopup from '../components/TrackActionSheet'
import CollectPopup from '../components/CollectActionSheet'
import Toast from './toastContainer'

const UI = () => (
  <View>
    <TrackPopup />
    <CollectPopup />
    <Toast />
  </View>
)

export default UI
