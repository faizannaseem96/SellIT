import React, { Component } from 'react';
import { View, Text, ScrollView, Picker } from 'react-native';
import Input from '../../Login/Input';

const options = ['Sports', 'Music', 'Clothing', 'Electronics'];

export default class AddPost extends Component {

  state = {
    language: '',
    hasErrors: false,
    categoryValue: '',
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.formInputContainer}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.mainTitle}>Sell your things</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Text>Select a Category</Text>
              <Picker
                selectedValue={this.state.categoryValue}
                style={{ height: 50, width: 150 }}
                itemStyle = {styles.pickerTextStyle}
                onValueChange={(itemValue) => this.setState({categoryValue: itemValue})}>
                {
                  options.map((item, i) => (
                    <Picker.Item key={i} label={item} value={item} />
                  ))
                }
              </Picker>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.secondTitle}>
                Describe what you are selling?
              </Text>
          </View>
          <View>
            <Text>Please add the title, be descriptive</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = {
  formInputContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  mainTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    color: '#00ADA9'
  },
  pickerTextStyle: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#474143'
  },
  secondTitle: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
    color: '#00ADA9',
    marginTop: 30,
    marginBottom: 30,
  }
}


