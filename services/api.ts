
import { TranslationSchema } from '../types';

const API_BASE_URL = import.meta.env.VITE_LANDING_DATA_URL || 'https://automations.redeon.cloud/webhook/landing-data';
const API_TOKEN = import.meta.env.VITE_API_KEY || ''; 

export const fetchLandingData = async (language: string): Promise<Partial<TranslationSchema>> => {
  try {
    const response = await fetch(`${API_BASE_URL}?lang=${language}`, {
      headers: {
        'X-API-Key': API_TOKEN,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch dynamic content: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching dynamic content from Odoo:', error);
    return {}; // Return empty to use fallbacks
  }
};
