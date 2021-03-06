import React, {useState} from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing';
import Button from './components/Button';

export default function App() {
  let [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("permission to use camera roll is required!")
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });
  }

  let openShareDialogAsync = async () => {
    if(!(await Sharing.isAvailableAsync())) {
      alert("Uh oh, sharing isnt available on your platforms");
      return;
    }
    Sharing.shareAsync(selectedImage.localUri)
  };

  if(selectedImage !== null) {
    return (
    <View style={styles.container}>
      <Image 
        source={{uri: selectedImage.localUri}} 
        style={styles.thumbnail} />
          <Button press={openShareDialogAsync} text={"Share this photo!"} alert={showAlert}/>
    </View>
    );
  }

  let showAlert = (message) => alert(message)

  return (
    <View style={styles.container}>
        <Text 
          style={styles.instructions}>
            To share a photo from your phone with a friend!
        </Text>  
        <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo} />

        <Button press={openImagePickerAsync} text={"choose an image!"} alert={showAlert}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height:159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
