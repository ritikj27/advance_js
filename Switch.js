// test 1
const extension = '.css';

let contentType;
switch(extension){
    case '.css':
        contentType = 'text/css';
        break;
    case  '.js':
        contentType = 'text/javascript';
        break;
    case   '.json':
        contentType = 'application/json';
        break;
    case '.jpg':
        contentType = 'image/jpeg';
        break;
    case '.png':
        contentType = 'image/png'
        break;
    case '.txt':
        contentType = 'text/plain';
        break;
    default:
        contentType = 'text/html';
        break;
}
console.log(contentType);


const extensionObj = {
    '.css':'text/css',
    '.js':'text/javascript',
    '.json': 'application/json',
    '.jpg':'image/jpeg',
    '.png':'image/png',
    '.txt':'text/plain',
}

let type = '.css'
console.log(extensionObj[type] || 'text/html')

const mp = new Map();

mp.set('.css','text/css');

console.log(mp.get('.css'));
