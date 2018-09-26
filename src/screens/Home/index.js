import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import HorizontalScroll from './HorizontalScroll';
import { getArticles } from '../../components/Store/actions/article_action';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import BlockItem from './BlockItem';
import { connect } from 'react-redux';

class Home extends Component {
  
  state = {
    articles: [],
    isLoading: true,
    categories : ['All', 'Sports', 'Music', 'Clothing', 'Electronics'],
    categorySelected : 'All'
  }
  
  updateCategory = (value) => {
    this.setState({
      isLoading: true,
      categorySelected: value,
      articles : [],
    })
    this.props.getArticles(value)
  }

  gridTwoColumns (list) {
    let newArticles = [];
    let articles = list
    let count = 1;
    let vessel = {};
    if (articles) {
      _.each(articles, function(element){
          if (count === 1) {
            vessel['blockOne'] = element;
            count++;
          } else {
            vessel['blockTwo'] = element;
            newArticles.push(vessel);

            count = 1;
            vessel = {};
          }
      })
    }
    return newArticles;
  }

  componentWillMount() {
    this.props.getArticles('All')
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEmpty(nextProps.Articles)) {
      const newarticles = this.gridTwoColumns(nextProps.Articles.Articles.list);
      this.setState({
        isLoading: false,
        articles: newarticles
      })
    }
  }

  showLoading ()  {
    if (this.state.isLoading) {
      return (
        <View style={styles.isLoading}>
          <Icon name = "gears" size={30} color="lightgrey" />
          <Text style= {{ color: 'lightgrey'}}> Loading....</Text>
        </View>
      );
    } 
  }

  gotoArticleDetail = (props) => {
    console.log(props);
    this.props.navigation.navigate('ArticleDetail', {
      ArticleData : props      
    })
  }

  showArticles () {
    return this.state.articles.map((item, i) => {
      return (
        <View key={ `${i}`}>
            <BlockItem 
              item={item}
              iteration = {i}
              goto = {this.gotoArticleDetail}
            />
        </View>
      );
    })
  }
  
  render() {
    return (
      <ScrollView>
          <View style={styles.container} >
            <HorizontalScroll categories = {this.state.categories} 
              categorySelected={this.state.categorySelected}
              updateCategory={this.updateCategory}
            />
            { this.showLoading() }
            { this.showArticles() }
          </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    marginTop: 5,
  },
  isLoading : {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  articleContainer : {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}

function mapStateToProps(Articles) {
  return {
    Articles: Articles
  }
}

export default connect(mapStateToProps, { getArticles }) (Home);