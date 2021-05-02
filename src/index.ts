import { Action } from './action/action'
import { SubmitAction } from './action/submit-action'
import { RunExampleCasesAction } from './action/run-example-cases-action'

/**
 * Main
 */
const main = async () => {
  const actions:Map<string, Action> = new Map([
    ['Quote', new RunExampleCasesAction() as Action],
    ['Enter', new SubmitAction()],
  ])

  window.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if ((!event.ctrlKey && !event.metaKey) || !event.shiftKey) return
      actions.get(event.code)?.run()
    },
  )
}

main()
