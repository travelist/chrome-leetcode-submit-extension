import { Action } from './action'

export class SubmitAction implements Action {
  run(): void {
    this.getElement()?.click()
  }

  private getElement(): HTMLElement | null {
    return document.querySelector('[data-cy="submit-code-btn"]') as HTMLElement || null
  }
}
