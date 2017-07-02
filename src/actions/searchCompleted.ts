import actionsEnum from './actionsEnum';

const searchCompleted = results => ({
  type: actionsEnum.SEARCH_COMPLETED,
  results,
});

export default searchCompleted;
