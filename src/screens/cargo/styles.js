import {StyleSheet} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  container: {
    ...GS.main.flex,
    ...GS.main.flexCenter,
    padding: 15,
    paddingBottom: 0,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  header: {
    width: '100%',
    ...GS.main.row,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerSubTitle: {
    fontSize: 12,
    color: GS.colors.secondary,
  },
  listItem: {
    backgroundColor: GS.colors.white,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  listItemCol: {
    flex: 1.75,
    borderRightWidth: 0.5,
    borderRightColor: '#ccc',
    padding: 5,
  },
  numberBadge: {
    marginBottom: 2,
    marginRight: 5,
  },
  actions: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  stolenBtn: {
    ...GS.buttons.button,
    ...GS.buttons.buttonDanger,
    paddingVertical: 6,
    marginTop: 10,
  },
  stolenBadgeContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  stolenBadge: {
    position: 'absolute',
    left: 0,
  },
  small: {
    fontSize: 10,
    color: GS.colors.secondary,
  },
  countButtons: {
    backgroundColor: GS.colors.warning,
    width: 30,
    height: 30,
    ...GS.main.flexCenter,
  },
  countLeftButton: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  countRightButton: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  countInput: {
    width: 40,
    height: 30,
    ...GS.fonts.body5,
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#aaa',
    padding: 5,
  },
});

export default styles;
