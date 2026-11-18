export const EASE = {
  standard: [0.16, 1, 0.3, 1] as const, // expo-out, used for reveals
  soft: [0.22, 1, 0.36, 1] as const,
};

export const DURATION = {
  fast: 0.4,
  base: 0.8,
  slow: 1.2,
};

export const SCENE_COLORS = {
  node: "#f5f5f4",
  nodeActive: "#e8a33d",
  edge: "#3a3a40",
  edgeActive: "#e8a33d",
  packet: "#e8a33d",
};
