// TODO 1: Buat atau impor variabel EventEmitter dari core module events
const { EventEmitter } = require('events');

const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}

// TODO 2: Buat variabel myEmitter yang merupakan instance dari EventEmitter
const myEmitter = new EventEmitter();

// TODO 3: Tentukan birthdayEventListener sebagai aksi ketika event 'birthday' dibangkitkan
myEmitter.on('birthday', birthdayEventListener);

// TODO 4: Bangkitkan event 'birthday' pada myEmitter dengan method emit()
// Beri nilai argumen listener dengan namamu (misal: 'Aura')
myEmitter.emit('birthday', 'Aura');

