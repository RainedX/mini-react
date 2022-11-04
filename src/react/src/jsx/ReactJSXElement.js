const RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
}

function hasValidKey() {
  return config.key !== undefined;
}

function hasValidRef() {
  return config.ref !== undefined;
}

export function jsxDev(type, config) {
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
    if (Object.hasOwnProperty.call(config, propName) && !RESERVED_PROPS[propName]) {
      props[propName] = config[propName]
    }
  }

  return ReactElement(type, key, ref, props)
}