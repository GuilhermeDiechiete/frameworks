'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { status: 'Projeto utilizando adonis' }
})
// Route.get('/users', 'UserController.index') // mostrar todos os resultados (usuarios)
// Route.get('/users/:id', 'UserController.show') // mostrar apenas um resultado
// Route.post('/users', 'UserController.store') // criar um usuario
// Route.patch('/users/:id', 'UserController.update') // atualizar o usuario
// Route.delete('/users/:id', 'UserController.destroy') // deletar um usuario


/*
  resource -> cria sete rotas padroes, o apiOnly define apenas rotas do backend
*/
Route.resource('users', 'UserController').apiOnly()
Route.resource('client', 'ClientController').apiOnly()
Route.resource('exercises', 'ExerciseController').apiOnly()
Route.resource('training', 'TrainingController').apiOnly()
