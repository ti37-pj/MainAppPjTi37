import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Modal, View, FlatList  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const MyDropdown= ({label, data, onSelect}) => {
    const [visible, setVisible] = useState(false);
    const DropdownButton = useRef();
    const [dropdownTop, setDropdownTop] = useState(0);
    const [selected, setSelected] = useState(undefined);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
            <Text>{item.label}</Text>
        </TouchableOpacity>
    );

    function onItemPress (item) {
        setSelected(item.label);
        onSelect(item.label);
        setVisible(false);
    };

    const toggleDropdown = () => {
        visible ? setVisible(false) : openDropdown();
    };
    
    const openDropdown = () => {
        DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
            setDropdownTop(py + h);
        });
        setVisible(true);
    };

    const renderDropdown = () => {
        return (
          <Modal visible={visible} transparent animationType="none">
            <TouchableOpacity
                style={styles.overlay}
                onPress={() => setVisible(false)}
            >
              <View style={[styles.dropdown, { top: dropdownTop }]}>
                <FlatList
                    style={styles.overlay}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        );
      };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={toggleDropdown}
            ref={DropdownButton}
        >
            {renderDropdown()}
            <Text style={styles.buttonText}>{selected?selected:label}</Text>
            <Icon type='font-awesome' name='chevron-down'/> 
        </TouchableOpacity>
    );
    }

    const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 56,
        textAlign: "center",
        fontSize: 16,
        placeholderTextColor:'#99999',
        marginTop:0,
        marginBottom:16,
        marginLeft:"auto",
        marginRight:"auto",
        borderWidth: 1,
        borderColor: "#CCC",
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        width:'80%',
        minWidth:80,    
        elevation: 10,
        backgroundColor:"#1a2426",
        color:"#fff"
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
        color:"#fff"
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding:5,
        width: '80%',
        shadowColor: '#000000',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,
        marginLeft:"auto",
        marginRight:"auto",
    },
    overlay:{
        padding:15,
    }
});

export default MyDropdown;