import { createFiberRoot } from "./createFiberRoot";

export function createContainer(containerInfo) {
  return createFiberRoot(containerInfo);
}