/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

/** 
 * Writable Stream
 * Pada materi sebelumnya kita sudah belajar bagaimana membaca berkas menggunakan teknik stream (readable stream). Tapi apakah Anda tahu bahwa teknik stream juga dapat digunakan untuk menulis berkas? Teknik ini disebut writable stream. 
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mendapatkan direktori saat ini (opsional, untuk memastikan path akurat)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

// 1. Definisikan alamat berkas menggunakan path.resolve
const inputFilePath = path.resolve(__dirname, 'input.txt');
const outputFilePath = path.resolve(__dirname, 'output.txt');

// 2. Buat readable stream dengan highWaterMark 15 karakter
const readableStream = fs.createReadStream(inputFilePath, {
    highWaterMark: 15,
    encoding: 'utf-8' // Agar data yang diterima berupa string, bukan Buffer
});

// 3. Buat writable stream untuk menulis hasil ke output.txt
const writableStream = fs.createWriteStream(outputFilePath);

// 4. Proses membaca dan menulis setiap potongan data (chunk)
readableStream.on('data', (chunk) => {
    try {
        // Menulis chunk yang dibaca ke writable stream ditambah baris baru
        writableStream.write(`${chunk}\n`);
    } catch (error) {
        console.error('Gagal menulis data:', error.message);
    }
});

// 5. Menandai akhir stream
readableStream.on('end', () => {
    writableStream.end();
    console.log('Proses stream selesai. Periksa berkas output.txt Anda!');
});

// Menangani error jika file tidak ditemukan
readableStream.on('error', (error) => {
    console.error('Gagal membaca berkas:', error.message);
});
