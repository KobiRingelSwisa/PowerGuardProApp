// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // General styles
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#d32f2f',
  },
  // HomeScreen specific styles
  homeContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  homeLogo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },

   // Dashboard styles
   dashboardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
  },
  dashboardCard: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 4, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: '30%', // Adjust width to fit within the row
  },
  dashboardCardTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  dashboardCardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginTop: 5,
  },

  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  metricBox: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.2, // for iOS
    shadowRadius: 2, // for iOS
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  metricLabel: {
    fontSize: 16,
    color: '#666',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    padding: 10,
    backgroundColor: '#d32f2f',
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // LoginScreen specific styles
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 0,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  loginLogo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#d32f2f',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  // ReportsScreen specific styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  reportContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reportText: {
    fontSize: 18,
  },

  // DeviceControlScreen specific styles
  deviceList: {
    marginTop: 20,
  },
  deviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceStatus: {
    fontSize: 14,
    color: 'gray',
  },

  // SettingsScreen specific styles
  settingsSection: {
    marginVertical: 20,
  },
  settingsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingsItemText: {
    fontSize: 16,
    color: '#333',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButton: {
    marginTop: 20,
  },

});

export default styles;