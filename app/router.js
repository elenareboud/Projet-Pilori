import express from 'express';
import mainController from './controllers/mainController.js';
import websiteController from './controllers/websiteController.js';
import authController from './controllers/authController.js';
import userController from './controllers/userController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/mentions-legales', mainController.legals);
router.get('/plan', mainController.plan);
router.get('/contact', mainController.contact);

router.get('/tomates', websiteController.all);
router.get('/tomates/denoncer', websiteController.form);
router.post('/tomates/denoncer', websiteController.formAction);
router.get('/tomates/:slug', websiteController.details);

router.get('/connexion', authController.login);
router.post('/connexion', authController.loginAction);
router.get('/inscription', authController.signup);
router.post('/inscription', authController.signupAction);
router.get('/deconnexion', authController.logout);

router.get('/profil', userController.profil);

router.use(mainController.notFound);


//METTRE TOUTJOURS EN DERNIER (erreur)
export default router;
