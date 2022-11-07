import { createHostRootFiber } from './ReactFiber.js';
import { initializeUpdateQueue } from './ReactFiberClassUpdateQueue.js';

function FiberRootNode(containerInfo) {
  // containerInfo:div#root
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // 创建根节点div#root的fiber
  const uninitializedFiber = createHostRootFiber();
  // 根容器的current指向当前的根fiber
  root.current = uninitializedFiber;
  // 根fiber的stateNode指向真实的dom节点
  uninitializedFiber.stateNode = root;
  initializeUpdateQueue(uninitializedFiber);
  return root;
}