import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Head = () => {
    return (
        <view style={styles.container}>
            <text style={styles.text}>Prática Layout Flexbox</text>
        </view>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
    }
  });

export default Head;