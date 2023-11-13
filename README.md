Lesson 2

1. useEffect
   we use useEffect when there is a side effect in the componenet
   and most of the time we use it for fetching data

useEffect(()=> {
//side effects
}) 2) Axios
installation: yarn add axios

axios.get<ICharacter>('https://rickandmortyapi.com/api/character/'+id)
.then((response) => {
setCharacter(response.data)
}).catch((err) => {
console.log(err)
})

composants
props
jsx
useState
useEffect
useRef == docuement.getElementById
react-router
axios+ fetch
ts

useCallback
useMemo

react context
react reducer
redux-toolkit
jotai
form
zodd

tanstackquery = reactQuery
nodejs

=>application
=>app 2

graphql
