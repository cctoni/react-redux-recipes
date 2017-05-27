import actionsEnum from './actionsEnum';

export default function changeSearchKey(searchKey: string) {
  return {
    type: actionsEnum.CHANGE_SEARCH_KEY,
    searchKey: searchKey
  }
}
