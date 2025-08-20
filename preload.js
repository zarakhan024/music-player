const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('env', { version: process.versions.electron });
