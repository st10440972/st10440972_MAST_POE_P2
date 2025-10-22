import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '../styles/theme';

export const Header = ({ count }: any) => {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View>
                <Text style={styles.title}>Chef Christoffel's Kitchen</Text>
                <Text style={styles.subtitle}>{count} Dishes Available</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 12,
        borderRadius: 30,
    },
    title: {
        color: theme.colors.textSecondary,
        fontSize: 14,
    },
    subtitle: {
        color: theme.colors.textSecondary,
        fontSize: 14,
    },
});