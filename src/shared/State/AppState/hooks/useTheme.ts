export function useTheme() {
  const switchTheme = (name: string) => {
    document.querySelector('html')!.setAttribute('data-theme', name)!;
  };
  return { switchTheme };
}
