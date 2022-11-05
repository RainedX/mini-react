function FiberRootNode(containerInfo) {
  // containerInfo:div#root
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);

  return root;
}