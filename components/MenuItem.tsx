import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

export const MenuItem = ({ dish, onRemove }: any) => {
    return (
        <View style={styles.card}>
            <View style={styles.info}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>
                <Text style={styles.price}>R {dish.price}</Text>
            </View>

            <TouchableOpacity onPress={onRemove}>
                <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    info: {
        marginBottom: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: theme.colors.textPrimary,
    },
    description: {
        fontSize: 14,
        color: theme.colors.textSecondary,
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        color: theme.colors.primary,
        fontWeight: '600',
    },
    removeText: {
        color: 'red',
        textAlign: 'right',
        fontWeight: '500',
    },
});