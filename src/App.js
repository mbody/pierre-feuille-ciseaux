/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Alert, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Colors} from "./theme/Theme";
import OptionButton from "./components/OptionButton";
import {GameHelper, OPTIONS, RESULT} from "./helpers/GameHelper";
import Score from "./components/Score";


type Props = {};
export default class App extends Component<Props> {

    //------------------------------------------------------------ LIFECYCLE


    //------------------------------------------------------------ RENDERERS

    render() {
        const computerScore = 0;
        const playerScore = 0;
        return (
            <TouchableWithoutFeedback style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={styles.section}>
                        <Text style={[styles.message, {color: Colors.computerColor}]}>Ordinateur</Text>
                        <OptionButton style={{backgroundColor: Colors.computerColor}}></OptionButton>
                    </View>
                    <Score computerScore={computerScore} playerScore={playerScore}/>
                    <View style={styles.section}>
                        <Text style={[styles.message, {color: Colors.playerColor}]}>Que choisissez-vous ?</Text>
                        <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'center'}}>
                            {OPTIONS.map(this.renderOption)}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }


    renderOption = (o, index) => {
        return <OptionButton option={o} key={'option' + index}
                             style={{backgroundColor: Colors.playerColor}}></OptionButton>

    }

    //------------------------------------------------------------ HANDLERS

    //------------------------------------------------------------ PRIVATES

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    section: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    }
});
