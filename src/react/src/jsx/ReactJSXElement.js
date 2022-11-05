import hasOwnProperty from 'shared/hasOwnProperty'
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'

const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
}

function hasValidKey(config) {
  return config.key !== undefined;
}

function hasValidRef(config) {
  return config.ref !== undefined;
}

function ReactElement(type, key, ref, props) {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props
  }
}

export function jsxDEV(type, config) {
  let propName // 属性名
  const props = {} // 属性对象
  
  let key = null // 每个虚拟dom有个可选的key属性，用来区分一个父节点下不同子节点
  let ref = null // 可以通过它获取真实的dom

  if(hasValidKey(config)) {
    key = config.key + '';
  }

  if (hasValidRef(config)) {
    ref = config.ref;
  }

  for (propName in config) {
    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS[propName]) {
      props[propName] = config[propName]
    }
  }

  return ReactElement(type, key, ref, props)
}