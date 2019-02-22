import React from 'react';
import { Alert, StyleSheet, View, ScrollView, Text, Button } from 'react-native';
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
                <View style={styles.goals}>
                    <View style={styles.goal}>
                        <View style={styles.title}/>
                        <View style={styles.incrementor} />
                    </View>
                    <View style={styles.goal}>
                        <View style={styles.title}/>
                        <View style={styles.incrementor} />
                    </View>
                    <View style={styles.goal}>
                        <View style={styles.title}/>
                        <View style={styles.incrementor} />
                    </View>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: 'green',
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
    goals: {
        flex: 1,
        flexDirection: 'column',
        padding: 8,
    },
    goal: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        margin: 8,
        height: 50,
    },
    title: {
        flex: 0.7,
        backgroundColor: 'powderblue',
    },
    incrementor: {
        flex: 0.3,
        backgroundColor: 'skyblue',
    }
  });