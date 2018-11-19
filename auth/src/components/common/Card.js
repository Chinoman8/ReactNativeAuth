import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

export {Card};


const styles = StyleSheet.create({
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2, // any corder round edges
      borderColor: '#ddd', // light gray
      borderBottomWidth: 0, // hide bottom border
      shadowColor: '#000', //black
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 2, // corner of shadows round off
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  }
});