import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const wipGoalColor = "powderblue";

export default class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 };

        this.increment = () => {
            this.setState(previousState => {
                return {i: previousState.i + 1}
            })
        }
    }

    getProgress() {
        let progress = this.state.i / this.props.dailyGoal
        if (progress > 1) progress = 1
        return progress * 100
    }

    render() {
        progressPercent = 100 - this.getProgress() + "%"
        return (
            <View style={styles.goal}>
                <View style={{right: progressPercent,...styles.progress}}/>
                <View style={styles.detailsContainer}>
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
                        underlayColor='transparent'
                        style={styles.incrementor}>
                        <Text style={styles.count}>{this.state.i}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    goal: {
        // flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        margin: 8,
        height: 50,
        backgroundColor: wipGoalColor,

    },
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "steelblue",
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 16,
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
    },
    count: {
        fontSize: 18,
    }
});