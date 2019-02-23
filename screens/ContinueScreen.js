import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import GoalList from '../components/GoalList';

export default class ContinueScreen extends React.Component {
    static navigationOptions = {
        title: 'Continue',
    };

    render() {
        return (
            <ScrollView>
                <GoalList/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});