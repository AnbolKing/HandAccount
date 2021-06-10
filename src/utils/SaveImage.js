/**
 * 保存图片到相册
 * @param ImageUrl  图片地址
 * @returns {*}
 */
 export const DownloadLocalImage = (ImageUrl) => {
  if (!ImageUrl) return null;
  return new Promise((resolve, reject) => {
    try {
      var promise = CameraRoll.saveToCameraRoll(ImageUrl);
      promise.then(function(result) {
          resolve({statusCode:200});
          //alert('保存成功！地址如下：\n' + result);
      }).catch(function(error) {
            console.log('error', error);
          // alert('保存失败！\n' + error);
      });
    } catch (e) {
        reject(new Error(e))
    }
  })
}