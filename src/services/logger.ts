import * as Sentry from '@sentry/react';
import React from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

const isDev = import.meta.env.VITE_ENVIRONMENT == 'DEVELOPMENT';

export const initLogs = () => {
  if (isDev) {
    return;
  }
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: isDev ? 'dev' : 'prod',
    integrations: [
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect: React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['*'],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};

type LogLevel = 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug';

export const log = (
  message: string | null | undefined | object | unknown | never,
  level: LogLevel = 'info',
): void => {
  console.log(message);

  if (isDev) {
    return;
  }

  if (
    message === null ||
    message === undefined ||
    message === '' ||
    Object.keys(message).length === 0
  ) {
    return;
  }

  let messageString = '';

  if (message instanceof Object) {
    messageString = JSON.stringify(message);
  } else {
    messageString = message as string;
  }

  Sentry.captureMessage(messageString, {
    level: level,
  });
};
