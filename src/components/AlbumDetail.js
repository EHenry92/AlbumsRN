import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album}) => {
  const {thumbnail_image, title, artist, image, url} = album;
  const {artistImageStyle, headerContentStyle, imageContainerStyle, albumTitleStyle, albumImageStyle} = styles;
  return (
  <Card>
    <CardSection>
      <View style={imageContainerStyle}>
        <Image style={artistImageStyle} source ={{uri: thumbnail_image}} />
      </View>
      <View style ={headerContentStyle}>
      <Text style = {albumTitleStyle}>{title}</Text>
      <Text>{artist}</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={albumImageStyle} source={{uri: image}} />
    </CardSection>
    <CardSection>
        <Button handlePress = {() => Linking.openURL(url)}>
          <Text>Buy Now</Text>
        </Button>
    </CardSection>
  </Card>);

};
export default AlbumDetail;

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  artistImageStyle: {
    height: 50,
    width: 50,
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumTitleStyle: {
    fontSize: 18
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
