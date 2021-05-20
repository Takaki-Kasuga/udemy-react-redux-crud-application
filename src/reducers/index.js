import { combimeReducers } from 'redux'
import count from './count'

export default combimeReducers({ count })
// 複数をコンバインする
// export default combimeReducers({foo,bar,baz})