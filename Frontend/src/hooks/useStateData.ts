/**
 * ============================================================================
 * STATE DATA MANAGEMENT HOOK
 * ============================================================================
 * 
 * Purpose: Central hook for fetching and managing state-specific data.
 *          Provides seamless fallback from backend API to static data.
 * 
 * State Usage: All states (shared infrastructure)
 * 
 * Architecture:
 * - Immediately returns static data (non-blocking)
 * - Fetches backend data in background (enhancement, not requirement)
 * - Merges backend data with static data when available
 * - Uses requestIdleCallback for optimal performance
 * 
 * Key Features:
 * - Zero blocking time (static data always available)
 * - Graceful degradation (works offline)
 * - Performance optimized (delayed API calls)
 * 
 * Used by: Home.tsx (Rajasthan), StatePage.tsx (all other states)
 * ============================================================================
 */

import { useState, useEffect, useMemo } from 'react';
import { statesAPI } from '../services/api';
import { StateData, getStateBySlug } from '../data/states';

export const useStateData = (stateSlug: string): {
  stateData: StateData | null;
  isLoading: boolean;
  error: string | null;
} => {
  // Get static data immediately (non-blocking)
  const staticData = useMemo(() => {
    if (!stateSlug) return null;
    return getStateBySlug(stateSlug) || null;
  }, [stateSlug]);

  const [backendState, setBackendState] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch state from backend (non-blocking, enhance with API data)
  useEffect(() => {
    if (!stateSlug) {
      return;
    }

    // Fetch in background without blocking render
    const fetchState = async () => {
      try {
        const response = await statesAPI.getBySlug(stateSlug) as any;

        if (response.success && response.data) {
          setBackendState(response.data);
        }
      } catch (err) {
        // Silently fail - we already have static data
        console.warn('Failed to fetch state from backend, using static data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load state');
      }
    };

    // Delay API call to prioritize initial render and reduce TBT
    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const idleCallbackId = (window as any).requestIdleCallback(() => {
        fetchState();
      }, { timeout: 1000 });
      return () => {
        if (idleCallbackId && 'cancelIdleCallback' in window) {
          (window as any).cancelIdleCallback(idleCallbackId);
        }
      };
    } else {
      const timeoutId = setTimeout(() => {
        fetchState();
      }, 200);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [stateSlug]);

  // Use backend state if available, otherwise use static data (always available)
  const stateData = useMemo(() => {
    if (!staticData) return null;

    if (backendState) {
      // Merge backend data with static data structure
      return {
        ...staticData,
        name: backendState.name || staticData.name,
        slug: backendState.slug || staticData.slug,
        description: backendState.description || staticData.description,
        rtiPortalUrl: backendState.rti_portal_url || staticData.rtiPortalUrl
      };
    }

    // Return static data immediately (non-blocking)
    return staticData;
  }, [backendState, staticData]);

  return {
    stateData,
    isLoading: false, // Always false since we use static data immediately
    error
  };
};

export const getStateSlugFromSubdomain = (): string | null => {
  if (typeof window === 'undefined') return null;

  const hostname = window.location.hostname;
  const parts = hostname.split('.');

  // Check if it's a subdomain (e.g., telangana.filemyrti.com)
  if (parts.length >= 3) {
    const subdomain = parts[0].toLowerCase();
    return subdomain;
  }

  return null;
};

