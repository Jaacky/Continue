import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

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
                </View>
                <TouchableHighlight
                    onPress={this.increment}
                    underlayColor="white"
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
    },
    titleContainer: {
        flex: 0.7,
        justifyContent: 'center',
        backgroundColor: 'powderblue',
    },
    title: {
        textTransform: 'uppercase',
    },
    incrementor: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
    }
});