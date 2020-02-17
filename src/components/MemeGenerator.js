import React, {Component} from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // Meme random image generator API
  componentDidMount(){
    const url= "https://api.imgflip.com/get_memes"

    fetch(url)
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value} )
  }

  render() {
    return(
      <div>
        <form className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <br />

          <button>Gen</button>
        </form>
      </div>
    )
  }
}

export default MemeGenerator
