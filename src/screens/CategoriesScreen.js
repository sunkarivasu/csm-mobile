import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Category from '../components/Category';

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerNav}>
                    <MaterialIcon
                        name="arrow-back-ios"
                        size={22}
                        color="#fff"
                        backgroundColor="transparent"
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={styles.headerTitle}>
                    <Text style={styles.headerTitleText}>Categories</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.categoriesContainer}>
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                    <Category style={{ marginBottom: 18 }} />
                </View>
            </View>
        </View>
    );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24AE60',
        display: 'flex',

    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 24,
        paddingVertical: 16,
        position: 'relative',
    },
    body: {
        flex: 1,
        display: 'flex',

        backgroundColor: '#F4F5F7',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    headerNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 24,
        top: 16,
    },
    headerTitle: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitleText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
    categoriesContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        flex: 1,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});