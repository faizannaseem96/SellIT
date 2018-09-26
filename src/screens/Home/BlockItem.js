import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

export default class BlockItem extends Component {

    showArticles(item) {
        return(
            <View style={styles.blockRow}>
                <TouchableOpacity style={{flex: 2 }} onPress={() => {
                    this.props.goto(item.blockOne)
                }}>
                    <View style={[ styles.blogStyle, styles.leftBlog ]}>
                        {this.itemImage()}
                        {this.itemText(item.blockOne)}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 2 }} onPress={() => {
                    this.props.goto(item.blockTwo)
                }}>
                    <View style={[ styles.blogStyle, styles.rightBlog ]} >
                        {this.itemImage()}
                        {this.itemText(item.blockTwo)}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    itemImage() {
        return (
            <View>
                <Image 
                    resizeMode={"cover"}
                    style={styles.itemImage}
                    source = {{uri: 'https://loremflickr.com/320/240/brazil,rio'}}
                />
             </View>
        )
    }

    itemText(item) {
         return (
             <View style={styles.itemTextContainer}>
                <Text style={styles.itemTextTitle}>
                    {item.title}
                </Text>
                <Text style={styles.itemTextPrice}>
                    $ {item.price}
                </Text>
             </View>
         )
    }

  render() {
    return (
      <View>
        {this.showArticles(this.props.item)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    blockRow : {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'space-between',
    },
    itemImage: {
        width: "100%",
        height: 200
    },
    itemTextContainer: {
        padding: 10,
        borderLeftWidth: 4,
        borderLeftColor: '#FF6444',
    },
    itemTextTitle: {
        fontFamily: 'Roboto-Black',
        color: '#4c4c4c',
        marginBottom: 5,
    },
    itemTextPrice: {
        fontFamily: 'Roboto-Black',
        color: '#00ada9',
        marginBottom: 5
    },
    blogStyle: {
        backgroundColor: '#f1f1f1',
    },
    leftBlog: {
        marginRight: 2.5,
    },
    rightBlog: {
        marginLeft: 2.5,
    }
});
