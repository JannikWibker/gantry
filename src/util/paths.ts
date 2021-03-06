const has = (object: any, key: string): boolean => Object.prototype.hasOwnProperty.call(object, key)


const build_object_from_paths = (entries: { key: string[], value: any }[]) => {
  const obj = {}

  entries.forEach(entry => {
    const target = entry.key.slice(0, -1).reduce((tmp_obj: any, step: string) => {
      if(!has(tmp_obj, step)) {
        tmp_obj[step] = {}
      }
      return tmp_obj[step]
    }, obj)
    target[entry.key[entry.key.length-1]] = entry.value
  })

  return obj
}

export {
  build_object_from_paths
}
