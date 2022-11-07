import { HostRoot } from './ReactWorkTags.js';
import { NoFlags } from './ReactFiberFlags.js';

function FiberNode(tag, pendingProps, key) {
  // Instance
  this.tag = tag; // fiber类型
  this.key = key;
  this.type = null; // 虚拟dom节点的类型（p, span, div）
  // 每个虚拟dom <<<===>>> fiber节点 <<<===>>> 真实dom
  this.stateNode = null; // 此fiber对应的真实dom节点

  // Fiber
  this.return = null;
  this.child = null; // 指向第一个字节点
  this.sibling = null;

  this.pendingProps = pendingProps; // 等待生效的属性
  this.memoizedProps = null; // 已经生效的属性
  this.updateQueue = null;
  // fiber有自己的状态，比如类组件对应的fiber，存的就是类的实例状态
  this.memoizedState = null;
  this.dependencies = null;

  // Effects
  this.flags = NoFlags; // 副作用标识
  this.subtreeFlags = NoFlags;

  this.alternate = null;
}

const createFiber = function(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}

export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}