export const TAG_CONTROLLER = Symbol('Controller');

/**
 * Controller
 * @param path
 * @returns {(Controller:Function)=>undefined}
 */
export function controller(path?: string): ClassDecorator {
  return function (Controller: Function) {
    if (!path) {
      path = Controller.name;
    }
    const parent = Object.getPrototypeOf(Controller);
    if (parent[TAG_CONTROLLER]) {
      path = parent[TAG_CONTROLLER] + path;
    }
    Object.defineProperty(Controller,TAG_CONTROLLER,{valuµ e:path});
   // Controller[TAG_CONTROLLER] = path;
  }
}
