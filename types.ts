
// Add missing React import to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum AuthMode {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  NONE = 'NONE'
}

export interface Feature {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}
