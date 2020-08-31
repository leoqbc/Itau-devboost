import axios from 'axios';
import md5 from 'md5';

// public key: abbcf3a43be4f419d10405b7b1c90a78

// secret: 891c1cb4b900d38425414485cb53f81520f18680

// hash = md5(timestamp+privateKey+publicKey)

// JWT (aisudasih12312h3iuhi12u3hiu12sad)

// '1598723916abbcf3a43be4f419d10405b7b1c90a78891c1cb4b900d38425414485cb53f81520f18680'
// ts=1598723916
// appkey=abbcf3a43be4f419d10405b7b1c90a78
// hash=7d6247a61787fb95c63b1e2701eae7d1

const timestamp = Math.round((new Date()).getTime() / 1000);
const apikey = 'abbcf3a43be4f419d10405b7b1c90a78';
const secretkey = '891c1cb4b900d38425414485cb53f81520f18680'; // pegamos a info pelo OS

const hash = md5(timestamp + secretkey + apikey);

const urlBase = 'http://gateway.marvel.com/v1/public';

const getPersonagens = async () => {
    const { data: { data: { results } } } = await axios.get(urlBase + `/characters?ts=${timestamp}&apikey=${apikey}&hash=${hash}`);

    const body = document.querySelector('body');

    let fotos = '';

    results.forEach((char) => {
        console.log(char.thumbnail);
        fotos += `<div><img width="250" src="${char.thumbnail.path}.${char.thumbnail.extension}"><div>`;
    });

    body.innerHTML = fotos;
}

getPersonagens();