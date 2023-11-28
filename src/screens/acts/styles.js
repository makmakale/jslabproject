import {StyleSheet} from 'react-native';
import {GS} from 'constants';

const styles = StyleSheet.create({
  tableHeading: {
    textAlign: 'right',
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GS.colors.default,
  },
  tableHeaderText: {
    color: GS.colors.white,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  bordered: {
    borderLeftWidth: 0.5,
    borderLeftColor: '#ccc',
    borderRightWidth: 0.5,
    borderRightColor: '#ccc',
  },
  mainCol: {
    width: 200,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#aaa',
  },
  tableRowCell: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  footer: {
    padding: 15,
  },
});

export default styles;
