import { Action } from './action'

export class ContestUseExampleTestcasesAction implements Action {
  run(): void {
    this.setExampleTestcasesButton()?.click()
    this.runCodeButton()?.click()
  }

  private setExampleTestcasesButton(): HTMLElement | null {
    return document.querySelector('[control-id=ControlID-3]') as HTMLElement || null
  }

  private runCodeButton(): HTMLElement | null {
    return document.querySelector('[control-id=ControlID-5]') as HTMLElement || null
  }
}
