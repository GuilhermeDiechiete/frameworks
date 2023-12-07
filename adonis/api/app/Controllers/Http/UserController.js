'use strict'

class UserController {
  async index() {
    return { result: 'Buscar todos os usuarios'}
  }

  async show() {
    return { result: 'Buscou usuario pelo id'}
  }

  async update() {
    return { result: 'Atualizando usuario'}
  }
}

module.exports = UserController
