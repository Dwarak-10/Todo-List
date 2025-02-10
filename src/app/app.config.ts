import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA3rNDdXOtdzHuQIn3lAUxbdpPgdOCdSuY",
  authDomain: "todo-list-d8ddd.firebaseapp.com",
  projectId: "todo-list-d8ddd",
  storageBucket: "todo-list-d8ddd.firebasestorage.app",
  messagingSenderId: "526054581326",
  appId: "1:526054581326:web:f11086e060f80a3c9b4f1f"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore())
  ]
};





