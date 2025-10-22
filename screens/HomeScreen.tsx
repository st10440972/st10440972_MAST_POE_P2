import React, {useState} from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { MenuItem } from '../components/MenuItem';
import { Header } from '../components/Header';
import { AddDish } from '../components/AddDish';
import { sampleMenu } from '../data/sampleMenu';
import { theme } from '../styles/theme';


//Homescreen components
export default function HomeScreen() {
    const [menu, setMenu] = useState(sampleMenu); //Added sample dishes for testing puposes
    const [modalVisible, setModalVisible] = useState(false);

    const addDish = (dish: any) => {
        setMenu([...menu, {id: Date.now().toString(), ...dish}]);
        setModalVisible(false);
    };

    const removeDish = (id: string) => {
        setMenu(menu.filter((dish) => dish.id !== id));
    };

    return (
        <View style={styles.container}>
            <Header count={menu.length} />

            <FlatList
            data={menu}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <MenuItem dish={item} onRemove={() => removeDish(item.id)} />
            )}
            contentContainerStyle={{paddingBottom: 120}}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add Dish</Text>
            </TouchableOpacity>

            <AddDish
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onAdd={addDish}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});