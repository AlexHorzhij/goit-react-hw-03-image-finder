import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { BsSearch } from "react-icons/bs";
import {Header, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';


export function Searchbar({searchImage, changeInputValue, value}) {
  return <Header >
    <Formik initialValues={{search: ''}} onSubmit={searchImage}>
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
          onChange={changeInputValue}
          value={value}
        />
      </SearchForm>
    </Formik>
  </Header>
}

Searchbar.propTypes = {
  searchImage: PropTypes.func,
  changeInputValue: PropTypes.func,
  value: PropTypes.string,
}