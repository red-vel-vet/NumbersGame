import { Text, Pressable, StyleSheet, Platform, View } from 'react-native'

function PrimaryButton({ onPress, title, type }) {
    const buttonStyle = type === 'confirm' ? styles.confirmButton : styles.resetButton;
    return (
        <View style={styles.buttonContainer}>
            <Pressable 
                style={({ pressed }) => [
                    styles.button, 
                    buttonStyle, 
                    { opacity: (Platform.OS === 'ios' && pressed) ? 0.5 : 1 } 
                ]}
                android_ripple={{color: 'lightgrey'}}
                onPress={onPress}
            >
                <Text style={[styles.buttonText, type === 'reset' ? styles.resetButtonText : {}]}>{title}</Text>
            </Pressable>
        </View>
    )
}
  
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        marginVertical: 10,
        overflow: 'hidden',
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.35,
        elevation: 5,
    },
    confirmButton: {
        backgroundColor: '#E6B800',
    },
    resetButton: {
        backgroundColor: '#808080', // Gray color for reset button
    },
    buttonText: {
        color: 'white', // White color for button text
        fontSize: 18,
    },
    resetButtonText: {
        color: 'white', // White color for reset button text
    },
});

export default PrimaryButton