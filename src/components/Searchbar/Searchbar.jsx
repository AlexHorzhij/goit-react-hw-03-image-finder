import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { BsSearch } from "react-icons/bs";
import {Header, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';


export function Searchbar({ searchImage}) {
  function handleSubmit(value, {resetForm}) {
    searchImage(value)
    resetForm()
}

  return <Header >
    <Formik initialValues={{search: ''}} onSubmit={handleSubmit}>
    <SearchForm>
        <SearchFormButton type="submit">
          <BsSearch size={25}/>
        <SearchFormButtonLabel >Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        />
      </SearchForm>
    </Formik>
  </Header>
};

Searchbar.propTypes = {
  searchImage: PropTypes.func.isRequired,
};