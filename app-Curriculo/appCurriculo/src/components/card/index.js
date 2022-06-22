import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles';
const Card = ({titulo,children})=>{
    return(
        <View style={styles.cardContainer}>
            <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text>{titulo}</Text>
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardContainerText}>{children}</Text>
            </View>
            </View>
        </View>
    )
}

export default Card;