import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

const categoriesIcon = (value) => {
    let name = ''
    switch(value) {
        case 'All':
            name='home'
            break;
        case 'Sports':
            name='qrcode'
            break;
        case 'Music':
            name='music'
            break;
        case 'Clothing':
            name='shopping-bag'
            break;
        case 'Electronics':
            name='headphones'
            break;
        default:
            name=''
            break;
    }
    return name;
}

export default class HorizontalScroll extends Component {

    generateIcon = (categories) => (
        categories ?
        categories.map( item => {
            return(
                <View style={{ marginRight: 15 }} key = {item}>
                    <Icons.Button 
                        name={categoriesIcon(item)}
                        iconStyle={{ marginRight: 10, marginLeft: 3 }}
                        backgroundColor= {
                            this.props.categorySelected !== item ? '#c1c1c1' : '#C0392B'
                        }
                        size={20}
                        borderRadius={200}
                        onPress={() => this.props.updateCategory(item)}
                    >
                        <Text style={{ color: '#fff', marginRight: 5, }}>{item}</Text>
                    </Icons.Button>
                </View>
            );
        })
        : null
    )

  render() {
    return (
      <ScrollView 
        horizontal={true}
        decelerationRate={0}
        snapToInterval={200}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
            {this.generateIcon(this.props.categories)}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        width : "100%"
    }
}