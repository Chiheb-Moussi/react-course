type PersonProps = {
    name: string;
    age?: number;
}

const Person = ({name, age}: PersonProps) => {
    
    return <div className='person' >Hello my name is {name} and i am {age} years old</div>
}

export default Person;

