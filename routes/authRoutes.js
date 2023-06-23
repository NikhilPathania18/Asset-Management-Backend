import express from 'express'
import { registerUser } from '../controllers/superAdminControllers/registerUser.js';
import verifyEmailController from '../controllers/verifyEmailController.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';
import {companyProfileController} from '../controllers/superAdminControllers/companyProfile.js';
import { loginController } from '../controllers/loginController.js';
import isEmailVerified from '../middlewares/isEmailVerified.js';

const router = express.Router();

router.post('/register-superadmin',registerUser)

router.post('/company-details',isLoggedIn,companyProfileController)

router.post('/verify-email/:id',verifyEmailController)

router.post('/login',isEmailVerified,loginController)

export default router