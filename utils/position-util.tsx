export interface Position {
  left: number;
  x: number;
}

export const defaultPosition = (): Position => ({
  left: 0,
  x: 0,
});
