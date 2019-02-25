import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Goal from './Goal';

export default class GoalList extends React.Component {
    render() {
        return (
            <ScrollView style={styles.goalList}>
                <Goal title="goal 1" dailyGoal="3"/>
                <Goal title="goal 2" dailyGoal="6"/>
                <Goal title="goal 3" dailyGoal="9"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
                <Goal title="goal 4" dailyGoal="12"/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    goalList: {
        // borderWidth: 5,
        // borderColor: 'red',
        flex: 1,
        // flexDirection: 'column',
        padding: 8,
    },
});