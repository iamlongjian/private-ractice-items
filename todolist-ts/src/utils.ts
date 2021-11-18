export function findParentNode(target: HTMLElement, className: String) {
  while (target = target.parentNode as HTMLElement) {
    if (target.className === className)
      return target
  }
}

export function creatItem(innerHtml: string) {
  const oItem: HTMLElement = document.createElement('div')
  oItem.className = 'todo-item'
  oItem.innerHTML = innerHtml

  return oItem
}