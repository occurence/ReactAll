import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export class ImageGalleryItem extends Component {
    state = {
        selectedPhoto: null,
        toggleClose: false,
    }
    handleOpenModal = () => {
        // const { largeImageURL } = this.props;
        
        this.setState({
            selectedPhoto: this.props.largeImageURL,
            toggleClose: true,
        });
    }
    handleCloseModal = () => {
        this.setState({
            selectedPhoto: null,
            toggleClose: false,
        })
    }
    render(){
        const { webformatURL, tags } = this.props;
        const { selectedPhoto, toggleClose } = this.state;
        return(
            <li className={css.imageGalleryItem}
                onClick={()=>{this.handleOpenModal();this.setState({toggleClose: !toggleClose})}}>
                <img
                    src={webformatURL}
                    alt={tags}
                    className={css.imageGalleryItemImage}
                />
                {toggleClose &&
                    <ImageModal
                        modalClose={this.handleCloseModal}
                        modalOpen={selectedPhoto !== null}
                        photo={selectedPhoto}
                        tags={tags}
                    />
                }
            </li>
        )
    }
}