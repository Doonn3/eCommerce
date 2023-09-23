class LocalStorageService {
  public save<T>(obj: T, key: string) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  public load<T>(key: string) {
    const result = localStorage.getItem(key);
    if (result === null) return null;
    return JSON.parse(result) as T;
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}

const localStorageService = new LocalStorageService();

export default localStorageService;
