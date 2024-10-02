import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Habilidades: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: HomeScreenProps) {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Meu Portfólio</Text>

        {/* Imagem centralizada */}
        <View style={styles.imageContainer}>
          <Image 
            source={require('./assets/minha_foto2.jpeg')} // Substitua pelo caminho correto da imagem
            style={styles.image} 
          />
        </View>

        {/* Texto "Sobre Mim" abaixo da imagem */}
        <View style={styles.section}>
          <Text style={styles.header}>Sobre Mim</Text>
          <Text style={styles.text}>
          Olá, sou João Gabriel Reis Giannattasio, com 21 anos de idade. Sou um estudante dedicado, cursando duas faculdades simultaneamente: Análise e Desenvolvimento de Sistemas (ADS) na Positivo e Engenharia de Software na Unifil. Além disso, possuo um curso técnico em ADS pelo Instituto Senai, onde adquiri uma base sólida de conhecimentos na área.
          </Text>
        </View>

        {/* Botões */}
        <View style={styles.section}>
          <Text style={styles.header}>Minhas Habilidades</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Habilidades')}>
            <Text style={styles.buttonText}>Ver Habilidades</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Contato</Text>
          <TouchableOpacity style={styles.button} onPress={() => openLink('https://mail.google.com')}>
            <Image source={require('./assets/email-icon.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openLink('https://linkedin.com')}>
            <Image source={require('./assets/linkedin-icon.png')} style={styles.icon} />
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openLink('https://github.com')}>
            <Image source={require('./assets/github-icon.png')} style={styles.icon} />
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      <Text style={styles.text2}>- Linguagens de Programação: Java, JavaScript</Text>
      <Text style={styles.text2}>- Banco de Dados: SQL, MySQL</Text>
      <Text style={styles.text2}>- Português (nativo), Inglês (Intermediário) e Italiano (Avançado)</Text>

      <Text style={styles.title}>Instituições de Ensino que frequentei</Text>
      
      <View style={styles.instituicao}>
        <Text style={styles.text2}>- Senai: Curso técnico de ADS</Text>
        <Image source={require('./assets/logo-senai.png')} style={styles.instituicaoLogo} />
      </View>
      
      <View style={styles.instituicao}>
        <Text style={styles.text2}>- Positivo: Cursando ADS</Text>
        <Image source={require('./assets/logo-positivo.png')} style={styles.instituicaoLogo2} />
      </View>
      
      <View style={styles.instituicao}>
        <Text style={styles.text2}>- Unifil: Cursando Engenharia de Software</Text>
        <Image source={require('./assets/logo-unifil.png')} style={styles.instituicaoLogo} />
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Habilidades" component={SkillsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  image: {
    width: 220,  
    height: 270,
    borderRadius: 150,  
  },
  section: {
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',  
  },
  text2: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',  
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center', 
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10, 
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  instituicao: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 70,
  },
  instituicaoLogo: {
    width: 290, 
    height: 80, 
    marginTop: 10, 
  },
  instituicaoLogo2: {
    width: 250, 
    height: 125, 
    marginTop: 10, 
  },
});
