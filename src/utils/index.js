export const getUUid = () => {
  return Math.random()
    .toString(36)
    .substr(2)
}

export const sleep = (ms = 0) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

// 鉴于localStorage存储数据都比较简单，且坚持尽量不用的原则，就不做复杂处理了
// 对sessionStorage做了部分处理，增加了v5session的命名空间，且可以存储对象
/**
 * @author cuishoujia   2020-1-6
 * @description 从当前localStorage里获取指定数据
 * @param {key 必传} String 字段名
 */
export const getLocal = key => {
  return window.localStorage.getItem(key)
}
/**
 * @author cuishoujia   2020-1-6
 * @description 把数据存储到localStorage里
 * @param {key 必传} 字段名
 * @param {value 必传}  值
 */
export const setLocal = (key, value) => {
  window.localStorage.setItem(key, value)
}
/**
 * @author cuishoujia   2020-1-6
 * @description 清空localStorage （很少用）
 */
export const clearLocal = _ => {
  window.localStorage.clear()
}
/**
 * @author cuishoujia   2020-1-6
 * @description 获取当前的sessionStorage对象，此项目数据都存于v5Session命名空间下
 * @param {key 非必传} String 指定要获取的key,不传则返回整个命名空间下的数据对象
 */
export const getSession = key => {
  let v5Data = JSON.parse(window.sessionStorage.getItem('v5Session')) || {}
  if (key) return v5Data[key]
  return v5Data
}

/**
 * @author cuishoujia   2020-1-6
 * @description 向本地的sessionStorage存入一个对象，此项目数据都存于v5Session命名空间下
 * @param {obj 必传} Object 要存入的对象
 */
export const setSession = obj => {
  if (getObjectType(obj) !== 'Object') {
    throw new Error('此函数必须接受一个类型为Object的参数')
  }
  // 浏览器storage不接受object参数，必须转为json字符串
  window.sessionStorage.setItem(
    'v5Session',
    JSON.stringify({ ...getSession(), ...obj })
  )
}

/**
 * @author cuishoujia   2020-1-6
 * @description 清空本地sessionStorage v5Session命名空间下的数据
 */
export const clearSession = flag => {
  window.sessionStorage.setItem('v5Session', null)
}

/**
 * @author cuishoujia   2019-11-11
 * @description 获取对象的类型  此处不用typeof
 * @param {Object 必传} obj 需要获取类型的对象
 */
const getObjectType = obj => {
  // 以下函数返回obj的类型，如"[object Array]",从第7位至倒数第二位即为对象类型
  let typeStr = Object.prototype.toString.call(obj)
  return typeStr.substring(8, typeStr.length - 1)
}

/**
 * @author cuishoujia   2019-11-11
 * @description 循环遍历比较对象或者数组的各个元素
 * @param {Object 必传} source 需要遍历比较的第一个对象
 * @param {Object 必传} target 需要遍历比较的第二个对象
 * @param {Object 必传} isIgnoreSort 当比较到数组时是否忽略排序
 * @param {Array 选传} compareKeys 通过指定某些字段，判断两个对象是否相同
 */
const loopCompare = (source, target, isIgnoreSort, compareKeys) => {
  let temp = compareKeys || source
  let config = {
    isIgnoreSort: isIgnoreSort
  }
  for (let property in temp) {
    // 此处用for--in循环，适用于数组/对象
    // 判断source中的每个属性，在target中是否都存在，且其方式（自有/继承）相同
    property = compareKeys ? compareKeys[property] : property
    if (source.hasOwnProperty(property) !== target.hasOwnProperty(property)) {
      return false
    }
    if (!deepCompare(source[property], target[property], config)) return false
  }
  return true
}

/**
 * @author cuishoujia   2019-11-11
 * @description 比较两个对象是否相等   如果指定字段，前两个参数必须为Object
 * @param {Object 必传} source 比较的第一个对象
 * @param {Object 必传} target 比较的第二个对象
 * @param {Object 可选} config
 *      {compareKeys:[指定需要比较的字段],isIgnoreSort:是否忽略数组排序true/false}
 */
export const deepCompare = function (source, target, config = {}) {
  const { compareKeys = [], isIgnoreSort = true } = config

  // 先排除undefined\null 两个特殊属性，防止下面调用hasOwnProperty报错
  // 两个参数如果有一个不存在，此时两个参数相等则返回true,不相等则返回false
  if (!source || !target) {
    // NaN不等于自身 所以当两个值同时为NaN,这里就视为相等
    // eslint-disable-next-line no-self-compare
    if (source !== source && target !== target) return true
    return source === target
  }

  // 获取两个对象的类型
  let typeSource = getObjectType(source)
  let typeTarget = getObjectType(target)

  // 如果有指定的比较字段，需要先确保前两个参数为Object,否则返回false
  if (compareKeys.length > 0) {
    if (typeSource !== 'Object' || typeTarget !== 'Object') {
      return false
    }
    return loopCompare(source, target, isIgnoreSort, compareKeys)
  }

  // 两个参数类型不同，返回false
  if (typeSource !== typeTarget) return false

  // 数字、字符串、布尔等基本数据类型，直接比较
  if (
    typeSource === 'Number' ||
    typeSource === 'Boolean' ||
    typeSource === 'String'
  ) {
    return source === target
  }

  // 日期、正则、symbol类型，转为字符串比较
  if (
    typeSource === 'Date' ||
    typeSource === 'Regex' ||
    typeSource === 'Symbol'
  ) {
    return source.toString() === target.toString()
  }

  // set map 转为数组比较
  if (typeSource === 'Set' || typeSource === 'Map') {
    return deepCompare([...source], [...target])
  }

  // 如两个参数为对象，先比较其key个数是否相等,再遍历其元素
  if (typeSource === 'Object') {
    return (
      Object.keys(source).length === Object.keys(target).length &&
      loopCompare(source, target, isIgnoreSort)
    )
  }

  // 如两个参数为数组，先比较其长度是否相等
  if (typeSource === 'Array') {
    if (source.length !== target.length) return false

    // 判断是否忽略排序
    if (!isIgnoreSort) return loopCompare(source, target, isIgnoreSort)

    // 定义变量接受目标数组，因为后面有删除元素操作，需要保护源数据
    let tempObject = [...target]
    for (let property in source) {
      let tempObjectPosition = tempObject.findIndex(function (value) {
        return deepCompare(value, source[property])
      })
      if (tempObjectPosition < 0) return false
      // 此处必须删掉目标里的对应元素，防止类似[1,2,2]和[1,2,3]的比较
      tempObject.splice(tempObjectPosition, 1)
    }
    return true
  }
  // 类型均不属于上述所有类型，即表示不支持，返回false
  return false
}
