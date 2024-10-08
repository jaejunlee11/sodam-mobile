import {
    TouchableOpacity,
    Image,
    Text,
    View,
  } from 'react-native';

import styles from '../styles/OnboardStyle'

  const onboardImage = require('../asset/images/onboard1.png');
  const kakaoImage = require('../asset/images/kakako.png');

  function Onboard1({navigation}:any): React.JSX.Element {

  
    return (
      <View style={styles.container}>
        <View style={styles.tokenContainer}>
            <View style={styles.fillToken}/>
            <View style={styles.emptyToken}/>
        </View>
        <View style={styles.bodyContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                부모님의 건강을 위해{'\n'}
                산책을 권유해보세요
                </Text>
                <Text style={styles.sideText}>
                자주 몸을 움직이는 86.1%의 어르신이{'\n'}
                이전보다 더 건강해졌다고 합니다
              </Text>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image source={onboardImage} style={styles.image} resizeMode='cover'></Image>
            <Image source={kakaoImage} style={styles.kakaoImage} ></Image>
        </View>
        <TouchableOpacity onPress={() => navigation.replace('Onboard2')} style={styles.nextButton}/>
      </View>
    );
  }
  
  export default Onboard1;