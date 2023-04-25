import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import axios from 'axios';
import css from './App.module.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    isLoading: false,
    total: 0,
    error: null,
    largeImage: '',
    tags: '',
  };

  formSubmitHandler = data => {
    this.setState({
      name: data.name,
      pictures: [],
      page: 1,
      largeImage: '',
      tags: '',
      total: 0,
      error: null,
    });
  };

  buttonPaginateHandler = () => {
    const counter = this.state.page + 1;
    this.setState({ page: counter });
  };

  fetchPictures = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const responce = await axios.get(
        `/?q=${query}&page=${page}&key=34100220-38e5a3f6c25c883f1441c4bda&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (responce.data.hits.length === 0) {
        return alert('We have not found anything for this search...');
      }
      this.setState(({ pictures }) => ({
        pictures: [...pictures, ...responce.data.hits],
        total: responce.data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.name;
    const page = this.state.page;

    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.fetchPictures(query, page);
    }
  }

  render() {
    const { pictures, isLoading, total } = this.state;
    const totalPage = total / pictures.length;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <div>
          {pictures.length > 0 ? <ImageGallery toRender={this.state} /> : null}

          {isLoading && <Loader />}
          {totalPage > 1 && !isLoading && pictures.length !== 0 && (
            <Button
              toVisible={this.state}
              pageSubmit={this.buttonPaginateHandler}
            />
          )}
        </div>
      </div>
    );
  }
}
