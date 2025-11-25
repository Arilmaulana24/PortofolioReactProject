# Folder Images - Assets

Taruh gambar di sini yang akan diimport sebagai module di komponen React.

## Cara Menggunakan:

```tsx
// Import gambar di bagian atas file
import profileImage from './assets/images/profile.jpg'
import logo from './assets/images/logo.png'

// Gunakan di JSX
<img src={profileImage} alt="Profile" />
<img src={logo} alt="Logo" />
```

## Keuntungan:
- Gambar akan dioptimasi oleh Vite
- Dapat menggunakan dynamic imports
- TypeScript support
- Lebih baik untuk gambar yang digunakan di komponen

