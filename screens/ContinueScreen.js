import React from 'react';
import { Alert, StyleSheet, View, ScrollView, Text, Button } from 'react-native';

import GoalList from '../components/GoalList';

export default class ContinueScreen extends React.Component {
    static navigationOptions = {
        title: 'Continue',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    Hello world from Continue
                </Text>
                <Button
                    style={styles.button}
                    color="#841584"
                    onPress={() => {
                        Alert.alert('You tapped a button!');
                    }}
                    title="Press me!"
                />
                <GoalList/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    button: {
        backgroundColor: 'white',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});