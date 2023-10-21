'use server';

import { getServerSession } from 'next-auth';
import { GetIngredientsResponse, API_ROUTES } from 'gym-shared';

import { authOptions } from '@/context';

const URL = `${process.env.API_URL}${API_ROUTES.INGREDIENTS}`;
const tags = ['ingredients'];

export async function fetchUserIngredients() {
  const session = await getServerSession(authOptions);
  const token = session?.access_token;

  try {
    const res = await fetch(URL, {
      method: 'GET',
      headers: { ...(token ? { Authorization: `Bearer ${token}` } : null) },
      next: { tags },
      cache: 'no-store',
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Something is wrong with the server');
    }

    const data = await res.json();

    return data as GetIngredientsResponse;
  } catch (error) {
    throw new Error('Something is wrong with the server');
  }
}
