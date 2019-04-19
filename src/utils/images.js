/**
 * Checks if file is valid image format.
 * @param {string} fileName - The file name
 * @returns {boolean} The result
 */
const isImageFile = fileName => {
  const imageFileExtensions = ["png", "jpg", "jpeg", "gif", "tif"];
  if (fileName.includes(".")) {
    const fileExtension = fileName.split(".").pop();
    if (imageFileExtensions.includes(fileExtension)) {
      return true;
    }
  }
  return false;
};

export default isImageFile;
