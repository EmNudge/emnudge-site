import PropTypes from "prop-types"
import React from "react"
import './index.scss'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            updateTimeInterval: setInterval(() => this.updateTime(), 1000),
            audioIsPlaying: false,
            audioDuration: 0,
            audioCurrentTime: 0,
            audioVolume: 0,
            audioIsMuted: false,
        }

        this.timelineRef = React.createRef()
        this.volumeRef = React.createRef()
        this.audio = null
    }

    componentDidMount() {
        this.audio = new Audio(this.props.file)
        this.audio.volume = this.props.volume
        this.audio.addEventListener('loadeddata', () => {
            this.setState({ audioDuration: this.audio.duration, audioVolume: this.audio.volume })
        }, false)
    }

    setTime = e => {
        const offset = e.clientX - this.timelineRef.current.offsetLeft
        const width = parseInt(window.getComputedStyle(this.timelineRef.current).width)
        const timeToSeek = parseInt(offset / width * this.audio.duration)
        this.audio.currentTime = timeToSeek

        this.setState({ audioCurrentTime: timeToSeek })
    }

    setVolume = e => {
        const { x, width } = this.volumeRef.current.getBoundingClientRect()
        const offset = e.clientX - x
        const newVolume = offset / width
        this.audio.volume = newVolume

        this.setState({ audioVolume: newVolume })
    }

    updateTime = () => {
        if (!this.audio) return

        if (Math.abs(this.state.audioCurrentTime - this.state.audioDuration) < .1) {
            this.audio.currentTime = 0
            this.pauseAudio()
        }
        this.setState({ audioCurrentTime: this.audio.currentTime })
    }

    playAudio = () => {
        this.audio.play()
        this.setState({ audioIsPlaying: true })
    }
    pauseAudio = () => {
        this.audio.pause()
        this.setState({ audioIsPlaying: false })
    }

    getTimeCode = num => {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
      
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
          seconds % 60
        ).padStart(2, 0)}`;
    }

    getShortenedName = (text, limit = 19) => {
        if (text.length > limit) {
            return text.slice(0, limit - 3) + '...'
        }
        return text
    }

    toggleMute = ()  => {
        this.audio.muted = !this.audio.muted;
        this.setState({ audioIsMuted: this.audio.muted })
    }

    render() {
        return (
            <div style={{ '--audio-slider-color': this.props.color, width: this.props.width }} className="audio-player">
                <div className="timeline" ref={this.timelineRef} onClick={this.setTime}>
                    <div className="progress-bar" style={{
                        width: this.state.audioCurrentTime * 100 / this.state.audioDuration + '%' 
                    }}></div>
                </div>
                <div className="controls">
                    <div className="play-container">
                        { !this.state.audioIsPlaying 
                            ? <div className="play button" onClick={this.playAudio}></div>
                            : <div className="pause button" onClick={this.pauseAudio}></div>
                        }
                    </div>
                    <div className="text">
                        <div className="name">{this.getShortenedName(this.props.name)}</div>
                        <div className="time">
                            <span className="current-time">{this.getTimeCode(this.state.audioCurrentTime)}</span>
                            <span className="duration"> / {this.getTimeCode(this.state.audioDuration)}</span>
                        </div>
                    </div>
                    <div className="sound-container">
                        <div className="volume" ref={this.volumeRef} onClick={this.setVolume}>
                            <div className="volume-slider" style={{
                                width: this.state.audioVolume * 100 + '%' 
                            }}></div>
                        </div>
                        <div className="sound-icon-container" onClick={this.toggleMute}>
                            <div className={`sound sound-${this.state.audioIsMuted ? 'off'  : 'on'} button`}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AudioPlayer.defaultProps = {
    file: 'https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3',
    name: 'Music Sample',
    color: 'coral',
    width: "auto",
    volume: .3,
}

AudioPlayer.propTypes = {
    file: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    volume(props, propName, componentName) {
        if (props[propName] < 0 || props[propName] > 1) {
            return new Error(
                `Invalid prop value (${props[propName]}) of prop ${propName} supplied to ${componentName}. ` + 
                `Value must be in range [0, 1].`
            )
        }
    }
}

export default AudioPlayer
