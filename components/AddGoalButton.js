import React from 'react';
import { Platform, StyleSheet, View, TouchableHighlight } from 'react-native';

import TabBarIcon from './TabBarIcon';

export default class AddGoalButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.addGoalButtonContainer}>
                <TouchableHighlight style={styles.addGoalButton}>
                    <TabBarIcon
                        name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addGoalButtonContainer: {
        // borderWidth: 5,
        // borderColor: 'green',
        // flex: 2,
        position: 'absolute',
        height: 50,
        // bottom: 35,
        // padding: 5,
        // left: '50%',
        left: 0,
        right: 0,
        // top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'white',
        shadowOpacity: 1000,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: -5 },
        backgroundColor: 'hsla(0, 0%, 100%, 0.95)',
    },
    addGoalButton: {
        borderWidth: 2,
        borderRadius: 100,
        padding: 4,
        paddingHorizontal: 10,
        // justifyContent: 'center',
        // flexDirection: 'row',
    }
})