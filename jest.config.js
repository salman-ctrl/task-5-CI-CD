module.exports = {
    preset: 'ts-jest',           // Menggunakan preset 'ts-jest' untuk mendukung TypeScript
    testEnvironment: 'node',      // Menentukan environment 'node' untuk pengujian server-side
    roots: ['<rootDir>/tests'],   // Lokasi root untuk file pengujian
    testMatch: ['**/?(*.)+(spec|test).[tj]s'],  // Menentukan pola pencarian file pengujian
    collectCoverage: true,        // Mengaktifkan laporan cakupan (coverage) pengujian
    coverageDirectory: 'coverage',// Direktori output untuk laporan cakupan
    coverageReporters: ['text', 'lcov'],  // Format laporan cakupan
};
