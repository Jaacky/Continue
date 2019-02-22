import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Goal extends React.Component {
    render() {
        return (
            <View style={styles.goal}>
                <View style={styles.title}/>
                <View style={styles.incrementor} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goal: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        margin: 8,
        height: 50,
    },
    title: {
        flex: 0.7,
        backgroundColor: 'powderblue',
    },
    incrementor: {
        flex: 0.3,
        backgroundColor: 'skyblue',
    }
});