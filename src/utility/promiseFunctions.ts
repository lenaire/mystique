export const isPromise = <T = unknown>(obj: any): obj is Promise<T> => {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
};
