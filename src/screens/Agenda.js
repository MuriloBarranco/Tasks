import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';

import Task from '../components/task';

export default class Agenda extends Component {
  state = {
    task: [
      {
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
        {
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
        {
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },{
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
        {
        id: Math.random(),
        desc: 'Comprar o curso React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
     
    ],
  };

  toggleTask = id => {
      const tasks = this.state.task.map(task => {
          if(task.id === id) {
            task = {...task}
            task.doneAt = task.doneAt ? null : new Date()
        }
        return task
      })
      this.setState({ tasks }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>
              {moment().locale('pt-br').format('ddd, D [de] MMMM')}
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.taksContainer}>
          <FlatList
            data={this.state.task}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => 
            <Task {...item} toggleTask={this.toggleTask} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  taksContainer: {
    flex: 7,
  },
});
