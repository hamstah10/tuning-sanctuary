/**
 * API configuration for Symfony backend integration.
 * Set VITE_API_BASE_URL in your .env file to point to your Symfony backend.
 * Example: VITE_API_BASE_URL=https://api.chiptuningfile.de
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export async function apiPost<T>(endpoint: string, data: Record<string, unknown>): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `Request failed: ${response.status}`);
  }

  return response.json();
}
