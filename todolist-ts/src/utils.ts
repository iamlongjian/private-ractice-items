export function findParentNode(target: HTMLElement, className: String) {
  while (target = target.parentNode as HTMLElement) {
    if (target.className === className)
      return target
  }
}