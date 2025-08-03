import React, { lazy } from 'react';
import LazyComponent from '../ui/LazyComponent';

// Lazy load heavy content components
const LazyContentAbout = lazy(() => import('./about/contentAbout'));
const LazyContentBlog = lazy(() => import('./blog/contentBlog'));
const LazyContentContact = lazy(() => import('./contact/contentContact'));
const LazyContentGuarantee = lazy(() => import('./guarantee/contentGuarantee'));
const LazyContentJob = lazy(() => import('./job/contentJob'));
const LazyContentPrice = lazy(() => import('./price/contentPrice'));

/**
 * Lazy loaded wrapper for content components
 * Provides better performance by code splitting
 */
export function LazyAbout(props: any) {
  return (
    <LazyComponent>
      <LazyContentAbout {...props} />
    </LazyComponent>
  );
}

export function LazyBlog(props: any) {
  return (
    <LazyComponent>
      <LazyContentBlog {...props} />
    </LazyComponent>
  );
}

export function LazyContact(props: any) {
  return (
    <LazyComponent>
      <LazyContentContact {...props} />
    </LazyComponent>
  );
}

export function LazyGuarantee(props: any) {
  return (
    <LazyComponent>
      <LazyContentGuarantee {...props} />
    </LazyComponent>
  );
}

export function LazyJob(props: any) {
  return (
    <LazyComponent>
      <LazyContentJob {...props} />
    </LazyComponent>
  );
}

export function LazyPrice(props: any) {
  return (
    <LazyComponent>
      <LazyContentPrice {...props} />
    </LazyComponent>
  );
}