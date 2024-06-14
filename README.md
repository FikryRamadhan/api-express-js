
# Test Backend With Express Js
Project ini di buat dengan framework js yaitu express js.project ini bertujuan dalam mengelola data buku dan member dengan beberapa validasi








## Api

- Book
- Member
- Boking-book
- Return-book


#### Book
- Menambahkan data book
- Mengecek stock book

#### Member
- Menambahkan data member
- Melihat data member dan jumlah buku yang di pinjam

#### Boking-book
- Menambahkan Data boking-book dengan validasi:
      - data wajib di isi
      - member tidak memiliki sanksi karna telat 
         pengembalian 
       - maksimal 2 buku per member
       - jika sudah habis masa sanksi ketika user 
         meminjam buku maka sistem otomatis 
         mengupdate data member menjadi tidak ada 
         sanksi - mengurangi jumlah stock buku di 
         tabel buku
       - dll
- Melihat semua data boking-book

#### Return-book
- Melihat semua logs pengembalian buku
- Menambahkan data dengan beberapa validasi:
       -buku yang di pinjam memang ada di tabel 
        boking - jika pengembalian buku itu lebih dari 
        masa peminjaman maka secara otomatis 
        sistem mengupdate data members menjadi 
        memiliki sanksi - jika ada buku nya maka 
        otomatis sistem akan menambahkan stock 
         pada table book - dll
      






## Run Locally

Clone the project

```bash
  git clone https://github.com/FikryRamadhan/test-backend.git
```

Go to the project directory

```bash
  cd  test-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Fikry Ramadhan

- [fikryramadhan572@gmail.com]
- (https://fikryramadhan.vercel.app)


