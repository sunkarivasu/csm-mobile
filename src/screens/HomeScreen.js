import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Category from '../components/Category';
import MaterialIcom from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.msg}>
                    <Text style={styles.welcomeText}><Text style={styles.bold}>W</Text>elcome 🙏</Text>
                    <Text style={styles.welcomeText}><Text style={styles.bold}>G</Text>et your groceries on <Text style={styles.bold}>City Super Market</Text></Text>
                </View>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <MaterialIcom
                            name="person"
                            size={24}
                            color="#24AE60"
                            backgroundColor="transparent"
                        />
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.categories}>
                    <View style={styles.categoryHeader}>
                        <Text style={styles.categoryText}>Shop by category</Text>
                        <Text
                            style={styles.categorySeeAll}
                            onPress={() => navigation.navigate('Categories')}
                        >
                            See all
                        </Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={styles.categoryList}>
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                        <Category />
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

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
    },
    msg: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 3,
    },
    avatar: {
        borderWidth: 1,
        borderColor: '#24AE60',
        borderRadius: 20,
        width: "100%",
        aspectRatio: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400',
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
    categories: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 8
    },
    categoryHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
    categoryText: {
        fontSize: 14,
        fontWeight: '700',
    },
    categorySeeAll: {
        fontSize: 12,
        fontWeight: '400',
        color: '#24AE60',
    },
    categoryList: {
        marginTop: 12,
        marginBottom: 4,
    },
    bold: {
        fontWeight: '600',
    }
});