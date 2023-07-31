import { healthRoutes } from './health';
import { authRoutes } from './auth';

const publicRoutes = [healthRoutes, authRoutes];

export default publicRoutes;
