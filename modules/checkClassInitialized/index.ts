export function checkClassInitialized(classObject: { initialized: any }) {
  if (!classObject.initialized) {
    throw new Error("Class is not initialized");
  }
}
