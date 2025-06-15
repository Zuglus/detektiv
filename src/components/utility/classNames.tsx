export function classNames(...classes: (string | null | undefined | false | 0)[]) {
  return classes.filter(Boolean).join(' ');
}
