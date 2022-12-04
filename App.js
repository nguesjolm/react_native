import { StatusBar } from 'expo-status-bar';
import {StyleSheet,View} from 'react-native';

//Importer le composant ImageViewer
import ImageViewer from './components/ImageViewer';
//Importer le composant Button
import Button from './components/Button';

//Images
const ImageFond = require('./assets/image/immover.jpg');

export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.imageContainer}>

       {/* <Image source={ImageFond} style={styles.image}></Image> */}

       <ImageViewer placeholderImageSource={ImageFond}></ImageViewer>

      </View>

      <View>
        <Button theme="primary" label="Choisir une photo"></Button>
        <Button label="Prendre cette photo"></Button>
      </View>

      <StatusBar style="auto" />
    </View>

  );
};

const styles = StyleSheet.create({


  footerContainer:{
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#f4390f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //css container de l'image
  // imageContainer: {
  //   flex: 1,
  //   paddingTop: 58,    
  // },

  //css image
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 18,
  // },


});
