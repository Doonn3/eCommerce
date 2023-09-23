export function useTheme(name: string) {
  document.querySelector('html')!.setAttribute('data-theme', name)!;
}
