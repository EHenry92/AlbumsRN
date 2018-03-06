import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {albums:[]};
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {this.setState({albums: response.data});})
    .catch(err => err);
  }
  renderAlbums () {
    return this.state.albums.map(el => <AlbumDetail key={el.title} album={el} />);
  }
  render () {
  return (
    <ScrollView>
      {this.renderAlbums()}
    </ScrollView>
    );}
}
export default AlbumList;
