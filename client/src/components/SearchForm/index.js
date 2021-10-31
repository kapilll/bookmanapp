import React from 'react';

function SearchForm(props) {

    return (
        <div id='search-form' className='text-center'>
            <input className='form-control' name='title'
                placeholder='Search...'
                type='text'
                onChange={props.handleInputChange}></input>
                <br />
                <button
                className='btn btn-success'
                    onClick={props.handleFormSubmit}
                    type='submit'
                >   Search
            </button>
        </div>
    )
}

export default SearchForm