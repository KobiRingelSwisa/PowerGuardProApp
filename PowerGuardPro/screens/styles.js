import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#ff6347', // Tomato (a reddish orange)
  secondary: '#ff4500', // OrangeRed
  white: '#ffffff',
  background: '#f5f5f5',
  textPrimary: '#333333',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
