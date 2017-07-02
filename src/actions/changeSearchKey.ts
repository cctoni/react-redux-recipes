import actionsEnum from './actionsEnum';

const changeSearchKey = (searchKey: string) => ({
  type: actionsEnum.CHANGE_SEARCH_KEY,
  searchKey,
});

export default changeSearchKey;
