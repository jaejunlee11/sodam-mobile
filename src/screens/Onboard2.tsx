import {
    TouchableOpacity,
    Image,
    Text,
    View,
  } from 'react-native';

import styles from '../styles/OnboardStyle'
  const onboardImage = require('../asset/images/onboard1.png');
  const kakaoImage = require('../asset/images/kakako.png');

  function Onboard2({navigation}:any): React.JSX.Element {
  
    return (
      <View style={styles.container}>
        <View style={styles.tokenContainer}>
            <View style={styles.emptyToken}/>
            <View style={styles.fillToken}/>
        </View>
        <View style={styles.bodyContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>
                언제나 이동은{'\n'}
                소담소담과 함께
                </Text>
                <Text style={styles.sideText}>
                어르신의 안전한 보행을 책임지는 서비스.{'\n'}
                지금 바로 시작해 보세요!
                </Text>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image source={onboardImage} style={styles.image} resizeMode='cover'></Image>
            <Image source={kakaoImage} style={styles.kakaoImage} ></Image>
        </View>
        <TouchableOpacity onPress={() => navigation.replace('Onboard1')} style={styles.nextButton}/>
      </View>
    );
  }
  
  export default Onboard2;