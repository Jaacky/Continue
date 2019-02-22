import React from 'react';
import { StyleSheet, View } from 'react-native';

import Goal from './Goal';

export default class GoalList extends React.Component {
    render() {
        return (
            <View style={styles.goalList}>
                <Goal/>
                <Goal/>
                <Goal/>
                <Goal/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goalList: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
    },
});