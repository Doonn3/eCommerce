interface IC {
  (): boolean;
}

export function useForm() {
  const check = (...args: IC[]) => {
    const arr: boolean[] = [];
    args.forEach((func) => {
      const result = func();
      arr.push(result);
    });

    if (arr.includes(false)) return false;
    return true;
  };

  return { check };
}
