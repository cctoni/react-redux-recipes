import actionsEnum from './actionsEnum';

export default function searchCompleted(results) {
  return {
    type: actionsEnum.SEARCH_COMPLETED,
    results: results
  }
}
