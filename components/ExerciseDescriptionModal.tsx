import React, { useState } from 'react';
import { Image, Alert, ScrollView, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import layout from '../constants/Layout'


export default function ExerciseDescriptionModal({name, imgs, description}) {
  const [modalVisible, setModalVisible] = useState(false);

  if (imgs && imgs.length) {
  var arrayOfImages = imgs.map((img:string, key:number)=> (
    <Image key={key} source={{ uri:`${img}`}} style={{width: 300, height: 300, ...styles.imageStyle}} />
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
            <Text style={styles.descriptionText}>{description}</Text>
            <ScrollView  horizontal style={styles.scrollView}>
              {arrayOfImages}
            </ScrollView>
            

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#00FF66' }}
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
  imageStyle: {
    marginBottom: 10,
    marginRight: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: layout.window.width,
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
  scrollView: {
    maxHeight: 400,
    marginBottom: 10,
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
    marginBottom: 0,
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'left',
    lineHeight: 26,
    marginBottom: 16
  },
  modalText: {
    fontSize: 24,
    textTransform: 'capitalize',
    marginBottom: 12,
    textAlign: 'center',
  },
});
