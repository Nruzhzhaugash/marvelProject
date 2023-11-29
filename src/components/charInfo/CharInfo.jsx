import { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader/Loader'
import Error from '../Error/Error'
import Skeleton from '../skeleton/Skeleton'
import './charInfo.scss'
import MarvelService from '../../services/MarvelService'

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
    }

    componentDidCatch(err, info) {
        console.log(err, info)
        this.setState({
            error: true
        })
    }

    updateChar = () => {
        const { charId } = this.props
        if (!charId) {
            return
        }

        this.onCharLoading()

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const { char, loading, error } = this.state

        const skeleton = (char || loading || error) ? null : <Skeleton />
        const errorMessage = error ? <Error /> : null
        const spinner = loading ? <Loader /> : null
        const content = !(loading || error || !char) ? <View char={char} /> : null

        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const { name, description, thumbnail, homepage, wiki, comics} = char

    let imgStyle = { 'objectFit': 'cover' }
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'contain' }
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? (
                    comics.map((item, i) => {
                        if (i > 9) return null;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        );
                    })
                ) : (
                    <li className="char__comics-item">There is no comics with this character</li>
                )}
            </ul>
        </>
    )
}

View.propTypes = {
    char: PropTypes.shape({
        comics: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
}

export default CharInfo;
