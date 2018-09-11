export default {
  imgList (state) {
    if (state.home.newItemList) {
      return state.home.newItemList.splice(0, 4)
    }
  }
}
