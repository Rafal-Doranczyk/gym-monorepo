import { PALETTE_MODES, CURRENCIES } from '../enums';

export const DEFAULT_PALETTE_MODE = PALETTE_MODES.DARK;
export const DEFAULT_CURRENCY = CURRENCIES.USD;

// API ROUTES

const API_BASE = `/api`;

export const API_ROUTES = {
  HEALTH: `${API_BASE}/health`,
  AUTH: `${API_BASE}/auth`,
  USER: `${API_BASE}/user`,
  NUTRITION_GOALS: `${API_BASE}/nutrition-goals`,
  MEASUREMENTS: `${API_BASE}/measurements`,
  INGREDIENTS: `${API_BASE}/ingredients`,
  MEALS: `${API_BASE}/meals`,
  EATING_PLANS: `${API_BASE}/eating-plans`,
};
