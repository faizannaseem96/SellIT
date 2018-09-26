import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ArticleDetail extends Component {

  render() {
    const { navigation } = this.props;
    const ArticleData = navigation.getParam('ArticleData', 'some default value');
    return (
      <ScrollView style={{ flex: 1 }}>
            <View style={{ position: 'relative',}}>
                <Image
                    resizeMode={"cover"}
                    style={styles.articleImage}
                    source = {{uri: 'https://loremflickr.com/320/240/dubai,rio'}}
                />
                <Text style={styles.price}>
                    $ {ArticleData.price}
                </Text>
            </View>
            <View style={styles.articleContainer}>
                <Text style={styles.articleTitle}>
                    {ArticleData.title}
                </Text>
                <Text style={styles.articleDescription}>
                    {ArticleData.description}
                </Text>
            </View>
            <View style={styles.ownerInfo}>
                <Text>Contact the owner of this article to the following mail: </Text>
                <Icon.Button 
                name='envelope-o' 
                color='#00ADA9' 
                backgroundColor='#ffffff' 
                onPress={() => alert('')} >
                    <Text style={{ fontSize: 20 }} >{ArticleData.email}</Text>
                </Icon.Button>
            </View>
      </ScrollView>
    );
  }
}

const styles = {
    articleContainer: {
        padding: 10,
    },
    price: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#ff6444',
        padding: 10,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Roboto-Black',
    },
    articleImage: {
        width: '100%',
        height: 250
    },
    articleTitle: {
        fontSize: 30,
        color: '#474143',
        fontFamily: 'Roboto-Black',
        marginTop: 12,
    }, 
    articleDescription: {
        fontSize: 18,
        marginTop: 12,
        fontFamily: 'Roboto-Regular',
    },
    ownerInfo: {
        marginTop: 30,
        padding: 10,
        borderTopColor: 'lightgrey',
        borderTopWidth: 1,
    }
}
