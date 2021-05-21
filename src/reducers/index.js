import { combineReducers } from 'redux'
import count from './count'

console.log(count)
export default combineReducers({ count })
// 複数をコンバインする
// export default combimeReducers({foo,bar,baz})