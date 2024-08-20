import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tokenContainer: {
    width: '6%',
    height: '20%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fillToken: {
    width:10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#27C384'
  },
  emptyToken: {
    width:10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DFDFF1'
  },
  bodyContainer: {
    width: '80%',
    height: '30%'
  },
  textContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
  mainText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sideText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    marginTop:12,
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

export default styles;
