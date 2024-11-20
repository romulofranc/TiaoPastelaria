import React, { useState, useEffect } from 'react';
import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from "@expo-google-fonts/space-grotesk";
import { View, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Audio } from 'expo-av';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaDesejos from './src/telas/ListaDesejos';
import CameraScreen from './src/telas/Camera';

import ProdutoItem from './src/telas/Produto';
import SobreNos from './src/telas/SobreNos';
import List from './src/telas/ListaProds';
import Perfil from './src/telas/Perfil';

import mock from './src/mocks/produto';
import mock1 from './src/mocks/sobreNos';
import mock2 from './src/mocks/card';
import Texto from "./src/componentes/Texto";

//Cria o menu
function MenuKit() {
  return <ProdutoItem {...mock} />
}
function Sob() {
  return <SobreNos {...mock1} />
}

function ListP() {
  return <List {...mock2} />
}

// function Pasteleiro() {
//   return <Perfil {...mock} />
// }

const Stack = createNativeStackNavigator({
  screens: {
    Perfil: Perfil,
    Camera: CameraScreen,
  },
});

function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Camera" component={CameraScreen} /> 
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Kit") {
          iconName = focused
            ? 'restaurant'
            : 'restaurant-outline';
        } else if (route.name === "Sobre Nós") {
          iconName = focused
            ? 'information-circle'
            : 'information-circle-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'bag-handle'
            : 'bag-handle-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        }
        else if (route.name === "Perfil") {
          iconName = focused
            ? 'person'
            : 'person-outline';
        }
        

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,
      headerShown: false,
    })}>
    <Tab.Screen name="Sobre Nós" component={Sob} />
    <Tab.Screen name="Kit" component={MenuKit} />
    <Tab.Screen name="Produtos" component={ListP} />
    <Tab.Screen name="Lista de Desejos" component={ListaDesejos} />
    {/* <tab.Screen name="Perfil" component={Pasteleiro} />  */}
    <Tab.Screen name="Perfil" component={PerfilStack} /> 
  </Tab.Navigator>
}

function MenuAudio() {

  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/OLHA O PASTEL - Original.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={() => { if (!loading) { setAudioStatus(!audioStatus) } }}>
    <Texto>🎧On/Off🎧</Texto>
  </TouchableOpacity>
}

export default function App() {
  //Carrega a fonte para dentro do projeto
  const [fonteCarregada] = useFonts({
    "SGRegular": SpaceGrotesk_300Light,
    "SGBold": SpaceGrotesk_700Bold
  });

  //Verifica se a fonte já foi carregada
  if (!fonteCarregada) {
    return <View></View>
  }

  return <NavigationContainer>
    <TabsMenu />
    <MenuAudio />
  </NavigationContainer>
}

