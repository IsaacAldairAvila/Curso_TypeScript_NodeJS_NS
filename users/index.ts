import {Router} from 'express'

const router = Router()
type Usuario = {
    id: string;
    name: string;
}

router.get('/', (req, res)=> {
    res.send('Hola Mundo! PANAMA')
})
router.post('/', (req, res)=> {
    const { name } = req.body as Usuario
    console.log(name)
    res.send('ok')
})

export default router