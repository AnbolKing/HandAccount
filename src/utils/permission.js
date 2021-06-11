import {
  PermissionsAndroid,
} from 'react-native';

export const hasPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'My App Storage Permission',
        message: 'My App needs access to your storage ' +
          'so you can save your photos',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('已获取内存权限');
      return granted;
    } else {
      console.log('获取权限失败');
      return null;
    }
  } catch (err) {
    console.error('Failed to request permission ', err);
    return null;
  }
}