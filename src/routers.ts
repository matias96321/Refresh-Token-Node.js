import { Router } from 'express'
import { authenticateUserController } from './UseCases/AuthenticateUser'
import { createUserController } from './UseCases/CreateUser'
import { Auth } from './middlewares/auth'

const router = Router()

router.post('/users',  (request, response) => {
    return createUserController.handler(request, response)
})

router.post('/authenticate', (request, response) => {
    return authenticateUserController.handler(request, response)
})

router.get('/movies/avengers', new Auth().handle, (request, response) => {
    let movies = [
        { id: 1 ,movie: 'Avengers: Endgame', year: 2019 },
        { id: 2, movie: 'Avengers: Age of Ultron', year: 2015 },
        { id: 3, movie: 'Avengers: Infinity War', year: 2018 },
        { id: 4, movie: 'Avengers: The Avengers', year: 2012 },
    ]
    return response.json({movies})
})

export { router }