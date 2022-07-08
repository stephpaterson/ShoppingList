import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

const AddItem =({addItem})=>{
    const [text, setText] = useState('')

    const onChange = (textValue) => setText(textValue)
    const inputText = useRef('');

    const onSubmit = ()=> {
        addItem(text)
        inputText.current.clear();
    }

    return(
        <View>
            <TextInput style={styles.input} placeholder="Add item..." onChangeText={onChange} clearButtonMode='always' ref={inputText} />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.text}>
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize: 20,
    },
    btn : {
        backgroundColor: '#c2bad8',
        height: 50,
        padding: 9,
        margin: 5,
    },
    text:{
        color: '#ffff',
        fontSize: 23,
        textAlign: 'center',
      }
})

export default AddItem;