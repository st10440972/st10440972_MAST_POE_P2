import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { theme } from '../styles/theme';


//Adding the functions to enter and store the dish
export const AddDish = ({ visible, onClose, onAdd }: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');


    //Checking if all of the required fields are added
    const handleAdd = () => {
        if (!name || !description || !price) {
            Alert.alert('Missing piece of information', 'Please fill all the fields before adding dish.');
         return; }
        onAdd({name, description, price});
        setName('')
        setDescription('');
        setPrice('');
    };

    return(
        <Modal visible={visible} transparent animationType='slide'>
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Add New Dish</Text>

                    <TextInput
                    placeholder="Dish Name"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="Description"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                    />
                    <TextInput
                    placeholder="Price"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    style={styles.input}
                    />

                    <View style={styles.buttonRow}>
                        <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAdd} style={styles.addBtn}>
                            <Text style={styles.addText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>        
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cancelBtn: {
        marginRight: 10,
    },
    cancelText: {
        color: '#777',
    },
    addBtn: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    addText: {
        color: '#fff',
        fontWeight: '600',
    },
});