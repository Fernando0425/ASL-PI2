import { Product } from '../models/product.model';
import { ProductsService} from '../services/products.service'

export const products_original: Product[] = [
    {
        product_id: 1,
        product_name: "Nescafe FER 225g",
        product_price: 25,
        product_stock: 13,
        product_img: "https://www.chedraui.com.mx/medias/7501058617705-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MjUxNTR8aW1hZ2UvanBlZ3xoY2UvaDA3LzExMDc3NDg5MzYwOTI2LmpwZ3w1M2Q2YzBhZjljNjE4ODhiZmQ4MWY4YjUwMjc5N2VjNjc3NTlkMGNlM2Q0ZDY3MDdhNjNjMDVkMTUzMDMyNjY4"
    },
    {
        product_id: 2,
        product_name: "Coca cola 1L",
        product_price: 22,
        product_stock: 10,
        product_img: "https://m.media-amazon.com/images/I/5156FefjlqL._SL1000_.jpg"
    },
    {
        product_id: 3,
        product_name: "Doritos Nachos",
        product_price: 15,
        product_stock: 5,
        product_img: "https://www.chedraui.com.mx/medias/7501011131064-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mjg5MjJ8aW1hZ2UvanBlZ3xoOGQvaGM4LzExMDI3NTAwNDAwNjcwLmpwZ3w4ZDU2YmZlNDBiN2UyMDBkYjMwOWM4NmY4MDRlYjBmYmIzOGUwODFmODRiNmZmY2I2NGJlYzU2ODlkMDc4ZTUw"
    },
    {
        product_id: 4,
        product_name: "Principe Marinela",
        product_price: 11,
        product_stock: 20,
        product_img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/917052_S_1280_F.jpg"
    },
    {
        product_id: 5,
        product_name: "Lucas Bombazo",
        product_price: 10,
        product_stock: 15,
        product_img: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00725181389019/9034448810b4cfba72845cf4e3cfc481_large.png&width=256&type=webp&quality=80"
    },
    {
        product_id: 6,
        product_name: "Lucas Muecas",
        product_price: 12,
        product_stock: 4,
        product_img: "https://www.superama.com.mx/Content/images/products/img_large/0750222681502L1.jpg"
    },
    {
        product_id: 7,
        product_name: "Chicle Bubaloo",
        product_price: 2,
        product_stock: 30,
        product_img: "https://http2.mlstatic.com/D_NQ_NP_642884-MLM42309636322_062020-O.jpg"
    },
    {
        product_id: 8,
        product_name: "Ruffle de queso",
        product_price: 16,
        product_stock: 3,
        product_img: "https://www.chedraui.com.mx/medias/7501011115675-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MzM2MTl8aW1hZ2UvanBlZ3xoZWMvaGE4LzExMDg2NjA4MTA1NTAyLmpwZ3wxMTIwNDU4M2FmYjI2YmI2NThlNTEwZmY1ZDgxMjIxZDI2NDNlNzJlMzJlNmYwNTFhNjU5ZDc5YjFmMTE2MTJj"
    },
    {
        product_id: 9,
        product_name: "Sprite 600 ml",
        product_price: 15,
        product_stock: 12,
        product_img: "https://www.sixtogo.com.mx/media/catalog/product/1/2/12959_2.jpg"
    },
    {
        product_id: 10,
        product_name: "Leche LALA 1L",
        product_price: 21,
        product_stock: 11,
        product_img: "https://www.chedraui.com.mx/medias/7501020526066-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8ODc5NjF8aW1hZ2UvanBlZ3xoYTYvaDM4LzEwOTcxMzQxNjg0NzY2LmpwZ3xhY2YyZWNjZGM1ZDU1NDkwODI2ZWVlZGIyMjJmNWJiYTc4YmNkZTk1ZDZiZmU5YjUzOTYzMmE3ZDNiZTVkMDZj"
    },
    {
        product_id: 11,
        product_name: "Sabritas Adobadas",
        product_price: 15,
        product_stock: 24,
        product_img: "https://www.chedraui.com.mx/medias/7501011133921-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8OTc1NjV8aW1hZ2UvanBlZ3xoYTkvaDU3LzEwODIzNzQ0NDg3NDU0LmpwZ3wzOTZkOGViZDk3Mzk5NDU5MTU4NTVjMTkxN2MyMzc3ZTU0MzlmNWEzYjczOWQ4Y2Y1NGExZWVhMzRjYmQwN2I5"
    },
    {
        product_id: 12,
        product_name: "Cheetos Poff",
        product_price: 13,
        product_stock: 17,
        product_img: "https://m.media-amazon.com/images/I/81q5LcKsd5L._SL1500_.jpg"
    },
    {
        product_id: 13,
        product_name: "Chokis Clasica",
        product_price: 14,
        product_stock: 7,
        product_img: "https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/2/6/261897_890191689.jpg"
    },
    {
        product_id: 14,
        product_name: "Charrones",
        product_price: 22,
        product_stock: 10,
        product_img: "https://s.cornershopapp.com/product-images/203668.jpg?versionId=NbRdi0YdPNiNkw3ePkM6H09Kz8bjiW.t"
    },
];