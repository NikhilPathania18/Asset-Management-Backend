import express from 'express'
import { registerUser } from '../controllers/superAdminControllers/registerUser.js';
import isEmailVerified from '../middlewares/isEmailVerified.js';

const router = express.Router();

router.post('/register-superadmin',registerUser)

router.post('/company-details',isEmailVerified)

router.get('/hello',(req,res) => {
    res.send('Nikhil Pahtnaia')
})
export default router