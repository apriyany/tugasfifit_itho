/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import BooksController from '#controllers/books_controller'
import Book from '#models/book'
import DataSiswa from '#models/data_siswa'
import DataSiswasController from '#controllers/data_siswas_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
.group(() => {
  router.get('/', [BooksController, 'index'])
  router.post('/', [BooksController, 'store'])
  router.get('/:id', [BooksController, 'show'])
  router.put('/:id', [BooksController, 'update'])
  router.delete('/:id', [BooksController, 'destroy'])
  
   
})
  .prefix('/books')


router
.group(() => {
  router.get('/', [DataSiswasController, 'index'])
  router.post('/', [DataSiswasController, 'store'])
  router.get('/:id', [DataSiswasController, 'show'])
  router.put('/:id', [DataSiswasController, 'update'])
  router.delete('/:id', [DataSiswasController, 'destroy'])
  
   
})
  .prefix('/data_siswa')
