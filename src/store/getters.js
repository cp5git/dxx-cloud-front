const getters = {
  isShowProProperty: state => state.app.isShowProProperty,
  isShowNeedProperty: state => state.app.isShowNeedProperty,
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name,
  dapingjson: state => state.daping.dapingjson,
  dapingselect: state => state.daping.dapingselect,
}
export default getters
