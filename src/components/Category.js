import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import vegetables from '../assets/icons/vegetables.png';

const Category = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.logoContainer}>
                <Image style={styles.categoryLogo} source={vegetables} />
            </View>
            <Text style={styles.categoryText}>Vegetables</Text>
        </View>
    );
};

export default Category;

Category.defaultProps = {
    style: {},
};

const styles = StyleSheet.create({
    container: {
        width: 95,
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flex: 1,
        backgroundColor: '#E9F7EE',
        aspectRatio: 1,
        borderRadius: 12,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryLogo: {
        width: "75%",
        height: "75%",
    },
    categoryText: {
        textAlign: 'center',
        marginTop: 4,
        fontSize: 11,
        fontWeight: '500',
    }
});