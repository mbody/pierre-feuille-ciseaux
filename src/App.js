/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Alert, View, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {Theme, Colors} from "./theme/Theme";
import OptionButton from "./components/OptionButton";
import rock from './assets/images/rock.png';
import paper from './assets/images/paper.png';
import scissors from './assets/images/scissors.png';
import {GameHelper, OPTIONS, RESULT} from "./helpers/GameHelper";
import Score from "./components/Score";


type Props = {};
export default class App extends Component<Props> {

    //------------------------------------------------------------ LIFECYCLE


    //------------------------------------------------------------ RENDERERS

    render() {
        return (
            const computerScore=0;
            const playerScore=0;
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
        return  <OptionButton option={o} key={'option'+index} style={{backgroundColor: Colors.computerColor}}></OptionButton>

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
