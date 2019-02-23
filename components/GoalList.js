import React from 'react';
import { StyleSheet, View } from 'react-native';

import Goal from './Goal';

export default class GoalList extends React.Component {
    render() {
        return (
            <View style={styles.goalList}>
                <Goal title="goal 1"/>
                <Goal title="goal 2"/>
                <Goal title="goal 3"/>
                <Goal title="goal 4"/>
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