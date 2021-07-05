import React, { useState } from 'react';
import { Image, Alert, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function ExerciseDescriptionModal({name, imgs, description}) {
  const [modalVisible, setModalVisible] = useState(false);

  if (imgs && imgs.length) {
  var arrayOfImages = imgs.map((img:string, key:number)=> (
    <Image key={key} source={{ uri:'../assets/images/squat.jpeg'}} style={{width: 400, height: 400}} />
    ))
  }

  return (
    <View style={styles.buttonView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{name} description:</Text>
            <Text style={styles.modalText}>{description}</Text>
            <View>
              {arrayOfImages}
            </View>
            

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Back to Workout</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Info</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -25,
    right: -55
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#D5D5D5',
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
