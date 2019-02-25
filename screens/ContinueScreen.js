import React from 'react';
import { StyleSheet, View } from 'react-native';

import GoalList from '../components/GoalList';
import AddGoalButton from '../components/AddGoalButton';

export default class ContinueScreen extends React.Component {
    static navigationOptions = {
        title: 'Continue',
    };

    render() {
        return (
            <View style={styles.container}>
                <GoalList/>
                <AddGoalButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});