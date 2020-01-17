//property decorator
export function InspectProperty(target: any, key: string,): void {
  let val = target[key];

  let getter = function() {
    console.log(`Get: ${key} => ${val}`);
    return val;
  }
  let setter = function(newValue) {
    console.log(`Set: ${key} => ${newValue}`);
    val = newValue
  }

  if(delete target[key]) {
    Object.defineProperty(target, key,{
      get: getter,
      set: setter
    });
  }
}