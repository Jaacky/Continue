import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const wipGoalColor = "powderblue";

export default class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {i: 0};

        this.increment = () => {
            this.setState(previousState => {
                return {i: previousState.i + 1}
            })
        }
    }

    render() {
        return (
            <View style={styles.goal}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        Today: {this.state.i}/{this.props.dailyGoal}
                    </Text>
                </View>
                <TouchableHighlight
                    onPress={this.increment}
                    underlayColor={wipGoalColor}
                    style={styles.incrementor}>
                    <Text>{this.state.i}</Text>
                </TouchableHighlight>
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
        paddingHorizontal: 16,
        backgroundColor: wipGoalColor,

    },
    titleContainer: {
        flex: 0.7,
        justifyContent: 'center',
        
    },
    title: {
        textTransform: 'uppercase',
    },
    subtitle: {
        textTransform: 'uppercase',
        fontSize: 10,
    },
    incrementor: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});