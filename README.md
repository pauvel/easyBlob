
# EasyBlob

Convert a blob to base64 string in seconds.

## Authors

- [@Pauvel](https://www.github.com/Pauvel)

  
## Usage/Examples

```javascript
import easyBlob from './easyblob/index.js';

const fileInput = document.querySelector('#fileInput');
const btnTob64 = document.querySelector('#btnTob64');



btnTob64.addEventListener('click', async (e) => {
    const myBlob = fileInput.files[0];
    const myB64 = await easyBlob.blobToBase64(myBlob);
    console.log(myB64);
});
```