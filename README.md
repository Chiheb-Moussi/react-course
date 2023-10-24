Lesson 2


1) useEffect
we use useEffect when there is a side effect in the componenet
and most of the time we use it for fetching data

useEffect(()=> {
    //side effects
})
2) Axios
installation: yarn add axios

axios.get<ICharacter>('https://rickandmortyapi.com/api/character/'+id)
.then((response) => {
    setCharacter(response.data)
}).catch((err) => {
    console.log(err)
})