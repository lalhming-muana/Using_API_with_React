import {useState} from 'react';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState('');
    const handleFormSubmit=(event)=>{

        event.preventDefault();
        onSubmit('cars');

    }

    const handleChangeEvent=(event)=>{
        setTerm(event.target.value);
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChangeEvent} />
        </form>
        
    </div>
}
export default SearchBar;