import type { ReadonlyURLSearchParams } from 'next/navigation';

export function addQueryParam(
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  key: string,
  value: string,
) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(key, value);
  return `${pathname}?${params.toString()}`;
}

export function removeQueryparam(
  pathname: string,
  searchParams: ReadonlyURLSearchParams,
  key: string,
) {
  const params = new URLSearchParams(searchParams.toString());
  params.delete(key);
  return `${pathname}?${params.toString()}`;
}
