import { Action } from './action'

export class ContestSubmitAction implements Action {
  run(): void {
    this.getElement()?.click()
  }

  private getElement(): HTMLElement | null {
    return document.querySelector('[control-id=ControlID-6]') as HTMLElement || null
  }
}
