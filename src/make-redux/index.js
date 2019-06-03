function reducer (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'red'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    case 'UPDATE_CONTENT_TEXT':
      return {
        ...state,
        content: {
          ...state.content,
          text: action.text
        }
      }
    case 'UPDATE_CONTENT_COLOR':
      return {
        ...state,
        content: {
          ...state.content,
          color: action.color
        }
      }
    default:
      return state
  }
}
function renderApp (newState, oldState = {}) {
  if (newState === oldState) return
  console.log('render app...')
  renderTitle(newState.title, oldState.title)
  renderContent(newState.content, oldState.content)
}

function renderTitle (newTitle, oldTitle) {
  if (newTitle === oldTitle) return
  console.log('render title...')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = newTitle.text
  titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent) {
  if (newContent === oldContent) return
  console.log('render content...')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = newContent.text
  contentDOM.style.color = newContent.color
}

// renderApp(appState)
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// renderApp(appState)

function createStore (reducer) {
  let state
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action) // 覆盖原对象
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}


const store = createStore(reducer)
let oldState = store.getState()
renderApp(store.getState())
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
})
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
store.dispatch({ type: 'UPDATE_CONTENT_TEXT', text: '内容' })
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: 'blue' })
// store.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'blue' })