import { Action } from './action/action'
import { SubmitAction } from './action/submit-action'
import { RunExampleCasesAction } from './action/run-example-cases-action'
import { ContestUseExampleTestcasesAction } from './action/contest-use-example-testcases-action'
import { ContestSubmitAction } from './action/contest-submit-action'

/**
 * Main
 */
const main = async () => {
  const actions:Map<string, Action> = new Map([
    ['Quote', new RunExampleCasesAction() as Action],
    ['Enter', new SubmitAction()],
  ])

  const contestActions:Map<string, Action> = new Map([
    ['Quote', new ContestUseExampleTestcasesAction() as Action],
    ['Enter', new ContestSubmitAction()],
  ])

  window.addEventListener(
    'keydown',
    (event: KeyboardEvent) => {
      if ((!event.ctrlKey && !event.metaKey) || !event.shiftKey) return
      if (window.location.pathname.includes('contest')) {
        contestActions.get(event.code)?.run()
      } else {
        actions.get(event.code)?.run()
      }
    },
  )
}

main()
