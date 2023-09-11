import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.klf.app',
  appName: 'klf',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
