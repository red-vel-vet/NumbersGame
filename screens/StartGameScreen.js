import { useState } from 'react';
import { FlatList, View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [value, setValue] = useState('');
    const [guesses, setGuesses] = useState([]);

    function handleConfirm() {
        if (value === '') {
            Alert.alert('Invalid Number', 'Number must be between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: () => setValue('') }]);
            return;
        }
        setGuesses([...guesses, value]);
        setValue('');
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.centerText}>Select a Number</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={2}
                    value={value} 
                    onChangeText={text => setValue(text)}
                    keyboardType="number-pad"
                />
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton title="Reset" type="reset" onPress={() => {}} />
                </View>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton title="Confirm" type="confirm" onPress={handleConfirm} />
                </View>
            </View>
            <FlatList 
                data={guesses}
                keyExtractor={(item, index) => 'key_' + index}
                renderItem={({ item, index }) => (
                    <View style={styles.listItem}>
                        <Text>
                            <Text style={{fontWeight: 'bold'}}>{`Guess ${index + 1}: `}</Text>
                            {item}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 32,
        marginVertical: 10,
        color: 'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor: '#ffffff93',
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.35,
        elevation: 5,
    },
    centerText: {
        textAlign: 'center',
        fontSize: 18,
    },
    input: {
        width: 50,
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    buttonWrapper: {
        flex: 1,
        marginHorizontal: 10,
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: 300,
        alignItems: 'center',
    },
});

export default StartGameScreen;