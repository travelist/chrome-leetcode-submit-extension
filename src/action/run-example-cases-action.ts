import { Action } from './action'

export class RunExampleCasesAction implements Action {
  run(): void {
    if (!this.hasTargetElement()) this.prepare()
    this.getElement()?.click()
  }

  private hasTargetElement() : boolean {
    return document.querySelectorAll('div[class*=dropdown-item]')?.length > 0
  }

  private prepare(): void {
    const t = document.querySelector('[data-cy=run-code-btn]')?.querySelector('.ant-dropdown-trigger') as HTMLElement
    t?.click()
  }

  private getElement(): HTMLElement | null {
    return Array.from(document.querySelectorAll('div[class*=dropdown-item]'))
      .find((el) => el.textContent?.toLocaleLowerCase().includes('run example testcases')) as HTMLElement || null
  }
}
