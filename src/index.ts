// src/index.ts
export { initializeInstrumentation, setUser } from './config';
export { logEvent } from './instrumentation';
export { ErrorBoundary } from './errorBoundary';
export { RouteListener } from './RouteListener';
export type { InstrumentationConfig, UserData } from './types';
export { initializeGlobalErrorListeners } from './initializeGlobalErrorListeners';