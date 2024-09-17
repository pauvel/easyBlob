/**
 * 
 * @param {Blob} blob Blob to be converted to b64 string.
 * @returns Base64 string.
 */
export const blobToBase64 = (blob) => {
    return new Promise( (resolve, reject) =>{
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
        };
    });
};