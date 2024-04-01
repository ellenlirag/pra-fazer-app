import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'

export default function index() {
    return (
        <View style={styles.form}>
            <View>
                <Text></Text>
                <TextInput style={styles.inputEmail} placeholder='Email'>
                </TextInput>
            </View>
            <View>
                <Text></Text>
                <TextInput style={styles.inputSenha} placeholder='Senha'></TextInput>
            </View>
            <TouchableOpacity style={styles.bot}>
                <Text style={styles.botText}>Entrar</Text>
            </TouchableOpacity>
            <View>
                <Text>Criar usuário</Text>
                <TextInput style={styles.inputUsuario}>
                </TextInput>
            </View>

        </View>
    )
}