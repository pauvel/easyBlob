
# EasyBlob

Convert a blob to base64 string in seconds.

## Authors

- [@Pauvel](https://www.github.com/Pauvel)

  
## Usage/Examples

```javascript
import { blobToBase64 } from './node_modules/easyblob/index.js'

document.getElementById('fileInput').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    
    if (file) {
        try {
            const base64String = await blobToBase64(file);
            document.getElementById('result').innerText = `Base64 String: ${base64String}`;
        } catch (err) {
            console.error('Error converting to base64:', err);
        }
    }
});
```

```javascript
// ESM Node.js
import { blobToBase64 } from 'easyblob';
```

```javascript
// CommonJS
const { blobToBase64 } = require('easyblob');
```
## Installation

Install easyblob with npm

```bash
  npm i easyblob
```
