import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  OnClickCounterLetter = () => {
    this.setState(PrevState => ({count: PrevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="Letter_container">
        <div className="letter_image_text">
          <div className="text_part_of_letter_count">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="phraseText">Enter the phrase"</label>
            <div>
              <input
                type="search"
                placeholder="Enter Phrase"
                id="phraseText"
                onChange={this.OnClickCounterLetter}
              />
            </div>
            <div>
              <p type="button" className="button_box_container">
                No.of letters:<span>{count}</span>
              </p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                className="image_letter_count_image"
                alt="letters calculator"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
