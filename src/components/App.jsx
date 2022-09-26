import { Component } from "react";

import { Wrapper } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './services/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { LoadButton } from './Button/Button';
import { Loader } from './Loader/Loader'

export class App extends Component {
  state = {
    searchImg: "",
    imageModal: '',
    data: [],
    modalShow: false,
    loader: false,
    page: 1,
  };

  openModal = (e) => {
    
    const largeImageURL = e.target.id
    this.setState({
      imageModal: largeImageURL,
      modalShow: true,
    })
  };

  closeModal = () => {
    this.setState({
      imageModal: '',
      modalShow: false,
    })
  };

  LoadMore = async () => {
    const { searchImg, page, data } = this.state;
    const response = await getImages(searchImg, page);

    this.setState({
      data: [...data, ...response.data.hits],
      page: page + 1,
    });
  };

  changeInputValue = (e) => {
    this.setState({
      searchImg: e.target.value,
    });
  };

  searchImg = async () => {
     this.setState({
      loader: true,
    });
    const response = await getImages(this.state.searchImg);
    this.setState({
      data: response.data.hits,
      loader: false,
    });
  };

  async componentDidMount() {
      this.setState({
      loader: true,
    });
    const response = await getImages(this.state.searchImg);
    const data = response.data.hits;
    this.setState({
      data,
      page: this.state.page + 1,
      loader: false,
    })
  };

  render() {
    const { data, imageModal, modalShow, loader } = this.state;
    return <Wrapper>
      <Searchbar searchImage={this.searchImg} changeInputValue={this.changeInputValue} value={this.state.searchImg } />   
      <ImageGallery images={data} openModal={this.openModal} />
      {modalShow && <Modal url={imageModal} closeModal={this.closeModal} />}
      {data.length > 0 && <LoadButton LoadMore={this.LoadMore} />}
      {loader && <Loader/>}
    </Wrapper>
  };
};


